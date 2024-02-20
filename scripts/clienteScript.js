$(document).ready(function() {
    $('#filter').change(function() {
        var filtro = $(this).val();
        var clientes = $('#clientesTable tbody tr');

        if (filtro === 'aniversariantes') {
            var mesAtual = new Date().getMonth() + 1;
            clientes.each(function() {
                var dataNascimento = new Date($(this).find('td:eq(2)').text());
                if (dataNascimento.getMonth() + 1 !== mesAtual) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });
        } else {
            clientes.show();
        }
    });

    var diasFinaisDeSemana = [0, 6];
    $('.diaSemana').each(function() {
        var diaSemana = new Date($(this).text()).getDay();
        if (diasFinaisDeSemana.includes(diaSemana)) {
            $(this).addClass('highlight');
        }
    });
});
