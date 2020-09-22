// Swal.fire('hello', 'world', 'error');
const {ipcRenderer} = require('electron')

document.addEventListener('keydown', (event)=>{
    // if ctrl + s is pressed
    if(event.code === "KeyS" && event.ctrlKey){
        let form = document.querySelector('form')
        console.log(form)
        ipcRenderer.send('save-form', {data: "data"})
    }
})