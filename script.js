$(document).ready(function() {
    $('#registroForm').submit(function(event) {
        event.preventDefault();

        // se validan las entradas
        var nombre = $('#nombre').val().trim();
        var edad = $('#edad').val();
        var email = $('#email').val().trim();
        var genero = $('#genero').val();
        var intereses = $('#intereses').val();
        var comentarios = $('#comentarios').val().trim();

        if (nombre === '' || edad === '' || email === '') {
            alert('Complete el formulario.');
            return;
        }

        if (edad < 18 || edad > 99) {
            alert('La edad debe estar entre 18 y 99 años.');
            return;
        }

        // agrega el registro a la tabla
        var newRow = $('<tr>');
        newRow.append('<td>' + nombre + '</td>');
        newRow.append('<td>' + edad + '</td>');
        newRow.append('<td>' + email + '</td>');
        newRow.append('<td>' + genero + '</td>');
        newRow.append('<td>' + intereses.join(', ') + '</td>');
        newRow.append('<td>' + comentarios + '</td>');

        $('#tablaRespuestas tbody').append(newRow);

        
        $('#registroForm')[0].reset();
    });
});
