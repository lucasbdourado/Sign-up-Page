const url = 'https://viacep.com.br/ws/'
const rua = document.getElementById('rua')
const bairro = document.getElementById('bairro')
const cidade = document.getElementById('cidade')
const uf = document.getElementById('uf')

class Validation{
    
    isEmpty(elem){
        let spanError = elem.parentNode.querySelector('.form__inputerror')

        if(elem.value.length < 1){
            elem.classList.add('error')
            spanError.innerHTML = 'Campo obrigatório'
            return false
        }

        if(elem.classList.contains('error')){
            elem.classList.remove('error')
            spanError.innerHTML = ''
        }

        return true
    }

    isEmail(elem){
        let spanError = elem.parentNode.querySelector('.form__inputerror')
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(!(regex.test(elem.value))){
            elem.classList.add('error')
            spanError.innerHTML = 'Digite um e-mail válido'
            return false
        }

        if(elem.classList.contains('error')){
            elem.classList.remove('error')
            spanError.innerHTML = ''
        }

        return true
    }

    isCPF(elem){
        let spanError = elem.parentNode.querySelector('.form__inputerror')
        const regex = /^([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/;
        
        if(!(regex.test(elem.value))){
            elem.classList.add('error')
            spanError.innerHTML = 'Digite um CPF válido'
            return false
        }

        if(elem.classList.contains('error')){
            elem.classList.remove('error')
            spanError.innerHTML = ''
        }

        return true
    }

    isCEP(elem){
        let spanError = elem.parentNode.querySelector('.form__inputerror')
        const regex = /^[0-9]{5}[-]?[0-9]{3}$/;
        
        if(!(regex.test(elem.value))){
            elem.classList.add('error')
            spanError.innerHTML = 'Digite um CEP válido'
            return false
        }

        if(elem.classList.contains('error')){
            elem.classList.remove('error')
            spanError.innerHTML = ''
        }

        this.updateAddress(elem.value)

        return true
    }

    updateAddress = async (cep) => {
        const apiUrl = url + cep + '/json/'
        const response = await fetch(apiUrl)
        const data = await response.json()

        rua.value = data.logradouro
        bairro.value = data.bairro
        cidade.value = data.localidade
        uf.value = data.uf
    }
}

export default Validation