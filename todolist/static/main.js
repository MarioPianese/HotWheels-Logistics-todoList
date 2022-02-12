function show_hide_presentation() {
    let container_task_editor = document.querySelector(".container__task-editor");
    let single_task = document.querySelector(".single-task-home");
    let presentation_pane = document.querySelector(".presentation");
    let button_container = document.querySelector(".btn-container");
    let container_login = document.querySelector(".container-login");
    let button_danger = document.querySelector(".btn-danger");
    // Se non ci sono task
    if (single_task == null && container_login == null) {
        button_danger.style.display = "none";
    }
    else if (single_task != null && container_login != null) {
        console.log(container_login);
        button_danger.style.display = "inline-block";
    }
    else {

    }
    console.log(single_task);
    // Se la schermata di creazione dei task è attiva
    if (container_task_editor != null) {
        // Disattiva i bottoni
        button_container.style.display = "none";
    }
    else {
        // Altrimenti attiva i bottoni
        button_container.style.display = "block";
    }
    // Se la schermata di creazione dei task è attiva oppure
    // la schermata dei task è attiva oppure
    // la schermata di login è attiva
    if (container_task_editor != null || single_task != null || container_login != null) {
        presentation_pane.style.display = "none";
    }
    else {
        presentation_pane.style.display = "block";
    }
}

function getDate() {
    let data = document.getElementsByClassName("date");
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = 'Oggi ' + dd + '/' + mm + '/' + yyyy;
    document.querySelector(".date").innerHTML = today;
}

function setUpEventListeners() {
    window.addEventListener("load", show_hide_presentation);
}

function init() {
    getDate();
    setUpEventListeners();
}

init();