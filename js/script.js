window.onload = function()
{
  

    let countOfPlayers = 1;
    let duration = 30;
    document.getElementById('gameStatusField').innerText = '';
    document.getElementById('btn_finish').innerText = '';

    document.getElementById('btn_start').addEventListener('click', (event) => {
       
        // тело обработчика
        document.getElementById('btn_start').innerText = '';
        document.getElementById('btn_finish').innerText = 'Конец игры';
        
        countOfPlayers = prompt("Укажите количество игроков", 2);
        duration = prompt("Укажите время игры", 30);

        countdown(0, 3, countOfPlayers, duration);


       

       
  })
   
 
   // tikTakBoom.run();
}


document.getElementById('btn_finish').addEventListener('click', (event) => {
   
    document.getElementById('gameStatusField').innerText = `Вы проиграли!`;
    document.getElementById('questionField').innerText = ``;
    document.getElementById('answer1').innerText = ``;
    document.getElementById('answer2').innerText = ``;
       
})


var timeoutHandle;

function countdown(minutes, seconds, countOfPlayers, duration) {
    function tick() {
        var counter = document.getElementById("timer");
        counter.innerHTML =
            "Приготовьтесь! Начало через " + minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds) + " секунд";
        seconds--;
        if (seconds >= 0) {
            timeoutHandle = setTimeout(tick, 1000);
        } else {
            document.getElementById('timer').innerText = '';
                
            tikTakBoom.init(
                tasks,
                countOfPlayers,
                duration,
                document.getElementById('timerField'),
                document.getElementById('gameStatusField'),
                document.getElementById('questionField'),
                document.getElementById('answer1'),
                document.getElementById('answer2'),
            )
    
            tikTakBoom.run();
            // конец тела обработчика
        }
    }
    tick();
}

