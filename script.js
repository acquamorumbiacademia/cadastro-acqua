const inputFields = document.querySelectorAll("#nome, #sobrenome ,#birthday, #cpf, #cep, #email, #residencial, #celular, #rg, #cep, #endereco, #numero, #complemento, #comoconheceu, #responsavel, #consultoresacqua");
const cepInput = document.getElementById("cep");
const enderecoInput = document.getElementById("endereco");
const buttonLupa = document.getElementById("buttoncep")
const cpfInput = document.getElementById("cpf")
const rgInput = document.getElementById('rg');
const nascimentoInput = document.getElementById('birthday');
const residencialInput = document.getElementById('residencial');
const celularInput = document.getElementById('celular');
const closeBtn = document.getElementById("close");
const bordaStyle = document.querySelectorAll('.inputstyle, .inputendereco')
const modal = document.getElementById("modal");
const hidden = document.getElementById("hidden")
const elementsToDisable = document.querySelectorAll('input, select, textarea');
const buttonFull = document.getElementById('full')
const responsaveis = document.querySelectorAll('.responsavel');
const botaoConsultores = document.getElementById('consultoresacqua');
const containerConsultores = document.getElementById('corpoconsultor');
const imgConsultores = document.querySelectorAll('.imgconsultor');
const btnFecharConsultor = document.getElementById('fecharconsultor');
const title1foto = document.getElementById('title1foto');
const showfotoList = document.querySelectorAll('.showfoto');
const video = document.getElementById('video');
const msgsCamera = document.querySelectorAll('.msgcamera');
const fecharFotoBtn = document.getElementById('fecharfoto');
const fotoContainer = document.getElementById('foto-container');
const abrirFoto = document.getElementById('buttonfoto')
const snap = document.getElementById('fotografar');
const canvas = document.createElement('canvas');
const confirmarFotoBtn = document.getElementById('confirmarfoto');
const enviarBotao = document.querySelector('#enviar');
const camposObri = document.querySelectorAll("#nome, #sobrenome ,#birthday, #cpf, #email, #residencial, #celular, #endereco, #numero");
const imgReload = document.getElementById('imgreload');
const modalConcluido = document.getElementById('modalconfirmacao');
const reloadBtn = document.getElementById('imgreload')
const mensagensErro = {
  nome: "Por favor, insira um nome válido, contendo sempre o primeiro caracterer maiúsculo.",
  sobrenome: "Por favor, insira um sobrenome válido, contendo sempre o primeiro caracterer maiúsculo.",
  birthday: "Por favor, insira uma data de nascimento válida no formato dd/mm/aaaa.<br><br>Ex: 20/08/2018.",
  cpf: "Por favor, insira seu CPF com a pontuação padrão.<br><br>Ex: 123.456.789-10",
  cep: "Por favor, insira um CEP válido e com a pontuação padrão.<br><br>Ex: 05710-030.",
  numero: "Por favor, insira um número válido.",
  email: "Por favor, insira um e-mail válido.",
  residencial: "Por favor, insira um número de telefone residencial válido e com DDD.<br><br>Ex: 1135897177.",
  celular: "Por favor, insira um número de celular válido e com DDD.<br><br>Ex: 11935897177.",
  responsavel: "Por favor, insira um nome completo de responsável válido, contendo sempre o primeiro caracterer maiúsculo."
};

// function exibirLarguraTela() {
//   let largura = window.innerWidth;
//   document.getElementById("resolucao").textContent = `Largura: ${largura}px`;
// }

// // Executar a função no carregamento da página
// exibirLarguraTela();

// // Executar a função quando a janela for redimensionada
// window.addEventListener("resize", exibirLarguraTela);

// function scrollToModal() {
//   // Define o valor de deslocamento para o topo do modal
//   const topOffset = modal.getBoundingClientRect().top + window.scrollY;

//   // Rola a página suavemente até o início do modal
//   modal.scrollIntoView({ behavior: 'smooth' });

//   // Subtrai a altura do cabeçalho do navegador
//   window.scrollTo(0, topOffset - 100);
// }

