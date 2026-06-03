

const btnLogin = document.getElementById("btnLogin");
const btnCadastro = document.getElementById("btnCadastro");

const loginForm = document.getElementById("loginForm");
const cadastroForm = document.getElementById("cadastroForm");

btnLogin.addEventListener("click", () => {

    loginForm.classList.remove("hidden");
    cadastroForm.classList.add("hidden");

    btnLogin.classList.add("active");
    btnCadastro.classList.remove("active");

});

btnCadastro.addEventListener("click", () => {

    cadastroForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

    btnCadastro.classList.add("active");
    btnLogin.classList.remove("active");

});



const tipoConta = document.getElementById("tipoConta");
const cnpjField = document.getElementById("cnpjField");
const cpfInput = document.getElementById("cpf");
const cnpjInput = document.getElementById("cnpj");

tipoConta.addEventListener("change", () => {

    if (tipoConta.value === "pj") {

        cnpjField.classList.remove("hidden");

        cpfInput.disabled = true;
        cpfInput.value = "";

        cnpjInput.required = true;
        cpfInput.required = false;

    } else {

        cnpjField.classList.add("hidden");

        cpfInput.disabled = false;

        cpfInput.required = true;
        cnpjInput.required = false;
        cnpjInput.value = "";

    }

});



cpfInput.addEventListener("input", function () {

    let valor = this.value.replace(/\D/g, "");

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    this.value = valor;

});


cnpjInput.addEventListener("input", function () {

    let valor = this.value.replace(/\D/g, "");

    valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
    valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");
    valor = valor.replace(/(\d{4})(\d)/, "$1-$2");

    this.value = valor;

});



const telefoneInput = document.getElementById("telefone");

telefoneInput.addEventListener("input", function () {

    let valor = this.value.replace(/\D/g, "");

    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");

    this.value = valor;

});



cadastroForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (nome.length < 3) {
        alert("Digite um nome válido.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    if (tipoConta.value === "pf") {

        const cpf = cpfInput.value;

        if (cpf.length !== 14) {
            alert("CPF inválido.");
            return;
        }

    }

    if (tipoConta.value === "pj") {

        const cnpj = cnpjInput.value;

        if (cnpj.length !== 18) {
            alert("CNPJ inválido.");
            return;
        }

    }

    alert("Cadastro realizado com sucesso!");

});



loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const senha = document.getElementById("loginSenha").value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos.");
        return;
    }

    alert("Login realizado!");

});