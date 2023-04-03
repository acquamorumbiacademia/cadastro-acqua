const inputFields = document.querySelectorAll("#nomecompleto, #birthday, #cpf, #cep, #email, #residencial, #celular");
const cepInput = document.getElementById("cep");
const enderecoInput = document.getElementById("endereco");
const buttonLupa = document.getElementById("buttoncep")
const cpfInput = document.getElementById("cpf")
const rgInput = document.getElementById('rg');
const nascimentoInput = document.getElementById('birthday');
const residencialInput = document.getElementById('residencial');
const celularInput = document.getElementById('celular');
const closeBtn = document.getElementById("close");
const drops = document.querySelectorAll('.dropstyle')
const disabledOptions = document.querySelectorAll('.disabled-option');
const bordaStyle = document.querySelectorAll('.inputstyle, .inputendereco, .dropstyle')
const mensagensErro = {
  nomecompleto: "Por favor, insira um nome completo válido, contendo sempre o primeiro caracterer maiúsculo.",
  birthday: "Por favor, insira uma data de nascimento válida no formato dd/mm/aaaa.<br><br>Ex: 20/08/2018.",
  cpf: "Por favor, insira seu CPF com a pontuação padrão.<br><br>Ex: 123.456.789-10",
  cep: "Por favor, insira um CEP válido e com a pontuação padrão.<br><br>Ex: 05710-030.",
  numero: "Por favor, insira um número válido.",
  email: "Por favor, insira um e-mail válido.",
  residencial: "Por favor, insira um número de telefone residencial válido e com DDD.<br><br>Ex: 1135897177.",
  celular: "Por favor, insira um número de celular válido e com DDD.<br><br>Ex: 11935897177."
};

inputFields.forEach((inputField) => {
  inputField.addEventListener("blur", () => {
    validarCampo(inputField);
  });

  let borda;

  if (window.matchMedia("(min-width: 1200px)").matches) {
    borda = 0.18;
  } else if (window.matchMedia("(min-width: 992px)").matches) {
    borda = 0.32;
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    borda = 0.25;
  } else {
    borda = 0.15; // valor padrão caso a tela seja menor que 768px
  }

  console.log(borda);

  bordaStyle.forEach((element) => {
    element.addEventListener("focus", () => {
      element.style.border = `${borda}rem solid #004aad !important`;
    });
  });
});

function trocarLupa(buttonLupa) {
  buttonLupa.src = "./imagens/lupa.png";
}

function voltarLupa(buttonLupa) {
  buttonLupa.src = "./imagens/lupa-azul.png";
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
  // Limpa o timeout anterior, se existir
  resetProgress();
  clearTimeout(timeoutId);

  switch (campo.id) {
    case "nomecompleto":
      regex = /[A-ZÀ-Ú][a-zà-ú]+.[a-z].*[A-ZÀ-Ú][a-zà-ú]+/;
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
    default:
      regex = null;
      break;
  }
  
  if (valorCampo === "") {
    campo.style.border = "0.15rem solid #00b3f6";
  } else if (regex.test(valorCampo)) {
    campo.style.border = "0.15rem solid #00b3f6";
    document.getElementById("modal").classList.remove('show');
  } else {
    campo.style.border = "0.15rem solid red";
    document.getElementById("msgerror").innerHTML = mensagensErro[campo.id];
    // Exibe o modal
    setTimeout(() => {
      // Exibe o modal
      document.getElementById("modal").classList.add('show');
      drops.forEach(drop => {
        drop.setAttribute('disabled', true);
      });
      disabledOptions.forEach(option => {
        option.style.display = 'none';
      });
    }, 100);
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
  drops.forEach(drop => {
    drop.removeAttribute('disabled');
  });
  disabledOptions.forEach(option => {
    option.style.display = 'block';
  });
}


closeBtn.addEventListener("click", () => {
  document.getElementById("modal").classList.remove('show');
  resetProgress();
  // Limpa o timeout anterior, se existir
  clearTimeout(timeoutId);
});