botaoConsultores.addEventListener('click', () => {
  containerConsultores.style.display = window.innerWidth < 480 ? 'block' : 'flex';
  setTimeout(() => {
    document.body.style.overflow = 'hidden';
  }, 500);
});

  btnFecharConsultor.addEventListener('click', () => {
    containerConsultores.style.display = 'none'
    document.body.style.overflow = 'auto'
    botaoConsultores.innerText = consultorRespo
    imgConsultores.forEach(imgConsultor => {
      imgConsultor.classList.remove('consultorselect')
    })

  })

  imgConsultores.forEach(imgConsultor => {
    imgConsultor.addEventListener('click', event => {
      const clicado = event.target;
      imgConsultores.forEach(img => {
        if (img !== clicado) {
          img.classList.remove('consultorselect');
        }
      });
      clicado.classList.add('consultorselect');
    });
  });

  let consultorRespo;

  imgConsultores.forEach(img => {
    img.addEventListener('click', event => {
      const nome = event.currentTarget.parentNode.id;
      consultorRespo = nome;
      // console.log(consultorRespo)
    });
  });

  let borda;

  if (window.matchMedia("(min-width: 1200px)").matches) {
    borda = 0.18;
  // } else if (window.matchMedia("(min-width: 992px)").matches) {
  //   borda = 0.32;
  // } else if (window.matchMedia("(min-width: 768px)").matches) {
  //   borda = 0.25;
  } else {
    borda = 0.13; // valor padrão caso a tela seja menor que 768px
  }

inputFields.forEach((inputField) => {
  inputField.addEventListener("blur", () => {
    validarCampo(inputField);
  });

bordaStyle.forEach((element) => {
    element.addEventListener("focus", () => {
      element.style.border = `${borda}rem solid #004aad`;
    });
  });
});

full.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    buttonFull.src = "./imagens/minimize.png";

  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      buttonFull.src = "./imagens/full-azul.png";
    }
  }
});

function trocarFull(buttonFull) {
  if (document.fullscreenElement) {
    buttonFull.src = "./imagens/minimize.png";
  } else {
    buttonFull.src = "./imagens/full.png";
  }
}

function voltarFull(buttonFull) {
  if (document.fullscreenElement) {
    buttonFull.src = "./imagens/minimize-azul.png";
  } else {
    buttonFull.src = "./imagens/full-azul.png";
  }
}

function trocarLupa(buttonLupa) {
  buttonLupa.src = "./imagens/lupa.png";
}

function voltarLupa(buttonLupa) {
  buttonLupa.src = "./imagens/lupa-azul.png";
}

function trocarReload(imgReload) {
  imgReload.src = "./imagens/refazer-azul.png"
}

function voltarReload(imgReload) {
  imgReload.src = "./imagens/refazer-claro.png"

}
nascimentoInput.addEventListener('input', function() {
  let nascimento = this.value.replace(/\D/g, '');
  if (nascimento.length > 2) {
    nascimento = nascimento.substring(0, 2) + '/' + nascimento.substring(2);
  }
  if (nascimento.length > 5) {
    nascimento = nascimento.substring(0, 5) + '/' + nascimento.substring(5);
  }
  this.value = nascimento;
});

cpfInput.addEventListener('keydown', function(event) {
  // Verifica se a tecla pressionada é o "Backspace" ou "Delete"
  if (event.key === "Backspace" || event.key === "Delete") {
    return; // Não aplica a máscara
  }

  let cpf = event.target.value;
  
  // Remove tudo que não for número
  cpf = cpf.replace(/\D/g, "");
  
  // Insere os pontos e o traço
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  
  // Atualiza o valor do input
  event.target.value = cpf;
});

rgInput.addEventListener('keydown', function(event) {
  // Verifica se a tecla pressionada é o "Backspace" ou "Delete"
  if (event.key === "Backspace" || event.key === "Delete") {
    return; // Não aplica a máscara
  }
  
  let rg = this.value.replace(/[^\w]/g, '');
  if (rg.length > 1) {
    rg = rg.substring(0, 2) + '.' + rg.substring(2);
  }
  if (rg.length > 6) {
    rg = rg.substring(0, 6) + '.' + rg.substring(6);
  }
  if (rg.length > 9) {
    rg = rg.substring(0, 10) + '-' + rg.substring(10);
  }
  this.value = rg;
});

