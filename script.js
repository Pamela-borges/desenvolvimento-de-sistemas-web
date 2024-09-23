document.getElementById("mudarCor").addEventListener("click", 
function(){
    const titulo= document.getElementById("title");
    const cores= ["#e91e63", "#3f51b5", "#009688", "#ff5722", "#8bc34a"];
    const corAleatoria= cores[Math.floor(Math.random()*cores.length)];
    titulo.style.color= corAleatoria;
}
)