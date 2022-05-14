var arqcomp = {
    users: [
        {
            name: 'admin',
            pass: '110101',
            lifes: 4,
            quiz: 15
        },
        {
            name: 'Vini',
            pass: null,
            lifes: 4,
            quiz: 15
        }
    ],
    quiz: [
        {
            q: 'Qual é a sigla para Central Process Unit?',
            a: ['CPU'],
        },
        {
            q: 'Um circuto digital que realiza operações lógicas e aritméticas. Qual é o nome deste componente?',
            a: ['ULA', 'Unidade Lógica e Aritmética']
        },
        {
            q: 'Tipo de memória que se encontra no topo da hierarquia de memória.',
            a: ['Registradores', 'Registrador']
        },
        {
            q: 'Tipo de memória volátil que tem como nome Random Acess Memory. Qual é a sigla deste componente?',
            a: ['RAM']
        },
        {
            q: 'Tipo de memória não volátil que oferece dados apenas para leitura.',
            a: ['ROM', 'Read Only Memory', 'Read-Only Memory']
        },
        {
            q: 'Tipo de memória não volátil que precisa ter seu chip exposto a luz ultravioleta para apagar seu conteúdo',
            a: ['EPROM', 'Erasable Programmable Read Only Memory', 'Erasable Programmable Read-Only Memory']
        },
        {
            q: 'Tipo particular de EEPROM que mantém as informações armazenadas sem a necessidade de uma fonte de energia elétrica',
            a: ['FLASH']
        },
        {
            q: 'Tipo de memória que precisa ter seu conteúdo copiado na RAM para poder ser executado pela CPU',
            a: ['Memória de Massa']
        },
        {
            q: 'Permite que periféricos acessem diretamente a RAM sem ocupar processamento',
            a: ['DMA', 'DMAC', 'Direct Memory Access', 'Data Memory Access Controller']
        },
        {
            q: 'Também conhecido como Slave Select (SS). Usado para selecionar um ou um conjunto de circuitos que estão conectados no computador',
            a: ['CS', 'Chip Select']
        },
        {
            q: 'Grupo de linhas ou trilhas usadas para se referir a um endereço físico na memória. O número de trilhas determina a quantidade de endereços na memória física',
            a: ['Adress Bus', 'Barramento de Endereço']
        },
        {
            q: 'Também chamado de Memory Bus. É responsável para carregar os dados.',
            a: ['Data Bus', 'Barramento de Dados']
        },
        {
            q: 'Modelo de processador desenvolvido pela Intel qu teve sua primeira versão lançada em setembro de 2009',
            a: ['I5']
        },
        {
            q: 'Modelo de processador desenvolvido pela Intel qu teve sua primeira versão lançada em novembro de 2008',
            a: ['I7']
        },
        {
            q: 'Tipo de processador que possui dois processadores ou melhor dizendo "dois centros, núcleos ou cores de execução" no mesmo circuito integrado. <br>Cada core tem sua própria memória cache e controlador o que permite que funcione mais efetivamente do que um processador single',
            a: ['Dual Core']
        },
        {
            q: 'Segue o mesmo princípio de um dual-core, mas agora em teoria tem o dobro da capacidade de processamento',
            a: ['Quad Core']
        },
    ]
}

function atualizarUsuario(user) {
    var indexOfUser = arqcomp.users.findIndex(u => u.name == user.name);

    arqcomp.users[indexOfUser] = user;
}

function removerUsuario(user) {
    var users = arqcomp.users.filter(u => {
        if (u.name != user.name) {
            return u;
        }
    });

    arqcomp.users = users;
}