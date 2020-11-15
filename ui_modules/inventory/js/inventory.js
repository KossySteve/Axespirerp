// Swal.fire('hello', 'world', 'error');
const { ipcRenderer } = require('electron');
// const { notifications } = require('../../../constants/notifications');

const prepareData = () => {
    const modelElement = document.querySelector('#model_name');
    window.model = modelElement.getAttribute('name');
    window.searchDisplay = document.getElementById("search-result");
    window.searchByNameOrCode = document.getElementById("searchByNameOrCode");
    window.group = document.getElementById('group');
    window.markup = document.getElementById('markup'); 
    window.loader = document.querySelector('#loader-overlay');

    window.purchase_rate_option = document.getElementById('purchase_rate_option'); 
    window.standard_cost = document.getElementById('standard_cost');

    window.group_suggestions = document.getElementById('group_suggestions');
    window.group_container = document.getElementById('group_container');

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
    if (loader) {
        if (!loader.classList.contains('is-active')) {
            loader.classList.add('is-active');
        }
    }
}

const toggleLoaderOff = () => {
    console.log('*********LOADER BEING TOGGLED OFF**********');
    if (loader) {
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

    //if data is created successfully
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

    // when a group search/suggestion is successful
    ipcRenderer.on(notifications.GROUP_SEARCH_SUCCESSFUL, (event, data) => {
        console.log({ msg: "**GROUP SUGGESTION SUCCESS**", data: data })

        // listen for the click event on group suggestion items and pass the selection to the input field
        const listenForClickToGetData = (element) => {
            element.addEventListener('click', function () {
                // get name from the group data
                const name = this.firstElementChild.innerHTML.replace('Name : ', '').trim();
                console.log('Name after click: ', name);

                // add name to input field
                group.value = name;

                // clear the results
                group_container.classList.remove('show');
                group_suggestions.classList.remove('show');
            })
        }

        // clears the previous results appended to the DOM
        group_suggestions.innerHTML = '';

        if (data.length !== 0) {
            group_container.classList.add('show');
            group_suggestions.classList.add('show');
            data.forEach((data, index) => {
                group_suggestions.insertAdjacentHTML('beforeend',
                    `<div id="group_suggestion_item_${index}" class="dropdown-item bg-info text-white" href="#"><div>Name : ${data.dataValues.name} </div><div> Code : ${data.dataValues.code}</div></div>
                    <div role="separator" class="dropdown-divider"></div>
                    `
                )

                //  add listener to the dom element that was just created
                listenForClickToGetData(document.getElementById(`group_suggestion_item_${index}`));
            })
        }
        else {
            group_container.classList.remove('show');
            group_suggestions.classList.remove('show');
        }
    });
}

const autoGenerate = () => {
    let values = {};

    // experimental unique code generation strategy
    const generateUniqueId = () => {
        return Math.random().toString(36).substr(2, 9);
    }

    // values.uuid = `${model}-${uuidv4()}`;
    values.uuid = `${SubmoduleShorthand["Item"]}-${generateUniqueId()}`
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
            toggleLoaderOn();
            fields.forEach((item, index) => {
                console.log(document.getElementsByName(item)[0].value, ":", index);
                let itemVal = document.getElementsByName(item)[0].value;
                data.data[item] = itemVal;
            });
            ipcRenderer.send(notifications.MODEL_SAVE, data);
            console.log("model-save event emitted");
        }
    });

    if (searchByNameOrCode) {
        // add event listener to the input name field
        searchByNameOrCode.addEventListener("keyup", (e) => {
            e.preventDefault();
            // toggleLoaderOn();
            let value = searchByNameOrCode.value;
            console.log("val changed", value);
            data.searchKey = { "value": value, fields: ["name", "code"] };
            console.log(data.searchKey);
            clearSearchField();
            if (value !== "") {
                ipcRenderer.send(notifications.MODEL_SEARCH_NAME, data);
            }
        });
    }

    if (group) {
        // listen for the key up event and suggest group from db
        group.addEventListener("keyup", (e) => {
            e.preventDefault();

            let value = group.value;
            console.log("group value:", value);

            let data = { model: "ItemGroup", value: value, fields: ["name", "code"] };

            if (value !== "") {
                ipcRenderer.send(notifications.GROUP_SEARCH, data);
            }
            else {
                // fix for removing the displayed group suggestions when the group field is empty
                group_suggestions.innerHTML = "";
                group_suggestions.classList.remove('show');
                group_container.classList.remove('show');
            }
        })
    }

    // 

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