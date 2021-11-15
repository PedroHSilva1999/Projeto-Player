let musica = document.querySelector('audio');
let musicas = [
    {titulo: 'American Idle', artista: "RKVC", src:"musicas/American Idle - RKVC.mp3",img:"https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9jayUyMG11c2ljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"},
    {titulo: 'Blackberry K Two', artista: "Squadda B", src:"musicas/Blackberry K Two - Squadda B.mp3",img:"https://img.elo7.com.br/product/360x360/344476E/adesivo-de-parede-75x65cm-hip-hop-rap-rapper-r1798-nebula.jpg"},
    {titulo: 'Travel Nonstop', artista: "Squadda B", src:"musicas/Travel Nonstop - Squadda B.mp3",img:"https://img.elo7.com.br/product/360x360/344476E/adesivo-de-parede-75x65cm-hip-hop-rap-rapper-r1798-nebula.jpg"},
    {titulo: 'Piano Trap Beethoven', artista: "josh pan", src:"Piano Trap Beethoven - josh pan.mp3",img:"https://img.elo7.com.br/product/360x360/344476E/adesivo-de-parede-75x65cm-hip-hop-rap-rapper-r1798-nebula.jpg"},
    {titulo: 'Crops', artista: "Delicate Steve", src:"musicas/Crops - Delicate Steve.mp3",img:"https://dbdzm869oupei.cloudfront.net/img/sticker/preview/14748.png"},
    {titulo: 'Forever', artista: "Anno Domini Beats", src:"musicas/Forever - Anno Domini Beats.mp3",img:"https://img.elo7.com.br/product/360x360/344476E/adesivo-de-parede-75x65cm-hip-hop-rap-rapper-r1798-nebula.jpg"},
   
    
]
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');

let indexMusica = 0
let nomeArtista = document.querySelector('i');
renderizarMusica(indexMusica)



document.querySelector('.anterior').addEventListener('click',() => {
    indexMusica--
    if(indexMusica < 0){
        indexMusica === 2
    }
    renderizarMusica(indexMusica)
} )

document.querySelector('.proxima').addEventListener('click',() => {
    indexMusica++
    if(musica >2){
        indexMusica ===0
    }
    renderizarMusica(indexMusica)
} )

let tempoTotal =document.querySelector('.fim');
    tempoTotal.textContent = segundosParaMin(musica.duration.toFixed(0));

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = (musica.currentTime / musica.duration) * 100 + "%";
    let decorrido = document.querySelector('.inicio');
    decorrido. textContent = segundosParaMin(musica.currentTime.toFixed(0));
    
    
}

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img
        tempoTotal.textContent = segundosParaMin(musica.duration.toFixed(0));
    })
}
function tocarMusica (){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica (){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}



function segundosParaMin (segundos){
    let campoMinutos = Math.floor(segundos/60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = "0" + campoSegundos ;
    }

    return campoMinutos + ":" + campoSegundos;
    
}



document.querySelector('.botao-play').addEventListener('click',tocarMusica);
document.querySelector('.botao-pause').addEventListener('click',pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra)