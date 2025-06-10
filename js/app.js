// function scrolagem(){
//     let header = document.getElementById('menu')
//         header.classList.toggle('scrollagem', window.scrollY > 0)
//     }
    
//     window.addEventListener('scroll', scrolagem)

/* --------------- EXERCÍCIO 044 - INICIO ---------------*/

let btn044 = document.getElementById('btn044')
let div044 = document.getElementById('resultado044')

function calcular044 () {
    let idade = parseInt(document.getElementById('valor044').value)
    let calculo = (idade * 365) 

    div044.innerHTML = `Sua idade em anos é: ${idade} <br>
                        Sua idade em dias é: ${calculo}`
    console.log(calculo)
    
}

btn044.addEventListener('click', calcular044)

/* --------------- EXERCÍCIO 044 - FIM ---------------*/
/* ------------------------------------------------------*/
/* --------------- EXERCÍCIO 045 - INICIO ---------------*/

let btn045 = document.getElementById('btn045')
let div045 = document.getElementById('resultado045')

function calcular045 () {
    let quilowatts = parseFloat(document.getElementById('quilowatt045').value)
    let salario = parseFloat(document.getElementById('salario045').value)

    let valorUnitario = (salario / 7) / 100
    let valorTotal = valorUnitario * quilowatts
    let valorComDesconto = valorTotal * 0.9

    div045.innerHTML = `
    Valor de cada quilowatt: ${valorUnitario.toFixed(2)}<br>
    Valor a ser pago: ${valorTotal.toFixed(2)}<br>
    Valor com desconto de 10% ${valorComDesconto.toFixed(2)}`
}

btn045.addEventListener('click', calcular045)


/* --------------- EXERCÍCIO 045 - FIM ---------------*/
/* ------------------------------------------------------*/
/* --------------- EXERCÍCIO 046 - INICIO ---------------*/

let btn046 = document.getElementById('btn046')
let div046 = document.getElementById('resultado046')

function calcular046() {
    let grausC = parseFloat(document.getElementById('valor046').value)
    let grausF = grausC * (9.0/5.0) + 32.2

    div046.innerHTML = `A conversão de Graus Celsiu para Fahrenheit é: ${grausF.toFixed(2)}`
    console.log (grausF.toFixed(2))
}

btn046.addEventListener('click', calcular046)

/* --------------- EXERCÍCIO 046 - FIM ---------------*/
/* ------------------------------------------------------*/
/* --------------- EXERCÍCIO 047 - INICIO ---------------*/

let btn047 = document.getElementById('btn047')
let div047 = document.getElementById('resultado047')

function calcular047() {
    let salario = parseFloat(document.getElementById('valor047').value)
    let aumento = salario * 0.25
    let salarioNovo = aumento + salario

    div047.innerHTML = `
                        O salario inserido é: ${salario} <br>
                        O aumento do salário é: ${aumento} <br>
                        O novo salário é: ${salarioNovo}`
}

btn047.addEventListener('click', calcular047)

/* --------------- EXERCÍCIO 047 - FIM ---------------*/
/* ------------------------------------------------------*/
/* --------------- EXERCÍCIO 048 - INICIO ---------------*/

let btn048 = document.getElementById('btn048')
let div048 = document.getElementById('resultado048')

function calcular048() {
    let alturaDegrau = parseFloat(document.getElementById('alturaDegrau048').value)
    let alturaDesejada = parseFloat(document.getElementById('alturaDesejada048').value)
    let numeroDegraus = Math.ceil(alturaDesejada / alturaDegrau)

    div048.innerHTML = `O número de degraus necessários é: ${numeroDegraus}`

}

btn048.addEventListener('click', calcular048)

/* --------------- EXERCÍCIO 048 - FIM ---------------*/
/* ------------------------------------------------------*/
/* --------------- EXERCÍCIO 049 - INICIO ---------------*/

let btn049 = document.getElementById('btn049')
let div049 = document.getElementById('resultado049')

function calcular049() {

    let peso = parseFloat(document.getElementById('peso049').value)
    let altura = parseFloat(document.getElementById('altura049').value)

    if (peso <= 0 || altura <= 0) {
        div049.innerHTML = '<span class="erro">Por favor, insira valores maiores que zero!</span>'
        console.error('Erro: Valores devem ser maiores que zero')
        return
    }

    let IMC = (peso / altura * altura)

    div049.innerHTML = `O IMC é ${IMC}`

}

btn049.addEventListener('click', calcular049)

/* --------------- EXERCÍCIO 049 - FIM ---------------*/
/* ------------------------------------------------------*/
/* --------------- EXERCÍCIO 050 - INICIO ---------------*/

let btn050 = document.getElementById('btn050')
let div050 = document.getElementById('resultado050')

function calcular050() {
    let valor1 = parseFloat(document.getElementById('valor050').value)
    let valor2 = parseFloat(document.getElementById('valor150').value)
    let valor3 = parseFloat(document.getElementById('valor250').value)

    let soma = valor1 + valor2 + valor3

    div050.innerHTML = `
                        A soma total do produtos é: ${soma} <br>
                        O valor com 10% de desconto é: ${soma * 0.90} <br>
                        O valor com 20% de desconto é: ${soma * 0.80} <br>
                        O valor com 30% de desconto é: ${soma * 0.70} <br>
                        O valor com 40% de desconto é: ${soma * 0.60}`


                        console.log(`
                            A soma total do produtos é: ${soma} <br>
                            O valor com 10% de desconto é: ${soma * 0.90} <br>
                            O valor com 20% de desconto é: ${soma * 0.80} <br>
                            O valor com 30% de desconto é: ${soma * 0.70} <br>
                            O valor com 40% de desconto é: ${soma * 0.60    }`
                    )
}


btn050.addEventListener('click', calcular050)

/* --------------- EXERCÍCIO 050 - FIM ---------------*/
/* ------------------------------------------------------*/
/* --------------- EXERCÍCIO 051 - INICIO ---------------*/

let btn051 = document.getElementById('btn051')
let div051 = document.getElementById('resultado051')

function calcular051() {
    let valor1 = parseFloat(document.getElementById('valor051').value)
    let valor2 = parseFloat(document.getElementById('valor151').value)
    let valor3 = parseFloat(document.getElementById('valor251').value)
    let valor4 = parseFloat(document.getElementById('valor351').value)
    let valor5 = parseFloat(document.getElementById('valor451').value)

    let media = (valor1 + valor2 + valor3 + valor4 + valor5) / 5

    div051.innerHTML = `A média aritmética dos números inseridos é: ${media}`

}

btn051.addEventListener('click', calcular051)

/* --------------- EXERCÍCIO 051 - FIM ---------------*/
/* ------------------------------------------------------*/
/* --------------- EXERCÍCIO 052 - INICIO ---------------*/

let btn052 = document.getElementById('btn052')
let div052 = document.getElementById('resultado052')

function calcular052() {
    let valorConta = parseFloat(document.getElementById('conta052').value)
    let porcentagem = parseFloat(document.getElementById('gorjeta052').value)

    let gorjeta = valorConta * (porcentagem / 100);
    let total = valorConta + gorjeta;

    div052.innerHTML = `
    <p><strong>Valor da Gorjeta:</strong> R$ ${gorjeta.toFixed(2)}</p>
    <p><strong>Total a Pagar:</strong> R$ ${total.toFixed(2)}</p>
    `
}

btn052.addEventListener('click', calcular052)

/* --------------- EXERCÍCIO 052 - FIM ---------------*/
