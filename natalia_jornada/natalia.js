function escolha(decide, certo, caminho) {
  while (decide != 1 && decide != 2) {
    decide = prompt("Resposta incorreta, escolha entre 1 e 2");
  }
  if (decide == certo) {
    return (location = "./natalia_jornada_2.html");
  } else {
    return (location = "./natalia_jornada_1_laxcou.html");
  }
}

function escolha2(decide, certo, caminho) {
  while (decide != 1 && decide != 2) {
    decide = prompt("Resposta incorreta, escolha entre 1 e 2");
  }
  if (decide == certo) {
    return (location = "./natalia_jornada_3.html");
  } else {
    return (location = "./natalia_jornada_2_laxcou.html");
  }
}

function escolha3(decide, certo, caminho) {
  while (decide != 1 && decide != 2) {
    decide = prompt("Resposta incorreta, escolha entre 1 e 2");
  }
  if (decide == certo) {
    return (location = "./natalia_jornada_3_laxcou.html");
  } else {
    return (location = "./natalia_jornada_vitoria.html");
  }
}

function jogarNovamente(decide, sim, caminho) {
  while (decide != 1 && decide != 2) {
    decide = prompt("Resposta incorreta, escolha entre 1 e 2");
  }
  if (decide == sim) {
    return (location = "./natalia_jornada_1.html");
  } else {
    return (location = "./natalia_fim_de_jogo.html");
  }
}
