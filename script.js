function contar(){
    let inicio=document.getElementById("txti");
    let fim=document.getElementById("txtf");
    let passo=document.getElementById("txtp");
    let resultado=document.getElementById("resultado");

    if(inicio.value.length ==0 || fim.value.length ==0 || passo.value.length==0) {
        window.alert("ATENÇÃO, ERRO! FALTAM DADOS.");
    } else{
       resultado.innerHTML="contando: "
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)

       for(let cont = i; cont<=f; cont+=p){
        resultado.innerHTML+= `${cont} \u{1F49C} 	`
       }

       resultado.innerHTML+=`\u{1F48B}`
    }
}