cepInput.addEventListener('keydown', function(event) {
  // Verifica se a tecla pressionada é o "Backspace" ou "Delete"
  if (event.key === "Backspace" || event.key === "Delete") {
    return; // Não aplica a máscara
  }

  let cep = this.value.replace(/\D/g, '');
  if (cep.length > 5) {
    cep = cep.substring(0, 5) + '-' + cep.substring(5);
  }
  this.value = cep;
});

residencialInput.addEventListener('keydown', function(event) {
  // Verifica se a tecla pressionada é o "Backspace" ou "Delete"
  if (event.key === "Backspace" || event.key === "Delete") {
    return; // Não aplica a máscara
  }

  let residencial = this.value.replace(/\D/g, '');
  if (residencial.length > 2) {
    residencial = residencial.substring(0, 2) + " " + residencial.substring(2);
  }
  this.value = residencial;
});

celularInput.addEventListener('keydown', function(event) {
  // Verifica se a tecla pressionada é o "Backspace" ou "Delete"
  if (event.key === "Backspace" || event.key === "Delete") {
    return; // Não aplica a máscara
  }

  let celular = this.value.replace(/\D/g, '');
  if (celular.length > 2) {
    celular = celular.substring(0, 2) + " " + celular.substring(2);
  }
  this.value = celular;
});


let intervalId;
let timeoutId;
let currentProgressId; // Variável para armazenar o ID do intervalo de atualização atual


