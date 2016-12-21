
/************ TIMER **************/

//initialiation des variables//
    var interval;
    var compteur = 15;
    var pause = 0;
    var etat = 'stop';

//initialisation du timer//
    function etatPlay() {
        $('#task').attr('disabled','disabled');
        if (etat != 'play'){
            etat = 'play';
            interval = window.setInterval(function (){
                compteur--;
                affichage(compteur);
            }, 1000);
            
        }
    }

//calcul du temps et affichage//
    function affichage(temps) {
       
        if (temps == 0) {
            etatStop();
        }

        var minute = Math.floor(temps / 60);
        if (minute < 10) {
            minute = '0' + minute;
        }

        var seconde = Math.ceil(temps % 60);
        if (seconde < 10) {
            seconde = '0' + seconde;
        }
       
        $('#timer').text(minute + ":" + seconde);
    }
//pause du timer//
    function etatPause() {
        etat = 'pause';
        window.clearInterval(interval);
        $('#timer').text('pause');
    }

//fin du timer et actualisation des variables//
    function etatStop() {
        etat = 'stop';
        window.clearInterval(interval);
       
        pause++;

        if (pause % 7 == 0) {
            compteur = 10;
            $('#timer').text('00:10');
            affichageDone();
        } else if (pause % 2 == 0) {
            compteur = 15;
            $('#timer').text('00:15');
            $('#pause').text('Doing');
        } else {
            compteur = 5;
            $('#timer').text('00:05');
            affichageDone();
        }

        etatPlay();
    }

//affichage en fin de compteur//
    function affichageDone() {
         var input = $("#task").val();
         $('.list-group').prepend('<li class="list-group-item"><s>' + input + '</s></li>');
         $('#pause').text('En pause');
         $('#task').removeAttr('disabled');
    }
/*********** FIN TIMER ************/


/******** Préparation du document *******/

$(document).ready(function () {

//lancement du timer//
    $('#play').click(etatPlay);

//mise en pause du timer//
    $('#pause').click(etatPause);

//arret du timer et remise à zéro//
    $('#stop').click(etatStop);

        $('input').keypress(function (event) {
            if (keycode (event.which) == 13) {
            console.log('Enter');
    }
})
});