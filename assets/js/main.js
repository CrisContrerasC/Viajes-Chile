$(function(){
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    //Configuración de tooltips

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    

    // Tooltip
    $('#enviar_formulario').attr('title', 'Presiona para enviar formulario');
    $('[data-bs-toggle="tooltip"]').tooltip();

})