// Swal.fire('hello', 'world', 'error');
const {ipcRenderer} = require('electron');
const modelElement = document.querySelector('#model_name');
console.log(modelElement);
const model = modelElement.getAttribute('name');
const searchDisplay = document.getElementById("search-result");
fields = fields[model];
let data = {};
data.model = model;
data.data={};
console.log(notifications);
data.searchKey = "";
let searchStore = [];
loader = document.querySelector('#loader-overlay');

const clearSearchField = () => {
    searchDisplay.innerHTML='';
    searchDisplay.style.display = "none";
};

const toggleLoaderOn = () => {   
    if(!loader.classList.contains('is-active')){
        loader.classList.add('is-active');
    }
} 

const toggleLoaderOff = () => {
    if(loader.classList.contains('is-active')){
        loader.classList.remove('is-active');
    }
}

document.addEventListener('keydown', (event)=>{
    // if ctrl + s is pressed
    if(event.code === "KeyS" && event.ctrlKey){
        toggleLoaderOn();
        fields.forEach((item, index) => {
            let itemVal = document.getElementsByName(item)[0].value;
            data.data[item] = itemVal;
        });
        ipcRenderer.send(notifications.MODEL_SAVE, data); 
        console.log("model-save event emitted");  
    }
})

//if a notification is recieved
ipcRenderer.on(notifications.DATA_CREATION_SUCCESSFUL, (event, data) => {
    toggleLoaderOff();
    console.log("data added event");
    fields.forEach((item, index) => {
        document.getElementsByName(item)[0].value = "";
    });
    Swal.fire('Success',data,'success');
});

ipcRenderer.on(notifications.DATA_CREATION_ERROR, (event, data) => {
    toggleLoaderOff();
    console.log(data);
    Swal.fire('Input Error',data,'error');
});

const searchByName = document.getElementById("searchByName");

// add event listener to the input name field
searchByName.addEventListener("keyup", (e) => {
    e.preventDefault();
    // toggleLoaderOn();
    let value = searchByName.value;
    console.log("val changed", value);
    data.searchKey = {"name": value};
    console.log(data.searchKey);
    clearSearchField();
    if( value !== "" ){
        ipcRenderer.send(notifications.MODEL_SEARCH_NAME, data);
    }
}); 

const displaySearchItem = (id) => {
    clearSearchField();
    let item = searchStore[id];
    let keys = Object.keys(item);
    for(let i = 0; i < keys.length; i++){
        console.log(keys[i]);
        try {
            let field = document.getElementsByName(keys[i])[0];
            field.value = item[keys[i]];
            console.log(field.value);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(item.length, item,keys);
}

ipcRenderer.on(notifications.MODEL_SEARCH_NAME_SUCCESSFUL, (event, data) => {
    toggleLoaderOff();
    console.log({msg:"model search complete", data: data});
    data.forEach((result) => {
        result = result.dataValues;
        searchStore[result.id] = result;
        let searchChild = document.createElement('div'); 
        let button = document.createElement("button");
        button.setAttribute('onclick', `displaySearchItem("${result.id}")`);
        let buttonText = document.createTextNode(`name: ${result.name} code: ${result.code}`);
        button.appendChild(buttonText);
        searchChild.appendChild(button);
        searchDisplay.appendChild(searchChild);
    })
    searchDisplay.style.display = "block";

    console.log(searchStore);
    if(data.length === 0 ){
        searchDisplay.style.display= 'none';
    }
});