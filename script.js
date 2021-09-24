const   boxResult = document.getElementById("boxResult"),
        human_Health = document.getElementById("human_Health"),
        machine_Health = document.getElementById("machine_Health"),
        options = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

// CHOOSING A PLAY
function play(humanMove) {
    var machineMove = machine_move(),
        result = gameResult(humanMove,machineMove);
    
    //IF HEALTH POINTS IS 0, PLAY ENDS
    if (human_Health.textContent <= "0") {
        boxResult.innerHTML = "SE ACABO, ENTIENDELO ヽ(ಠ_ಠ)ノ"
        return
    } else if (machine_Health.textContent <= "0") {
        boxResult.innerHTML = "APLASTASTE A TU ENEMIGO (•̀o•́)ง"
        return
    }
    
    //PRINTING PLAY IMAGES
    document.getElementById("human_img").src = "./images/option" + humanMove +".png";
    document.getElementById("machine_img").src = "./images/option" + machineMove +".png";

    //PRINTING PLAY MARKER
    document.getElementById("humanSelect").innerHTML = options[humanMove];
    document.getElementById("machineSelect").innerHTML = options[machineMove];
    


    // GAME RESULT
    switch (result) {
        case 0:
            boxResult.innerHTML = "Ganaste";
            machine_Health.textContent -= 1
            break;
        case 1:
            boxResult.innerHTML = "Empate";
            break;
        case 2:
            boxResult.innerHTML = "Perdiste";
            human_Health.textContent -= 1
            break;
        default:
            break;
    }    
}

// RANDOM MACHINE PLAY
function machine_move() { 
    return Math.floor(Math.random() * 5);
}

// VICTORY CONDITIONS
function gameResult(humanMove,machineMove) { 
    var result= humanMove == 0 && machineMove == 3 ||
                humanMove == 0 && machineMove == 2 ||
                humanMove == 1 && machineMove == 0 ||
                humanMove == 1 && machineMove == 4 ||
                humanMove == 2 && machineMove == 1 ||
                humanMove == 2 && machineMove == 3 ||
                humanMove == 3 && machineMove == 1 ||
                humanMove == 3 && machineMove == 4 ||
                humanMove == 4 && machineMove == 0 ||
                humanMove == 4 && machineMove == 2  
                ? 0 : humanMove == machineMove ? 1 : 2
    return result
}

// RESTART GAME
function reStart() {
    human_Health.textContent = 4
    machine_Health.textContent = 4
    boxResult.innerHTML = "Otra Vez ＼(｀0´)／"

    //PRINTING PLAY IMAGES
    document.getElementById("human_img").src = "./images/question.png";
    document.getElementById("machine_img").src = "./images/question.png";
}