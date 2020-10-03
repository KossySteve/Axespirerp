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

document.addEventListener('keydown', (event)=>{
    // if ctrl + s is pressed
    if(event.code === "KeyS" && event.ctrlKey){
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
    console.log("data added event");
    fields.forEach((item, index) => {
        document.getElementsByName(item)[0].value = "";
    });
    Swal.fire('Success',data,'success');
});

ipcRenderer.on(notifications.DATA_CREATION_ERROR, (event, data) => {
    // fields.forEach((item, index) => {
    //     document.getElementsByName(item)[0].value = "";
    // });
    console.log(data);
    Swal.fire('Input Error',data,'error');
});

const searchByName = document.getElementById("searchByName");

// add event listener to the input name field
searchByName.addEventListener("keyup", (e) => {
    e.preventDefault();
    let value = searchByName.value;
    console.log("val changed", value);
    data.searchKey = {"name": value};
    console.log(data.searchKey);
    searchDisplay.style.display = "none";
    searchDisplay.innerHTML='';
    ipcRenderer.send(notifications.MODEL_SEARCH_NAME, data);
}); 


ipcRenderer.on(notifications.MODEL_SEARCH_NAME_SUCCESSFUL, (event, data) => {
    console.log({msg:"model search complete", data: data});
    searchDisplay.style.display = "block";
    let searchChild = document.createElement('div'); 
    let button = document.createElement("button");
    let buttonText = document.createTextNode(`name: ${data.dataValues.name} code: ${data.dataValues.code}`);
    button.appendChild(buttonText);
    searchChild.appendChild(button);
    searchDisplay.appendChild(searchChild);
    // Swal.fire('Input Error',data,'error');
});