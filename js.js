  // Adaptações para usar funções do framework jMaskWiFi

        // Função para validar Data de Nascimento
        function validarDataNascimento() {
            const dataNascimentoInput = document.getElementById("dataNascimento");
            const regexDataNascimento = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
            validarInformacao('dataNascimento', regexDataNascimento, 'classeGenericaSucesso', 'classeGenericaErro');
        }

        // Função para validar Cronômetro
        function validarCronometro() {
            const cronometroInput = document.getElementById("cronometro");
            const regexCronometro = /^(2[0-3]|[0-1]?[0-9]):[0-5]?[0-9]:[0-5]?[0-9]:[0-9]{2}$/;
            validarInformacao('cronometro', regexCronometro, 'classeGenericaSucesso', 'classeGenericaErro');
        }

        // Função para validar CPF
        function validarCPF() {
            const cpfInput = document.getElementById("cpf");
            const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
            validarInformacao('cpf', regexCPF, 'classeGenericaSucesso', 'classeGenericaErro');
        }

        // Função para validar Número de matrícula de um aluno
        function validarMatricula() {
            const matriculaInput = document.getElementById("matricula");
            const regexMatricula = /^(IFTM|iftm)-\d{3}\/\d{3}-[A-Za-z0-9]$/;
            validarInformacao('matricula', regexMatricula, 'classeGenericaSucesso', 'classeGenericaErro');
        }

        // Função para validar Código de uma disciplina do IFTM (jMakWiFi)
        function validarCodigoDisciplina() {
            const codigoDisciplinaInput = document.getElementById("codigoDisciplina");
            const regexCodigoDisciplina = /^MT-\d{2}\.\d{3}-IFTM$/i;
            validarInformacao('codigoDisciplina', regexCodigoDisciplina, 'classeGenericaSucesso', 'classeGenericaErro');
        }

        // Função para validar Código de uma disciplina do IFTM (versão 2) (jMakWiFi)
        function validarCodigoDisciplinaV2() {
            const codigoDisciplinaV2Input = document.getElementById("codigoDisciplinaV2");
            const regexCodigoDisciplinaV2 = /^MT-\d{2}\.\d{3}-IFTM$/i;
            validarInformacao('codigoDisciplinaV2', regexCodigoDisciplinaV2, 'classeGenericaSucesso', 'classeGenericaErro');
        }

        // Função para validar Código de uma disciplina do IFTM (versão 3)
        function validarCodigoDisciplinaV3() {
            const codigoDisciplinaV3Input = document.getElementById("codigoDisciplinaV3");
            const regexCodigoDisciplinaV3 = /^MT-\d{2}\.\d{3}-IFTM$/i;
            validarInformacao('codigoDisciplinaV3', regexCodigoDisciplinaV3, 'classeGenericaSucesso', 'classeGenericaErro');
        }

        // Função para validar Nome de campus do IFTM
        function validarNomeCampus() {
            const nomeCampusInput = document.getElementById("nomeCampus");
            // Adicione sua expressão regular para validar o nome do campus
            // Exemplo: /^[A-Za-z ]+$/;
            validarInformacao('nomeCampus', regexNomeCampus, 'classeGenericaSucesso', 'classeGenericaErro');
        }

        // Função para validar Telefone (jMakWiFi)
        function validarTelefone() {
            const telefoneInput = document.getElementById("telefone");
            const regexTelefone = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;
            validarInformacao('telefone', regexTelefone, 'classeGenericaSucesso', 'classeGenericaErro');
        }

        // Função para validar Telefone (versão 2)
        function validarTelefoneV2() {
            const telefoneV2Input = document.getElementById("telefoneV2");
            const regexTelefoneV2 = /^\(\d{2}\)[\s]?\d{4,5}-\d{4}$/;
            validarInformacao('telefoneV2', regexTelefoneV2, 'classeGenericaSucesso', 'classeGenericaErro');
        }

        // Função para validar Altura de uma pessoa
        function validarAltura() {
            const alturaInput = document.getElementById("altura");
            const regexAltura = /^(\d+(\.\d{1,2})?|\.\d{1,2})$/;
            validarInformacao('altura', regexAltura, 'classeGenericaSucesso', 'classeGenericaErro');
        }

        // Função para validar Faturamento anual de uma empresa
        function validarFaturamento() {
            const faturamentoInput = document.getElementById("faturamento");
            // Adicione sua expressão regular para validar o faturamento
            // Exemplo: /^\d{1,3}(.\d{3})*(,\d{1,2})?$/;
            validarInformacao('faturamento', regexFaturamento, 'classeGenericaSucesso', 'classeGenericaErro');
        }

        // Função para validar Cronômetro (jMakWiFi)
        function validarCronometroV2() {
            const cronometroV2Input = document.getElementById("cronometroV2");
            const regexCronometroV2 = /^(2[0-3]|[0-1]?[0-9]):[0-5]?[0-9]:[0-5]?[0-9]:[0-9]{2}$/;
            validarInformacao('cronometroV2', regexCronometroV2, 'classeGenericaSucesso', 'classeGenericaErro');
        }