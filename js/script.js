
/************ TIMER **************/

//initialiation des variables//
    var interval;
    var compteur = 15;
    var pause = 0;

//initialisation du timer//
    function commencerCompteur() {
        interval = setInterval(enleverSec, 1000);
    }

//calcul du temps et affichage//
    function enleverSec() {
        var minute = 0;
        var seconde = 0;
        compteur--;
        if (compteur == 0) {
            stop();
        }

        minute = Math.floor(compteur / 60);
        if (minute < 10) {
            minute = '0' + minute;
        }

        seconde = Math.ceil(compteur % 60);
        if (seconde < 10) {
            seconde = '0' + seconde;
        }
       
        $('#timer').text(minute + ":" + seconde);
    }

//fin du timer et actualisation des variables//
    function stop() {
        clearInterval(interval);
        pause++;

        if (pause % 7 == 0) {
            var input = $("#task").val();
            $('.list-group').prepend('<li class="list-group-item"><s>' + input + '</s></li>');
            compteur = 10;
            $('#timer').text('00:10');
        } else if (pause % 2 == 0) {
            compteur = 15;
            $('#timer').text('00:15');
        } else {
            compteur = 5;
            $('#timer').text('00:05');
            var input = $("#task").val();
            $('.list-group').prepend('<li class="list-group-item"><s>' + input + '</s></li>');
        }

        commencerCompteur();
    }
/*********** FIN TIMER ************/


/******** Préparation du document *******/

$(document).ready(function () {

//lancement du timer//
    $('#play').click(function () {   
            $('#timer').text('00:15');
            commencerCompteur();
        }),

//mise en pause du timer//
        $('#pause').click(function () {     
            clearInterval(interval);
            $('#timer').text('pause');
        }),

//arret du timer et remise à zéro//
        $('#stop').click(function () {      
            clearInterval(interval);
            $('#timer').text('Tache Annulée');
            compteur = 15;
        })
});