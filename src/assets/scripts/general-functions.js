function ShowNotificationMessage (message){
    document.querySelector("#menssageText").innerHTML= message;
    $('#mensajeModal').modal()
}

function ShowRemoveConfimationPublic(){
    $('#confirmarEliminacion').modal();
}

function CloseModal(modalId){
    $('#' + modalId).modal('hide')
}
