// Swal.fire('hello', 'world', 'error');
const {ipcRenderer} = require('electron');
const modelElement = document.querySelector('#model_name');
console.log(modelElement);
const model = modelElement.getAttribute('name');
fields = fields[model];
let data = {};
data.model = model;
data.data={};
console.log(notifications);

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