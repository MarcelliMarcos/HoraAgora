function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var bom = window.document.getElementById('bom')  
var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
msg.innerHTML = `Agora são ${hora}hs e ${minuto}min.`

if (hora > 00 && hora <= 12){
    //'Bom dia!!'
    bom.innerHTML = `Beba água, e tenha um ÓTIMO DIA!`
    img.src = 'imagens/manha.png' 
    document.body.style.background = '#be700e'
} else if (hora > 13 && hora <= 18) {
   //'Boa tarde!!'
   bom.innerHTML = `Beba água, e tenha uma ÓTIMA TARDE!`
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#d8cab5'
} else {
   // 'Boa noite!'
   bom.innerHTML = `Beba chá, e tenha uma ÓTIMA NOITE!`
    img.src = 'imagens/noite.png'
    document.body.style.background = '#264e68'
}
}
