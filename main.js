$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault()
        const nomeTarefa = $('#nome-da-tarefa').val()
        const novoItem = $('<li></li>')
        $(`<li>${nomeTarefa}</li>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $('#nome-da-tarefa').val('')
})
})
