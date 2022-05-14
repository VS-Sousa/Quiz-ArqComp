function setUp() {        
    setTimeout(() => { 
        mudarAmbiente('cmd');
    }, 1000)
}

function mudarAmbiente(ambiente) {
    inputRow.style.display = 'none';

    if (ambiente == 'cmd') {
        path = window.location.pathname;
    } else {
        path = ambiente;
    }
    
    terminal.ambienteAtual = ambiente
    spanPath.innerHTML = path;

    setTimeout(() => {
        inputRow.style.display = 'flex';
        window.location.href = '#spanCommandLine'
    }, 100);
}

function mudarModo(modo) {
    terminal.modoAtual = modo;
}

function encerrarQuiz() {
    terminal.usuarioAtual = null;
    mudarModo('comando');
    terminal.comandos.arqcomp.executar();
}

function reiniciar(event) {
    var tecla = event.key;

    if (tecla == 'Escape' || tecla == 'Enter') {
        var resultado = window.confirm('Tem certeza que deseja reiniciar a página? TODOS os dados serão perdidos');
    
        if (resultado) {
            window.location.reload();
        }
    }

}