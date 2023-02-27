let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function temp(dados){
    console.log(dados)
    document.querySelector(".h2").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "% de umidade"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscar(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric"
    )
        .then(resposta => resposta.json())
        temp(dados)
}
function botao() {
    let cidade = document.querySelector(".input-cidade").value
    buscar(cidade)
}