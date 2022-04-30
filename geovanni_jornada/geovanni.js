function escolha(decide, certo, caminho) {
  while (decide != 1 && decide != 2) {
    decide = prompt("Resposta incorreta, escolha entre 1 e 2");
  }
  if (decide == certo) {
    return (location = "./geovanni_jornada_2_carro.html");
  } else {
    return (location = "./geovanni_jornada_1_vitoria.html");
  }
}

function escolha2(decide, certo, caminho) {
  while (decide != 1 && decide != 2) {
    decide = prompt("Resposta incorreta, escolha entre 1 e 2");
  }
  if (decide == certo) {
    return (location = "./geovanni_jornada_3_reboque.html");
  } else {
    return (location = "./geovanni_jornada_2_laxcou.html");
  }
}

function escolha3(decide, certo, caminho) {
  while (decide != 1 && decide != 2) {
    decide = prompt("Resposta incorreta, escolha entre 1 e 2");
  }
  if (decide == certo) {
    return (location = "./geovanni_jornada_3_vitoria.html");
  } else {
    return (location = "./geovanni_jornada_3_laxcou.html");
  }
}

function jogarNovamente(decide, sim, caminho) {
  while (decide != 1 && decide != 2) {
    decide = prompt("Resposta incorreta, escolha entre 1 e 2");
  }
  if (decide == sim) {
    return (location = "./geovanni_jornada_1.html");
  } else {
    return (location = "./geovanni_fim_de_jogo.html");
  }
}
