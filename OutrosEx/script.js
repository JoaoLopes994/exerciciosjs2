function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagens')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Dia
        img.src = 'manha.jpg'
    } else if (hora >= 12 && hora <18) {
        //tarde
        img.src = 'tarde.jpg'
    } else {
        //noite
        img.src = 'noite.jpg'
    }
}