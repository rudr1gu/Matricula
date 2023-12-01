//turno
const manha = document.getElementById("manha")
const tarde = document.getElementById("tarde")
const noite = document.getElementById("noite")
//atividades extra-curriculares
const teatro = document.getElementById("teatro")
const musica = document.getElementById("musica")
const ballet = document.getElementById("ballet")
const pintura = document.getElementById("pintura")
const judo = document.getElementById("judo")
const futebol = document.getElementById("futebol")

function validacao(event){
    event.preventDefault()

    let valid = false;

    if(manha.checked || tarde.checked || noite.checked){
        valid = true;
    }

    else{
        alert("Selecione o turno que deseja estudar")
        return false;
    }

    let checkvalid = false;

    if(teatro.checked || musica.checked || ballet.checked || pintura.checked || judo.checked || futebol.checked){
        checkvalid = true;
    }
   
    else{
        alert("Selecione uma Atividade Extra-Curricular")
        return false;
    } 
    return confirm()
}

const telefone = (event) => {
    let input = event.target
    input.value = mascaratelefone(input.value)
  }
  
const mascaratelefone = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

function confirm(){
        const formulario = document.getElementById('formulario')
        const telaconfirm = document.getElementById('confirm')

        formulario.style.display = 'none'
        telaconfirm.style.display = 'block'

        let turno = '' 
        if(manha.checked === true){
            turno = 'Manhã'
        } else if(tarde.checked === true){
            turno = 'Tarde'
        } else{
            turno = 'Noite'
        }

        let atividade = []
        if(teatro.checked === true){
            atividade.push('Teatro')
        } if(musica.checked === true){
            atividade.push(' Musica')
        } if(ballet.checked === true){
            atividade.push(' ballet')
        } if(pintura.checked === true){
            atividade.push(' Pintura')
        } if(judo.checked === true){
            atividade.push(' Judo')
        } if(futebol.checked === true){
            atividade.push(' Futebol')
        }

        const item = ['Nome', 'Data de Nascimento','E-mail', 'Telefone','Série', 'Turno','Atividades Extra-Curriculares']
        const dados = []
        const nome = document.getElementById('nome').value
        const data = document.getElementById('data').value
        const email = document.getElementById('email').value
        const tfone = document.getElementById('tfone').value
        const serie = document.getElementById('serie').value
        let confirm = document.getElementById('res')
        
        dados.push(nome, data, email, tfone, serie, turno, atividade)

        let i = 0
       
        for(var conteudo of dados){
            confirm.innerHTML += `<p>${item[i]}: ${conteudo}</p>`
            i++         
         }
}

function voltar(){
    const formulario = document.getElementById('formulario')
    const telaconfirm = document.getElementById('confirm')
    let confirm = document.getElementById('res')

    confirm.innerHTML = ''

    formulario.style.display = 'block'
    telaconfirm.style.display = 'none'
}

function sucesso(){
    const sucesso = document.getElementById('pg2')
    const formulario = document.getElementById('formulario')
    const telaconfirm = document.getElementById('confirm')

    formulario.style.display = 'none'
    telaconfirm.style.display = 'none'
    sucesso.style.display = 'flex'
}