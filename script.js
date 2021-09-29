let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n){ //function ira receber um "n" numero
    if (Number(n) >= 1 && Number(n)<=100){
        return true
    } else {
        return false
    }
}


function inLista(n, l){ //está recebendo um "n" número e uma lista
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}



function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option') //criando uma tag option
        item.text = `Valor ${num.value} adicionado` //item terá o valor text(sting) 
        lista.appendChild(item) //adicionando no HTML em lista a tag criada acima
        res.innerHTML= ''
    }else{
        window.alert('Valor invalido ou já encontrado na lista.')
    }

    /*para apagar o cursor da caixa de numero e n ficar piscando - com focu na caixa*/
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores [pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma /tot
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}</p>`
    }
}