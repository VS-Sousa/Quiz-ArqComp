var allowed = true;

var terminal = {
    temaAtual: 'matrix',
    ambienteAtual: 'cmd',
    modoAtual: 'comando',
    usuarioAtual: null,
    comandos: {
        "clear": {
            executar: (_) => {
                divConsoleLog.innerHTML = '';

                setTimeout(() => {
                    inputRow.style.display = 'flex';
                    window.location.href = '#spanCommandLine'
                }, 100);
            }
        },
        "help": {
            executar: (_) => {
                divConsoleLog.innerHTML += `
                    <p>Lista de Comandos Disponíveis:</p>
                    <br>
                    <p>help      Utilize para obter ajuda</p>
                    <p>clear     Utilize para limpar o terminal</p>
                    <p>theme     Utilize para trocar a cor da fonte atual</p>
                    <p>arqcomp   Utilize para acessar o programa de Arquitetura Computacional</p>
                    <br>
                `; 

                setTimeout(() => {
                    inputRow.style.display = 'flex';
                    window.location.href = '#spanCommandLine'
                }, 100);
            }
        },
        "theme": {
            executar: (_) => {
                if (terminal.temaAtual == 'matrix') {
                    document.body.style.color = '#fff';
                    terminal.temaAtual = 'walter'
                } else {
                    document.body.style.color = '#00ff00'
                    terminal.temaAtual = 'matrix'
                }

                setTimeout(() => {
                    inputRow.style.display = 'flex';
                    window.location.href = '#spanCommandLine'
                }, 100);
            }
        },
        "arqcomp": {
            definicoes: arqcomp,
            ambiente: {
                logado: null,
            },
            executar: (_) => {
                mudarAmbiente('arqcomp');

                divConsoleLog.innerHTML += `
                    <br>
                    <p>Bem vindo ao programa de ArqComp</p>
                    <p>Desenvolvido por:</p>
                    <p>Vinícius da Silva Sousa - 1CCO</p>
                    <p>RA 02221039</p>
                    <br>
                    <p>Utilize o comando "start" para iniciar o quiz</p>
                    <p>Em caso de dúvidas, utilize o comando "help"</p>
                    <br>
                `;
            },
            comandos: {
                "help": {
                    executar: (_) => {                        
                        divConsoleLog.innerHTML += `
                            <p>Lista de Comandos Disponíveis:</p>
                            <br>
                            <p>help                   Utilize para obter ajuda</p>
                            <p>clear                  Utilize para limpar o terminal</p>
                            <p>start -uNOME           Utilize para iniciar o quiz e se cadastrar</p>
                            <p>login -uNOME -pSENHA   Utilize para acessar a recompensa por ter terminado o quiz</p>
                            <br>
                        `;

                        setTimeout(() => {
                            inputRow.style.display = 'flex';
                            window.location.href = '#spanCommandLine'
                        }, 100);
                    }
                },
                "clear": {
                    executar: (_) => {
                        divConsoleLog.innerHTML = '';

                        setTimeout(() => {
                            inputRow.style.display = 'flex';
                            window.location.href = '#spanCommandLine'
                        }, 100);
                    }
                },
                "login": {
                    executar: (params) => {
                        if (params.length <= 1) {
                            divConsoleLog.innerHTML += `
                                <p>"login" precisa de pelo menos dois argumentos</p>
                                <br>
                                <p>"login -uNOME -pSENHA" fornece ao jogador que já terminou o quiz o seu prêmio</p>
                                <p>Insira um comando válido</p>
                            `;                     
                        } else {
                            var args = params.split(' ');
                            
                            if (args.length != 2) {
                                divConsoleLog.innerHTML += `
                                    <p>"login ${params}" está em formato errado</p>
                                    <br>
                                    <p>"login -uNOME -pSENHA" fornece ao jogador que já terminou o quiz o seu prêmio</p>
                                    <p>Insira um comando válido</p>
                                `;
                                setTimeout(() => {
                                    inputRow.style.display = 'flex';
                                    window.location.href = '#spanCommandLine'
                                }, 100);
                                return;
                            }

                            var validarArgUsuario = args[0].startsWith('-u');
                            var validarArgSenha = args[1].startsWith('-p');

                            if (!validarArgSenha || !validarArgUsuario) {
                                divConsoleLog.innerHTML += `
                                    <p>"login ${params}" está em formato errado</p>
                                    <br>
                                    <p>"login -uNOME -pSENHA" fornece ao jogador que já terminou o quiz o seu prêmio</p>
                                    <p>Insira um comando válido</p>
                                `;
                                setTimeout(() => {
                                    inputRow.style.display = 'flex';
                                    window.location.href = '#spanCommandLine'
                                }, 100);
                                return;
                            }

                            var username = args[0].slice(2, args[0].length);
                            var password = args[1].slice(2, args[1].length);

                            var user = arqcomp.users.find(u => {
                                if (u.name == username && u.pass == password) {
                                    return u;
                                }
                            });

                            if (!user) {
                                divConsoleLog.innerHTML += `
                                    <p>Nome de usuário e/ou senha errado!</p>
                                `;
                                setTimeout(() => {
                                    inputRow.style.display = 'flex';
                                    window.location.href = '#spanCommandLine'
                                }, 100);
                                return;
                            }

                            divConsoleLog.innerHTML += `
                                <p>Carregando seu prêmio...</p>
                            `;

                            document.body.setAttribute('onkeydown', 'reiniciar(event)');

                            if (allowed) {
                                setTimeout(() => {
                                    document.body.style.padding = 0;
                                    document.body.innerHTML = `
                                        <video id="prize" autoplay controls>
                                            <source src="./assets/media/prize.mp4" type="video/mp4">
                                        </video>
                                    `;
                                }, 3000);
                            } else {
                                setTimeout(() => {
                                    document.body.style.backgroundImage = "url('./assets/img/matrix.gif')";
                                    document.body.style.backgroundSize = 'cover';
                                    document.body.style.height = 'calc(100vh - 70px)';
                                    document.body.style.alignItems = 'center';

                                    document.getElementsByClassName('window').item(0).style.display = 'none';
                                    document.getElementsByTagName('h1').item(0).style.display = 'block';
                                }, 1000);
                            }
                            return;
                        }

                        setTimeout(() => {
                            inputRow.style.display = 'flex';
                            window.location.href = '#spanCommandLine'
                        }, 100);
                    }
                },
                "start": {
                    executar: (params) => {
                        if (params.length <= 1) {
                            divConsoleLog.innerHTML += `
                                <p>"start" precisa de pelo menos um argumento</p>
                                <br>
                                <p>"start -uNOME" começa o quiz e fornece o nome do jogador</p>
                                <p>Insira um comando válido</p>
                            `;                     
                        } else {
                            var args = params.split(' ');
                            
                            if (args.length > 1) {
                                divConsoleLog.innerHTML += `
                                    <p>"start ${params}" está em formato errado</p>
                                    <br>
                                    <p>"start -uNOME" começa o quiz e fornece o nome do jogador</p>
                                    <p>Insira um comando válido</p>
                                `;
                                setTimeout(() => {
                                    inputRow.style.display = 'flex';
                                    window.location.href = '#spanCommandLine'
                                }, 100);
                                return;
                            } 

                            var validarParametro = args[0].startsWith('-u');

                            if (!validarParametro) {
                                divConsoleLog.innerHTML += `
                                    <p>"start ${params}" está em formato errado</p>
                                    <br>
                                    <p>"start -uNOME" começa o quiz e fornece o nome do jogador</p>
                                    <p>Insira um comando válido</p>
                                `;
                                setTimeout(() => {
                                    inputRow.style.display = 'flex';
                                    window.location.href = '#spanCommandLine'
                                }, 100);
                                return;
                            }

                            var userName = args[0].slice(2, args[0].length);

                            var user = arqcomp.users.find(user => {
                                if (user.name == userName) {
                                    return user;
                                }
                            });

                            if (!user) {
                                var novoUser = {
                                    name: userName,
                                    pass: null,
                                    lifes: 4,
                                    quiz: 0
                                }

                                arqcomp.users.push(novoUser);
                                user = novoUser;

                            } else {
                                if (user.quiz == 16) {
                                    divConsoleLog.innerHTML += `
                                        <p>Usuário já completou o quiz</p>
                                    `;
                                    setTimeout(() => {
                                        inputRow.style.display = 'flex';
                                        window.location.href = '#spanCommandLine'
                                    }, 100);
                                    return;
                                }
                            }

                            terminal.usuarioAtual = user;

                            divConsoleLog.innerHTML += `
                                <p>QUIZ SOBRE TÓPICOS DE ARQUITETURA COMPUTACIONAL</p>
                                <p>Vidas restantes: ${terminal.usuarioAtual.lifes}</p>
                                <br>
                                <p>Pergunta ${terminal.usuarioAtual.quiz+1}</p>
                                <p>${arqcomp.quiz[terminal.usuarioAtual.quiz].q}</p>
                                <br>
                                <p>Sua resposta:</p>
                            `;
                            
                            path = `${userName}@arqcomp`;
                            spanPath.innerHTML = path
                            mudarModo('quiz');                            
                        }

                        setTimeout(() => {
                            inputRow.style.display = 'flex';
                            window.location.href = '#spanCommandLine'
                        }, 100);
                    }
                }
            }
        }
    }
}