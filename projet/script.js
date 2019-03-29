var blink_speed = 800; 
var t = setInterval(function () { 
    var ele = document.getElementById('blink'); 
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden'); 
}, blink_speed);


var panier = [];

function ajouter(nom){

    nom = toString(nom)
    var contain = document.getElementsByClassName(nom).innerHTML;
    panier.push(contain);
    console.log(panier);
    $(this).closest('table').attr('id');
}