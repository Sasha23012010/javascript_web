const cards = [
    {name:'bullbasaur', img:'bullbasaur.png'},
    {name:'charmander', img:'charmander.png'},
    {name:'eevee', img:'eevee.png'},
    {name:'pikachu', img:'pikachu.png'},
    {name:'psyduck', img:'psyduck.png'},
    {name:'squirtle', img:'squirtle.png'},
    
    {name:'bullbasaur', img:'bullbasaur.png'},
    {name:'charmander', img:'charmander.png'},
    {name:'eevee', img:'eevee.png'},
    {name:'pikachu', img:'pikachu.png'},
    {name:'psyduck', img:'psyduck.png'},
    {name:'squirtle', img:'squirtle.png'},
]

let madolWindowHelp = document.getElementsByClassName('modal-help')[0]
console.log('modal-help=', madolWindowHelp)

let button = madolWindowHelp.getElementsByTagName('button')
console.log('button=', button)

for(let i = 0; i < button.length; i++){
    button[i].onclick = function(e) {
        madolWindowHelp.style.display = 'none'
    }

}