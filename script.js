function vermais(){
let pontos = document.getElementById("pontos");
let maisTexto = document.getElementById("mais");
let bVermais = document.getElementById("bvermais");

    if(pontos.style.display === "nome"){
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        bVermais.innerHTML = "Ver mais";
    }else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        bVermais.innerHTML = "Ver menos";
    }
}