function validarCampo(campo) {
  const valorCampo = campo.value;
  let regex;
  let border;

  if (window.matchMedia("(min-width: 1200px)").matches) {
    border = 0.18;
  // } else if (window.matchMedia("(min-width: 992px)").matches) {
  //   border = 0.32;
  // } else if (window.matchMedia("(min-width: 768px)").matches) {
  //   border = 0.25;
  } else {
    border = 0.15; // valor padrão caso a tela seja menor que 768px
  }

  // Limpa o timeout anterior, se existir
  resetProgress();
  clearTimeout(timeoutId);

  switch (campo.id) {
    case "nome":
      regex = /[A-ZÀ-Ú][a-zà-ú].+[a-z]{0}/;
      break;
    case "sobrenome":
      regex = /[A-ZÀ-Ú][a-zà-ú]+.[a-z].*[A-ZÀ-Ú][a-zà-ú]+/ ;
      break;
    case "birthday":
      regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
      break;
    case "cpf":
      regex = /[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/;
      break;
    case "cep":
      regex = /[0-9]{5}-[0-9]{3}/;
      break;
    case "numero":
      regex = /[0-9]/;
      break;
    case "email":
      regex = /[a-z0-9!#$%&’*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&’*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])/;
      break;
    case "residencial":
      regex = /^\d.{10,11}$/;
      break;
    case "celular":
      regex = /^\d.{11}$/;
      break;
    case "responsavel":
      regex = /[A-ZÀ-Ú][a-zà-ú]+.[a-z].*[A-ZÀ-Ú][a-zà-ú]+/;
      break;
    default:
      regex = /.*/;
      break;
  }
  
  if (valorCampo === "") {
    campo.style.border = `${border}rem solid #00b3f6`;
  } else if (regex.test(valorCampo)) {
    campo.style.border = `${border}rem solid #00b3f6`;
    document.getElementById("modal").classList.remove('show');
  } else {
    campo.style.border = `${border}rem solid red`;
    campo.disabled = true;

    elementsToDisable.forEach(element => {
    element.disabled = true;
    });
    inputFields.disabled = true; 
    document.getElementById("msgerror").innerHTML = mensagensErro[campo.id];
    // Exibe o modal
    setTimeout(() => {
      // Exibe o modal
      document.getElementById("modal").classList.add('show');
    }, 100);
    
    // scrollToModal()
    hidden.click()

    // Define o tempo de espera antes de começar a carregar a barra de progresso
  // Define o tempo de espera antes de começar a carregar a barra de progresso
  timeoutId = setTimeout(() => {
  // Seleciona a barra de progresso
  const progressBar = document.getElementById("progress-bar");
  // Define o valor inicial da barra de progresso como 0
  let progressValue = 0;
  // Define o tempo total de duração da barra em segundos
  const totalTime = 5;
  // Calcula o intervalo de atualização da barra em milissegundos
  const intervalTime = totalTime * 1000 / 100;
  
  // Cancela o intervalo de atualização atual, se existir
  if (currentProgressId) {
    clearInterval(currentProgressId);
    currentProgressId = null;
  }

  // Define o intervalo de atualização da barra de progresso
  currentProgressId = setInterval(() => {
    progressValue += 1;
    progressBar.value = progressValue;
    if (progressValue >= 100) {
      clearInterval(currentProgressId);
      currentProgressId = null;
      // Remove a classe 'show' do modal e da barra de progresso após a conclusão da animação
      document.getElementById("modal").classList.remove('show');
      progressBar.classList.remove('show');
      resetProgress();
    }
  }, intervalTime);
  // Adiciona a classe 'show' à barra de progresso para exibi-la
  progressBar.classList.add('show');
}, 0); 
  }

}

nascimentoInput.addEventListener('input', () => {
  const data = nascimentoInput.value.split('/');
  const dia = parseInt(data[0]);
  const mes = parseInt(data[1]) - 1;
  const ano = parseInt(data[2]);

  const hoje = new Date();
  const nascimento = new Date(ano, mes, dia);
  const idade = hoje.getFullYear() - nascimento.getFullYear();

  if (idade < 18) {
    responsaveis.forEach((responsavel) => {
      responsavel.classList.add('show');
    });
  } else {
    responsaveis.forEach((responsavel) => {
      responsavel.classList.remove('show');
    });
  }
});

buttonLupa.addEventListener("click", () => {
  const cep = cepInput.value.replace(/\D/g, "");
  if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.erro) {
          enderecoInput.value = `${data.logradouro}, ${data.bairro} - ${data.uf}`;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

cepInput.addEventListener("blur", () => {
  const cep = cepInput.value.replace(/\D/g, "");
  if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.erro) {
          enderecoInput.value = `${data.logradouro}, ${data.bairro} - ${data.uf}`;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
});


function resetProgress() {
  // Limpa o intervalo anterior, se existir
  clearInterval(intervalId);
  const progressBar = document.getElementById("progress-bar");
  progressBar.value = 0;
  progressBar.classList.remove('show');
 
  inputFields.forEach(inputField => {
    if (inputField && inputField.disabled) {
      inputField.style.border = `{borda}rem solid red`
      inputField.value = ""
    }
  });

  elementsToDisable.forEach(element => {
    element.disabled = false;
  });
  
}

closeBtn.addEventListener("click", () => {
  document.getElementById("modal").classList.remove('show');
  resetProgress();
  // Limpa o timeout anterior, se existir
  clearTimeout(timeoutId);
});

let fotoCadastro = null;

title1foto.addEventListener('animationend', () => {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
      showfotoList.forEach(showfoto => {
        showfoto.style.display = 'block';
      });
      // Esconde a mensagem de erro em caso de sucesso
      msgsCamera.forEach(msgCamera => { 
        msgCamera.style.display = 'none';
      });
    })
    .catch(() => {
        msgsCamera.forEach(msgCamera => { 
        msgCamera.classList.add('show');
      })
    });
});


fecharFotoBtn.addEventListener('click', () => {
  showfotoList.forEach(showfoto => {
    showfoto.style.display = 'none';
  });
  msgsCamera.forEach(msgCamera => { 
    msgCamera.classList.remove('show');
  })
  snap.classList.remove('novafoto');
  fotoContainer.style.display = 'none';
  confirmarFotoBtn.classList.remove('naoconfirmada');
  document.body.style.overflow = 'auto'
  const stream = video.srcObject;
  stream.getTracks()[0].stop(); // fecha a camera
  video.pause();
 });

abrirFoto.addEventListener('click', () =>{
fotoContainer.style.display = 'flex';
setTimeout(() => {
  document.body.style.overflow = 'hidden';
}, 500);

})


snap.addEventListener('click', () => {
  // Se o botão já possui a classe 'novafoto', remove a foto e a classe
  if (snap.classList.contains('novafoto')) {
    snap.classList.remove('novafoto');
    confirmarFotoBtn.classList.add('naoconfirmada');
    abrirFoto.classList.remove('confirme');
    abrirFoto.innerText = 'Tire sua foto';
    video.play()
  } else {
    // Se o botão não possui a classe, tira a foto normalmente
    video.pause()
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    fotoCadastro = canvas.toDataURL('image/png');
    snap.classList.add('novafoto');
    confirmarFotoBtn.classList.remove('naoconfirmada');
    abrirFoto.classList.add('confirme');
    abrirFoto.innerText = 'Foto salva!';
    
  }
});

confirmarFotoBtn.addEventListener('click', () => {
  if (fotoCadastro) {
    snap.classList.remove('novafoto');
    video.pause();
    const stream = video.srcObject;
    stream.getTracks()[0].stop(); // fecha a camera
    video.srcObject = null;
    showfotoList.forEach(showfoto => {
      showfoto.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
    // fecha o modal
    fotoContainer.style.display = 'none';
  } else {
    confirmarFotoBtn.classList.add('naoconfirmada');
  }
});

enviarBotao.addEventListener('click', () => {
  let todosPreenchidos = true;
  let border;
  const respostaForms = {}; // cria um objeto vazio

  if (window.matchMedia("(min-width: 1200px)").matches) {
    border = 0.18;
  // } else if (window.matchMedia("(min-width: 992px)").matches) {
  //   border = 0.32;
  // } else if (window.matchMedia("(min-width: 768px)").matches) {
  //   border = 0.25;
  } else {
    border = 0.15; // valor padrão caso a tela seja menor que 768px
  }

  // Limpa o timeout anterior, se existir
  resetProgress();
  clearTimeout(timeoutId);

  camposObri.forEach((campo) => {
    if (!campo.value) {
      todosPreenchidos = false;
      document.getElementById("msgerror").innerHTML = "Por favor, preencha os campos obrigatórios.";
      campo.style.border = `${border}rem solid red`;
      setTimeout(() => {
        // Exibe o modal
        document.getElementById("modal").classList.add('show');
      }, 100);
      
      // scrollToModal()
      hidden.click()
  
      // Define o tempo de espera antes de começar a carregar a barra de progresso
    // Define o tempo de espera antes de começar a carregar a barra de progresso
    timeoutId = setTimeout(() => {
    // Seleciona a barra de progresso
    const progressBar = document.getElementById("progress-bar");
    // Define o valor inicial da barra de progresso como 0
    let progressValue = 0;
    // Define o tempo total de duração da barra em segundos
    const totalTime = 5;
    // Calcula o intervalo de atualização da barra em milissegundos
    const intervalTime = totalTime * 1000 / 100;
    
    // Cancela o intervalo de atualização atual, se existir
    if (currentProgressId) {
      clearInterval(currentProgressId);
      currentProgressId = null;
    }
  
    // Define o intervalo de atualização da barra de progresso
    currentProgressId = setInterval(() => {
      progressValue += 1;
      progressBar.value = progressValue;
      if (progressValue >= 100) {
        clearInterval(currentProgressId);
        currentProgressId = null;
        // Remove a classe 'show' do modal e da barra de progresso após a conclusão da animação
        document.getElementById("modal").classList.remove('show');
        progressBar.classList.remove('show');
        resetProgress();
      }
    }, intervalTime);
    // Adiciona a classe 'show' à barra de progresso para exibi-la
    progressBar.classList.add('show');
  }, 0);

    }else {
      modalConcluido.style.display = 'flex'

      // adiciona o valor do campo ao dicionário
      respostaForms.name = document.getElementById('nome').value;
      respostaForms.lastName = document.getElementById('sobrenome').value;
      respostaForms.email = document.getElementById('email').value;
      respostaForms.cellphone = document.getElementById('celular').value;
      respostaForms.birthday = document.getElementById('birthday').value;
      respostaForms.gender = document.getElementById('genero').value;
      respostaForms.visit = "1";
      respostaForms.marketingType = document.getElementById('comoconheceu').value;
      respostaForms.rg = document.getElementById('rg').value;
      respostaForms.cep = document.getElementById('cep').value;
      respostaForms.endereco = document.getElementById('endereco').value;
      respostaForms.numero = document.getElementById('numero').value;
      respostaForms.complemento = document.getElementById('complemento').value;
      respostaForms.residencial = document.getElementById('residencial').value;
      respostaForms.consultor = `${consultorRespo}`;
      respostaForms.profile = fotoCadastro;
    } 
  });

  if (todosPreenchidos) {
  // lógica para enviar o formulário
  console.log(respostaForms);
}
});

reloadBtn.addEventListener('click', () => {
  location.reload();
})


