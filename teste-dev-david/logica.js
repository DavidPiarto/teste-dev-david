// Variaveis
var acao = 1;
var gerar01 = 1;
var gerar02 = 1;

// Função do Não Aplicavel
function naoAplicavel() {

    if (acao == 1) {

        // tirar todos os checks
        $("input[name='checkRazao']:not(.identNA").prop("checked", false);

        // desabilita todos os checks
        $("input[name='checkRazao']:not(.identNA").prop("disabled", true);

        acao = 2;
    } else {

        // ativa todos os checks
        $("input[name='checkRazao']:not(.identNA").prop("disabled", false);

        acao = 1;
    }

}

// Função para adicionar input
function gerarInput01() {

    if (gerar01 == 1) {

        // adiciona uma div com o input após a div ultimadiv01
        $(".ultimadiv01").after(
            '<div id="divGerada01" class="d-flex justify-content-center mt-2"><input style="width: 50%;" type="text" class="form-control" id="" placeholder="Relate..."></div>'
        );

        gerar01 = 2;
    } else {

        // remove a div gerada
        $("#divGerada01").remove();

        gerar01 = 1;

    }

}

// Função para adicionar input 2
function gerarInput02() {

    if (gerar02 == 1) {

        // adiciona uma div com o input após a div ultimadiv02
        $(".ultimadiv02").after(
            '<div id="divGerada02" class="d-flex justify-content-center mt-2"><input style="width: 50%;" type="text" class="form-control" id="" placeholder="Relate..."></div>'
        );

        gerar02 = 2;
    } else {

        // remove a div gerada
        $("#divGerada02").remove();

        gerar02 = 1;

    }

}

// Funções dos Botões

$("#botaoA").on("click", function () {

    // obtenho o id do radio checado, se for nenhum vem undefined
    idade = $("input[name='idade']:checked").attr("id");

    if (typeof idade != 'undefined') {

        if (idade == 'menos18') {
            alert("Menor de 18 anos - Redirecionar!");

            // redireciona
            window.location.href = "https://ibrc.com.br/";
        } else {

            // esconde e exibe div
            $("#perguntaA").hide();
            $("#pergunta01").show();

        }

    } else {
        alert("Selecione uma idade para seguir.")
    }


});

$("#botao01").on("click", function () {

    // obter o atributo value do selecionado, se n selecionar seta como 0 
    plano = $('#planos').find(":selected").attr("value");

    if (plano != "0") {

        $("#pergunta01").hide();
        $("#pergunta02").show();

        // adiciona o plano no texto da pergunta 9
        document.getElementById("planoEscolhido").innerHTML = plano;

    } else {
        alert("Selecione um plano para seguir.")
    }

});

$("#botao02").on("click", function () {

    // 1 - Resultado dos investimentos do plano
    // 2 - Atendimento da área de relacionamento institucional
    // 3 - Atendimento (e-mail, site, telefone )
    // 4 - Compromisso com a Integridade
    // 5 - Consultoria Previdenciária

    primeiraEscolha = $("#ordem").find(":selected").val();

    alert("Não obtive uma resolução para esta questão. Continuando...")

    $("#pergunta02").hide();
    $("#pergunta03").show();

});

$("#botao03").on("click", function () {

    informacoes = $("input[name='informacoes']:checked").attr("id");

    if (typeof informacoes != 'undefined') {

        $("#pergunta03").hide();
        $("#pergunta04").show();

    } else {
        alert("Selecione um para seguir.")
    }

});

$("#botao04").on("click", function () {

    checkbox = $("input[type='checkbox']:checked").length;

    if (checkbox > 3 || checkbox == 0) {
        alert("Escolha até 3 opções...")
    } else {

        $("#pergunta04").hide();
        $("#pergunta05").show();

    }

});

$("#botao05").on("click", function () {

    escolha = $("input[name='ehcorrentista']:checked").val();

    if (typeof escolha != 'undefined') {

        if (escolha == 'sim') {

            $("#pergunta05").hide();
            $("#pergunta06").show();

        } else {

            $("#pergunta05").hide();
            $("#pergunta07").show();

        }

    } else {
        alert("Escolha um para seguir.")
    }

});

$("#botao06").on("click", function () {

    quaisprods = $("input[name='quaisprods']:checked").attr("id");

    if (typeof quaisprods != 'undefined') {

        $("#pergunta06").hide();
        $("#pergunta09").show();

    } else {
        alert("Selecione ao menos um para seguir.")
    }

});

$("#botao07").on("click", function () {

    quaisprods2 = $("input[name='quaisprods02']:checked").attr("id");

    if (typeof quaisprods2 != 'undefined') {

        $("#pergunta07").hide();
        $("#pergunta08").show();

    } else {
        alert("Selecione ao menos um para seguir.")
    }

});

$("#botao08").on("click", function () {

    interesseibrc = $("input[name='interesseibrc']:checked").val();

    if (typeof interesseibrc != "undefined") {

        $("#pergunta08").hide();
        $("#pergunta09").show();

    } else {
        alert("Escolha para continuar.")
    }

});

$("#botao09").on("click", function () {

    avaliacao = $("input[name='avaliacao']:checked").attr("value");

    if (typeof avaliacao != 'undefined') {

        if (avaliacao <= 8) {

            $("#pergunta09").hide();
            $("#pergunta091").show();

        } else {
            $("#pergunta09").hide();
            $("#pergunta10").show();

        }

    } else {
        alert("Avalie para continuar.")
    }

});

$("#botao091").on("click", function () {

    omotivo = $("input[id='omotivo']").val();

    if (omotivo != "") {
        $("#pergunta091").hide();
        $("#pergunta10").show();

    } else {

        alert("Explique o motivo da sua avaliação <= 8.")

    }

});

$("#botao10").on("click", function () {

    qntsAnos = $("input[id='qntsAnos']").val();
    qntsMeses = $("input[id='qntsMeses']").val();

    if (qntsAnos != "" && qntsMeses != "") {

        $("#pergunta10").hide();
        $("#mensagemFinal").show();

    } else {
        alert("Preencha para finalizar.")
    }

});