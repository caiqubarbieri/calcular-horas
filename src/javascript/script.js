var agora = new Date();
var hours = agora.getHours();



var fotodia = window.document.querySelector('#fotodia');
var txtdia = window.document.querySelector('#horariodia');
var backcolor = window.document.querySelector('body');
var footer = window.document.querySelector('footer');
var tituloheader = window.document.querySelector('header h1');




if(hours >= 0 && hours <= 5) {
    backcolor.style.background = "#091116";
    txtdia.innerHTML = `Agora são exatamente ${hours} horas`;
    fotodia.src = 'src/images/madrugada.jpg';
    footer.style.color = "white";
    tituloheader.style.color = "white";
} else if(hours => 6 && hours <= 12) {
    backcolor.style.background = "#def0fc";
    txtdia.innerHTML = `Agora são exatamente ${hours} horas`;
    fotodia.src = 'src/images/manha.jpg'
} if(hours >= 13 && hours < 17) {
    backcolor.style.background = "#437bd0";
    txtdia.innerHTML = `Agora são exatamente ${hours} horas`;
    fotodia.src = 'src/images/dia.jpg';
} else if(hours > 18 && hours <= 23) {
    backcolor.style.background = "#100b16";
    txtdia.innerHTML = `Agora são exatamente ${hours} horas`;
    fotodia.src = 'src/images/noite.jpg'
    footer.style.color = "white";
    tituloheader.style.color = "white";
} if(hours == 17 || hours == 18) {
    backcolor.style.background = "#f6d650";
    txtdia.innerHTML = `Agora são exatamente ${hours} horas`;
    fotodia.src = 'src/images/tarde.jpg'
}