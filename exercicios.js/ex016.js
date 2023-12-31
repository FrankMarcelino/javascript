//funções > segue exemplos

function parimpar (n){
    
    if (n%2 == 0) {
        return 'par!'
    } else {
        return 'impar'
    }
}

console.log(parimpar(1))

// outro exemplo (soma)

function soma( n1=0, n2=0 ){
    return n1 + n2
}

console.log(soma(1,1))


// outro exemplo (dobro)

let v = function(x)  {
    return x*2
}

console.log(v(5))

// outro exemplo (fatorial)

function fatorial1(n) {
    let fat = 1
    for(let contador = n; contador > 1; contador--){
        fat *= contador
    }
    return fat
}

console.log(fatorial1(5))

// outro exemplo (fatorial) recursiva: quando uma função chama ela mesma

function fatorial2(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial2(n-1)
    }
}

console.log(fatorial2(5))