const   selection = document.getElementById("selection"),
        result = document.getElementById("result"),
        options = ["Piedra", "Papel", "Tijera", "Spock", "Lagarto"];

var     vidas = 3;

function machine_move() {   //SELECCIONA UN NUMERO ALEATORIO DEL 0 AL 2
    return Math.floor(Math.random() * 5);
    
}


function play(humanMove) {
    var machineMove = machine_move()
    
    document.getElementById("human").innerHTML = options[humanMove];
    document.getElementById("machine").innerHTML = options[machineMove];

    if (humanMove == 0 && machineMove == 2 ||
        humanMove == 0 && machineMove == 4 ||
        humanMove == 1 && machineMove == 0 ||
        humanMove == 1 && machineMove == 3 ||
        humanMove == 2 && machineMove == 1 ||
        humanMove == 2 && machineMove == 4 ||
        humanMove == 3 && machineMove == 2 ||
        humanMove == 3 && machineMove == 0 ||
        humanMove == 4 && machineMove == 1 ||
        humanMove == 4 && machineMove == 3 ) {
        result.innerHTML = "Ganaste";    
    } else if (humanMove == machineMove) {        
        result.innerHTML = "Empate";
    } else if (humanMove == "undefinded" ) {
        result.innerHTML = "Selecciona otra vez";
    } else {
        result.innerHTML = "Perdiste";
    }
    

}








