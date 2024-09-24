//função usando o for
function usarFor(){
    const tarefas=["Estudar javascript", "praticar css", "estudar html", "criar página web"];
    let resultado= "<strong> minhas tarefas: </strong><br>";
    for(let i=0; i<tarefas.length; i++){
        resultado+=`${i+1}. ${tarefas[i]} <br>`;
    }

    document.getElementById("forResult").innerHTML=resultado;

}

function usarWhile(){
    let saldo=0;
    let objetivo=100;
    let resultado="<strong> poupança: </strong><br>";
    while(saldo<objetivo){
        saldo += 20;
        resultado += `saldo atual: R$ ${saldo} <br>`;
    }

    document.getElementById("whileResult").innerHTML=resultado;
}

function usarDoWhile(){
    let saldo=100;
    let totalGasto=0;
    let tentativas=0;
    let resultado="<strong> compras: </strong><br>";
    const lista=[{nome: "camiseta", preco:30}, {nome:"calça", preco:50}, {nome:"meias", preco:10}, {nome:"cinto", preco:20}];

    do {
        const item=lista[tentativas];
        if(totalGasto +item.preco<=saldo){
            totalGasto += item.preco;
            tentativas++;
            resultado +=  `compra ${tentativas}: ${item.nome} - preço: R$ ${item.preco} - total gasto: R$ ${totalGasto} <br>`;
        }

        else{break;}

    } while(totalGasto<saldo && tentativas<lista.length);
    resultado += `<strong> total gasto: R$ ${totalGasto} </strong><br>`;
    document.getElementById("doWhileResult").innerHTML=resultado;

}

function usarIfElse(){
    let nota = Math.floor(Math.random()*101);
    let resultado = `<strong> sua nota: R$ ${nota} </strong><br>`;
    if (nota>=90){
        resultado += "parabéns";

    } else if(nota>=80){
        resultado += "Bom resultado";
    } else if(nota>=70){
        resultado += "Pode melhorar";

    } else{ 
        resultado += ("Precisa se dedicar mais");
    }

    document.getElementById("ifElseResult").innerHTML = resultado;
}
 function usarSwitch(){
    let dia = new Date().getDay();
    let resultado = "<strong> Switch: </strong><br>";
    switch(dia){
        case 0:
            resultado += "hoje é domingo";
            break;
        case 1:
            resultado += "hoje é segunda-feira";
            break;
        case 2:
            resultado += "hoje é terça-feira";
            break; 
        case 3:
            resultado += "hoje é quarta-feira";
            break;
        case 4:
            resultado += "hoje é quinta-feira";
            break;
        case 5:
            resultado += "hoje é sexta-feira";
            break;
        case 6:
            resultado += "hoje é sábado";
            break;

        default: 
            resultado += "dia invalido";
               
    }

    document.getElementById("switchResult").innerHTML=resultado;
 }