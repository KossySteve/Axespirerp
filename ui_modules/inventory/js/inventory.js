// Swal.fire('hello', 'world', 'error');
const {ipcRenderer} = require('electron');
const modelElement = document.querySelector('#model_name');
console.log(modelElement);
const model = modelElement.getAttribute('name');
fields = fields[model];
let data = {};
data.model = model;
data.data={};

document.addEventListener('keydown', (event)=>{
    // if ctrl + s is pressed
    if(event.code === "KeyS" && event.ctrlKey){
        fields.forEach((item, index) => {
            let itemVal = document.getElementsByName(item)[0].value;
            data.data[item] = itemVal;
        });
        ipcRenderer.send('model-save', data);   
    }
})

//if a notification is recieved
ipcRenderer.on('data-added', (event, data) => {
    fields.forEach((item, index) => {
        document.getElementsByName(item)[0].value = "";
    });
    Swal.fire('Success','Item added successfully','success');
});