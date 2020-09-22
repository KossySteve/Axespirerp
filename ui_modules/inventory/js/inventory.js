// Swal.fire('hello', 'world', 'error');
const {ipcRenderer} = require('electron')

document.addEventListener('keydown', (event)=>{
    // if ctrl + s is pressed
    if(event.code === "KeyS" && event.ctrlKey){
        let form = document.getElementById('model').elements
        console.log(form)
        // form.ForEach((index, item)=>{
        //     console.log(index)
        // })
        ipcRenderer.send('save-form', {data: "data"})
    }
})