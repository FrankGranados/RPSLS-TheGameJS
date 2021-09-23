const   boxResult = document.getElementById("result"),
        humanSelect = document.getElementById("humanSelect"),
        machineSelect = document.getElementById("machineSelect"),
        human_hp = document.getElementById("human_hp"),
        machine_hp = document.getElementById("machine_hp")
        options = ["Piedra", "Papel", "Tijera", "Spock", "Lagarto"];

function play(humanMove) {
    var machineMove = machine_move(),
        result = gameResult(humanMove,machineMove);
        
        
      
    if (human_hp.textContent <= "0") {
        boxResult.innerHTML = "SE ACABO, ENTIENDELO ヽ(ಠ_ಠ)ノ"
        return
    } else if (machine_hp.textContent <= "0") {
        boxResult.innerHTML = "APLASTASTE A TU ENEMIGO (•̀o•́)ง"
        return
    }
    
    
    humanSelect.innerHTML = options[humanMove];
    machineSelect.innerHTML = options[machineMove];

    switch (result) {
        case 0:
            boxResult.innerHTML = "Ganaste";
            machine_hp.textContent -= 1
            break;
        case 1:
            boxResult.innerHTML = "Empate";
            break;
        case 2:
            boxResult.innerHTML = "Perdiste";
            human_hp.textContent -= 1
            break;
        default:
            break;
    }    
}

function machine_move() {   //SELECCIONA UN NUMERO ALEATORIO DEL 0 AL 4
    return Math.floor(Math.random() * 5);
}

function gameResult(humanMove,machineMove) { //Funcion para definir el resultado del juego
    var result= humanMove == 0 && machineMove == 2 ||   
                humanMove == 0 && machineMove == 4 ||   
                humanMove == 1 && machineMove == 0 ||   
                humanMove == 1 && machineMove == 3 ||   //Se enlistan todas las condiciones de victoria
                humanMove == 2 && machineMove == 1 ||   
                humanMove == 2 && machineMove == 4 ||   
                humanMove == 3 && machineMove == 2 ||   
                humanMove == 3 && machineMove == 0 ||   
                humanMove == 4 && machineMove == 1 ||   
                humanMove == 4 && machineMove == 3  
                ? 0 : humanMove == machineMove ? 1 : 2
    return result
}

function reboot() {
    human_hp.textContent = 4
    machine_hp.textContent = 4
    boxResult.innerHTML = "comenzemos otra vez ＼(｀0´)／"
}