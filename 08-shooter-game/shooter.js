const grid = document.querySelector('.grid')

for (let i = 0; i < 225; i++) {
    let div = document.createElement('div');
    div.id = i;
    grid.append(div);
}

let bombs = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
];

const gridDiv = document.querySelectorAll('.grid div');

function drawBombs(bombsArray) {
    for(let i = 0; i < bombsArray.length; i++){
        gridDiv[bombsArray[i]].classList.add('bomb')
        if (!bombsRemove.)
    }
}
drawBombs(bombs)

let shooterIndex = 217
gridDiv[shooterIndex].classList.add('shooter')

let xStep = 1
let yStep = 0
let directionRight = true 
function moveBombs(bombsArray) {

    }
    

    
    for (let i = 0; i < bombsArray.length; i++)
        bombsArray 
}
let setIntervalId = setInterval(moveBombs, 500, bombs)

// Рух гравця: влівл - вправо
function moveShooter(event){
    gridDiv[shooterIndex].classList.remove('shooter')
    //console.log(event)    
    switch (event.code){
        case 'ArrowLeft':
            if (shooterIndex > 210)
                shooterIndex--;
            break
        case 'ArrowRight':
            if (shooterIndex < 224)
                shooterIndex++;
            break
    }
    gridDiv[shooterIndex].classList.add('shooter')
}
document.addEventListener('keydown', moveShooter)

// Постріл гравця
function shoot(event) {
    let currentShooterIndex = shooterIndex
    let intervalId
    console.log(event)
    function moveShoot(){
        gridDiv[currentShooterIndex].classList.remove('shoot')
        currentShooterIndex -= 15
        
        if(currentShooterIndex < 0)
            clearInterval(intervalId)

        gridDiv[currentShooterIndex].classList.add('shoot')
    }

    if (event.code == 'Space') {
        console.log(1)
        intervalId = setInterval(moveShoot, 100)
    }
}
document.addEventListener('keydown', shoot)