// Swal.fire('hello', 'world', 'error');
const {ipcRenderer} = require('electron')
ipcRenderer.send('test-event', {text: "hello world"})

// document.addEventListener('keydown', (event)=>{
//     console.log(event);
//     // if ctrl + s is pressed
//     if(event.code === "KeyS" && event.ctrlKey){
//         console.log("file saved")
//     }
// })