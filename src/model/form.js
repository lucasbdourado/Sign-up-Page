import Validation from "./validation"

const url = 'https://viacep.com.br/ws/'
const form = document.querySelector('#form')
const required = document.querySelectorAll('.required')
const name = document.getElementById('name')
const cpf = document.getElementById('cpf')
const email = document.getElementById('email')
const cep = document.getElementById('cep')
const validation = new Validation()

cep.addEventListener('focusout', function(event){
    validation.isCEP(event.target)
})

form.addEventListener('submit', function(event){
    event.preventDefault();
    let invalid = []

    required.forEach(element => {
        validation.isEmpty(element)
    });
    validation.isCPF(cpf)
    validation.isEmail(email)

    

    required.forEach(element => {
        if(element.classList.contains('error')){
            invalid.push(element)
        }
    });
    
    if(invalid.length == 0){
        form.submit();
    }
})



function isEmpty(elem){
    return console.log(elem);
    //elem.value.lenght < 1 ? `O campo <strong>${elem.name}</strong> não pode ser vazio.` : ''
}