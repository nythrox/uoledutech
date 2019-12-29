$(document).ready(function() {
  let alternativaEscolhida;
  let podeInteragir = true;

  $(".alternativa").click(function() {
    if (podeInteragir === true) {
      if ($(this).hasClass("selecionada")) {
        $(this).removeClass("selecionada");
        $(".bt-confirmar").hide();
        alternativaEscolhida = null;
      } else {
        $(".alternativa").removeClass("selecionada");
        $(this).addClass("selecionada");
        $(".bt-confirmar").show();

        const input = $(this).find("input");
        alternativaEscolhida = input.attr("id");
      }
    }
  });

  $(".bt-confirmar").click(() => {
    if (questao.gabarito[0].resposta == alternativaEscolhida)
      $("#feedbackPositivo").removeClass("feedbacksNone");
    else $("#feedbackNegativo").removeClass("feedbacksNone");
    podeInteragir = false;
    $(".bt-confirmar").hide();
  });
});
