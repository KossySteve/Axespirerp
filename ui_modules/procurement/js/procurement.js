// Swal.fire('hello', 'world', 'error');
const { ipcRenderer } = require('electron');

const prepareData = () => {
    const modelElement = document.querySelector('#model_name');
    window.model = modelElement.getAttribute('name');
    window.searchDisplay = document.getElementById("search-result");
    window.searchByName = document.getElementById("searchByName");
    window.searchByCode = document.getElementById("searchByCode");
    window.loader = document.querySelector('#loader-overlay');
    fields = fields[model];
    window.data = {};
    data.model = model;
    data.data = {};
    data.searchKey = "";
    window.searchStore = [];
}

console.log(fields, window.model);
/**
 * Start of functions being defined
 */

const clearSearchField = () => {
    if (searchDisplay) {
        console.log('*********SEARCH FIELD BEING CLEARED**********');
        searchDisplay.innerHTML = '';
        searchDisplay.style.display = "none";
    }
};

const toggleLoaderOn = () => {
    console.log('*********LOADER BEING TOGGLED ON**********');
    if(loader){
        if (!loader.classList.contains('is-active')) {
            loader.classList.add('is-active');
        }
    }
}

const toggleLoaderOff = () => {
    console.log('*********LOADER BEING TOGGLED OFF**********');
    if(loader){
        if (loader.classList.contains('is-active')) {
            loader.classList.remove('is-active');
        }
    }
}

const displaySearchItem = (id) => {
    clearSearchField();
    let item = searchStore[id];
    let keys = Object.keys(item);
    for (let i = 0; i < keys.length; i++) {
        console.log(keys[i]);
        try {
            let field = document.getElementsByName(keys[i])[0];
            field.value = item[keys[i]];
            console.log(field.value);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(item.length, item, keys);
}


/**
 * Displays search results to the user
 * @param {array} data 
 */
const displaySearchResults = (data) => {
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
    if (data.length === 0) {
        searchDisplay.style.display = 'none';
    }
}


/**
 * End of functions being defined
 */


//function that starts all the notification listeners
const listenForNotifications = () => {

    //if dtat is created successfully
    ipcRenderer.on(notifications.DATA_CREATION_SUCCESSFUL, (event, data) => {
        toggleLoaderOff();
        console.log("data added event");
        fields.forEach((item, index) => {
            document.getElementsByName(item)[0].value = "";
        });
        Swal.fire('Success', data, 'success');
    });

    //if there is an error when creating data
    ipcRenderer.on(notifications.DATA_CREATION_ERROR, (event, data) => {
        toggleLoaderOff();
        console.log(data);
        Swal.fire('Input Error', data, 'error');
    });

    //when a search by name is successful
    ipcRenderer.on(notifications.MODEL_SEARCH_NAME_SUCCESSFUL, (event, data) => {
        toggleLoaderOff();
        console.log({ msg: "model search complete", data: data });
        displaySearchResults(data);
    });

     //when a search by code is successful
     ipcRenderer.on(notifications.MODEL_SEARCH_CODE_SUCCESSFUL, (event, data) => {
        toggleLoaderOff();
        console.log({ msg: "**CODE SEARCH SUCCESS**", data: data });
        displaySearchResults(data);
    });
}

const autoGenerate = () => {
    let values = {};
    values.uuid = `${model}-${uuidv4()}`;
    values.date = new Date().toLocaleDateString();
    let codeField = document.getElementsByName('code')[0];
    let dateField = document.getElementsByName('date')[0];

    if (codeField) {
        codeField.value = values.uuid;
        codeField.setAttribute('disabled', true);
    }

    if (dateField) {
        dateField.value = values.date;
        dateField.setAttribute('disabled', true);
    }
    // console.log(values, codeField, dateField);
};

const startEventListeners = () => {
    //listen for crtl + s keypress
    document.addEventListener('keydown', (event) => {
        // if ctrl + s is pressed
        if (event.code === "KeyS" && event.ctrlKey) {
            console.log("save is invoked")
            toggleLoaderOn();
            fields.forEach((item, index) => {
                let itemVal = document.getElementsByName(item)[0].value;
                data.data[item] = itemVal;
            });
            ipcRenderer.send(notifications.MODEL_SAVE, data);
            console.log("model-save event emitted");
        }
    });

    if (searchByName) {
        // add event listener to the input name field
        searchByName.addEventListener("keyup", (e) => {
            e.preventDefault();
            // toggleLoaderOn();
            let value = searchByName.value;
            console.log("val changed", value);
            data.searchKey = { "name": value };
            console.log(data.searchKey);
            clearSearchField();
            if (value !== "") {
                ipcRenderer.send(notifications.MODEL_SEARCH_NAME, data);
            }
        });
    }

    //searching by code
    if (searchByCode) {
        // add event listener to the input code field
        searchByCode.addEventListener("keyup", (e) => {
            e.preventDefault();
            // toggleLoaderOn();
            console.log("***DATA CONTENT***", data);
            let value = searchByCode.value;
            console.log("***SEARCH BY CODE VALUE***", value);
            data.searchKey = { "code": value };
            console.log(data.searchKey);
            clearSearchField();
            if (value !== "") {
                ipcRenderer.send(notifications.MODEL_SEARCH_CODE, data);
            }
        });
    }

};

//initialize the inventory
const init = () => {
    prepareData();
    startEventListeners();
    autoGenerate();
    listenForNotifications();
}

init();
console.log(`*******${fields}  ${loader}*******`);