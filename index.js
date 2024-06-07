


let occupiedo1 = false
let occupiedo2 = false
let occupiedo3 = false
let occupiedo4 = false
let occupiedo5 = false
let occupiedo6 = false
let occupiedo7 = false
let occupiedo8 = false
let occupiedo9 = false


let occupiedx1 = false
let occupiedx2 = false
let occupiedx3 = false
let occupiedx4 = false
let occupiedx5 = false
let occupiedx6 = false
let occupiedx7 = false
let occupiedx8 = false
let occupiedx9 = false


let occupied = [
    occupiedo1, occupiedo2, occupiedo3,
    occupiedo4, occupiedo5, occupiedo6,
    occupiedo7, occupiedo8, occupiedo9
]

let occupied_2 = [
    occupiedx1, occupiedx2, occupiedx3,
    occupiedx4, occupiedx5, occupiedx6,
    occupiedx7, occupiedx8, occupiedx9
]


let wins1 = 0
let wins2 = 0


let won1 = false
let won2 = false

let x = 'url("src/x.png")'
let o = 'url("src/o.png")'


let turn1 = false
let turn2 = false

turn1 = true




function start() {
    let main = document.getElementById("main")

    let content = `
    <div id="up">Player 1 (X)'s turn</div>
    <div class="row">

        <button class="box" id="a1" onmouseenter="reset_()" onclick="func1()" style="background-image: url(src/);"></button>
        <button class="box" id="a2" onmouseenter="reset_()" onclick="func2()"></button>
        <button class="box" id="a3" onmouseenter="reset_()" onclick="func3()"></button>
    
    </div>
    
    <div class="row">
    
        <button class="box" id="b1" onmouseenter="reset_()" onclick="func4()"></button>
        <button class="box" id="b2" onmouseenter="reset_()" onclick="func5()"></button>
        <button class="box" id="b3" onmouseenter="reset_()" onclick="func6()"></button>
    
    </div>
    
    <div class="row">
    
        <button class="box" id="c1" onmouseenter="reset_()" onclick="func7()"></button>
        <button class="box" id="c2" onmouseenter="reset_()" onclick="func8()"></button>
        <button class="box" id="c3" onmouseenter="reset_()" onclick="func9()"></button>
    
    </div>
    
    
    
    <button onclick="reset()" id="button">New Game</button>
    <button onclick="exit()" id="ex">Exit</button>

    <footer class="score">
        <b>Score:</b> <br>
        Player 1 (X): <span id="span1">0</span> <br> 
        Player 2 (O): <span id="span2">0</span>
    </footer>

    <button onclick="re()" id="re">Reset<button>
    `
    main.innerHTML = content
}








function turn() {

    let turn = document.getElementById("up")


    if (turn1 == true) {
        
       
        if (won1 == false && won2 == false) {
            turn.textContent = "Player 2 (O)'s turn"
        } else {
            turn.textContent = "Game Over: (Player 1 (X) won)"

        }
        
        turn2 = true
        turn1 = false

    } else if (turn2 == true) {
        
        
        if (won2 == false) {
            turn.textContent = "Player 1 (X)'s turn"
        } else {
            turn.textContent = "Game Over:  (Player 2 (O) won)"

        }
        
        turn1 = true
        turn2 = false

    }
        
}



        


function ret() {
    let turn = document.getElementById("up")
    turn.textContent = "Player 1 (X)'s turn"
}




if (turn1 == true) {
    turn2 = false
} else if (turn2 == true) {
    turn1 = false
}






function func1() {
    let back = document.getElementById("a1")
    if (occupied[0] == false && occupied_2[0] == false && won1 == false && won2 == false && turn1 == true) {
        back.style.backgroundImage = x
        occupied[0] = true
        
        checker()
        

    } else if (occupied[0] == false && occupied_2[0] == false && won1 == false && won2 == false && turn2 == true) {
        back.style.backgroundImage = o
        occupied_2[0] = true
        
        checker_2()
        

    }

}

function func2() {
    let back = document.getElementById("a2")
    if (occupied[1] == false && occupied_2[1] == false && won1 == false && won2 == false && turn1 == true) {
        back.style.backgroundImage = x
        occupied[1] = true
        
        checker()
        

    } else if (occupied[1] == false && occupied_2[1] == false && won1 == false && won2 == false && turn2 == true) {
        back.style.backgroundImage = o
        occupied_2[1] = true
        
        checker_2()
        

    }

}

function func3() {
    let back = document.getElementById("a3")
    if (occupied[2] == false && occupied_2[2] == false && won1 == false && won2 == false && turn1 == true) {
        back.style.backgroundImage = x
        occupied[2] = true
        
        checker()
        

    } else if (occupied[2] == false && occupied_2[2] == false && won1 == false && won2 == false && turn2 == true) {
        back.style.backgroundImage = o
        occupied_2[2] = true
        
        checker_2()
        

    }

}

function func4() {
    let back = document.getElementById("b1")
    if (occupied[3] == false && occupied_2[3] == false && won1 == false && won2 == false && turn1 == true) {
        back.style.backgroundImage = x
        occupied[3] = true
        
        checker()
        

    } else if (occupied[3] == false && occupied_2[3] == false && won1 == false && won2 == false && turn2 == true) {
        back.style.backgroundImage = o
        occupied_2[3] = true
        
        checker_2()
        

    }

}

function func5() {
    let back = document.getElementById("b2")
    if (occupied[4] == false && occupied_2[4] == false && won1 == false && won2 == false && turn1 == true) {
        back.style.backgroundImage = x
        occupied[4] = true
        
        checker()
        

    } else if (occupied[4] == false && occupied_2[4] == false && won1 == false && won2 == false && turn2 == true) {
        back.style.backgroundImage = o
        occupied_2[4] = true
        
        checker_2()
        

    }

}

function func6() {
    let back = document.getElementById("b3")
    if (occupied[5] == false && occupied_2[5] == false && won1 == false && won2 == false && turn1 == true) {
        back.style.backgroundImage = x
        occupied[5] = true
        
        checker()
        

    } else if (occupied[5] == false && occupied_2[5] == false && won1 == false && won2 == false && turn2 == true) {
        back.style.backgroundImage = o
        occupied_2[5] = true
        
        checker_2()
        

    }

}

function func7() {
    let back = document.getElementById("c1")
    if (occupied[6] == false && occupied_2[6] == false && won1 == false && won2 == false && turn1 == true) {
        back.style.backgroundImage = x
        occupied[6] = true
        
        checker()
        
        
    } else if (occupied[6] == false && occupied_2[6] == false && won1 == false && won2 == false && turn2 == true) {
        back.style.backgroundImage = o
        occupied_2[6] = true
        
        checker_2()
        

    }

}

function func8() {
    let back = document.getElementById("c2")
    if (occupied[7] == false && occupied_2[7] == false && won1 == false && won2 == false && turn1 == true) {
        back.style.backgroundImage = x
        occupied[7] = true
        
        checker()
        

    } else if (occupied[7] == false && occupied_2[7] == false && won1 == false && won2 == false && turn2 == true) {
        back.style.backgroundImage = o
        occupied_2[7] = true
        
        checker_2()
        

    }

}

function func9() {
    let back = document.getElementById("c3")
    if (occupied[8] == false && occupied_2[8] == false && won1 == false && won2 == false && turn1 == true) {
        back.style.backgroundImage = x
        occupied[8] = true
        
        checker()
        

    } else if (occupied[8] == false && occupied_2[8] == false && won1 == false && won2 == false && turn2 == true) {
        back.style.backgroundImage = o
        occupied_2[8] = true
        
        checker_2()
        

    }

}


let check = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]




var winning1 = []

function checker() {
    for (let i = 0; i < 8; i ++) {
        let comp = []
        
        for ( let j = 0; j < 3; j ++) {    
            comp.push(occupied[check[i][j]])           
        }
        
        
        if (comp[0] == true && comp[1] == true && comp[2] == true) {
            won1 = true
            winning1 = check[i]
        }

        
        comp = []
    }

    if (won1 == true) {
        reward1()
    }


    drawchecker()

}




var winning2 = []


function checker_2() {
    for (let k = 0; k < 8; k ++) {
        let comp2 = []

        for (let l = 0; l < 3; l ++) {    
            comp2.push(occupied_2[check[k][l]])            
        }
        
        if (comp2[0] == true && comp2[1] == true && comp2[2] == true) {
            won2 = true
            winning2 = check[k]
            
        }
        
        comp2 = []
    }

        
    if (won2 == true) {
        reward2()
    }

    
    
    drawchecker()

}




function drawchecker() {
    let drawcheck = []
    let draw = false    
    let turned = document.getElementById("up")

    for (let i = 0; i < 9; i ++ ) {


        if (won1 == false && won2 == false) {
            if (occupied[i] == true || occupied_2[i] == true) {
                drawcheck.push(true)
            } else {
                drawcheck.push(false)
            }
        }
        
    }

    for (let g = 0; g < drawcheck.length; g ++) {
        if (drawcheck[g] == true) {
            draw = true
            
        } else if (drawcheck[g] == false) {
            draw = false
            break
        }
    }

    if (draw == true) {
        turned.textContent = "Draw"
    } else {
        turn()
    }
}




let id = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"]

function reward1() {
    
    wins1 += 1

    for (let i = 0; i < 9; i ++) {
        let back = document.getElementById(id[i])
        back.style.opacity = 0.25
        back.style.transform = "scale(0.9)"
        back.style.backgroundColor = "rgba(231, 69, 69, 0.521)"


        for (let j = 0; j < 3; j ++) {
            
            if (winning1[j] == i) {
                let back = document.getElementById(id[winning1[j]])
                back.style.opacity = 1
                back.style.transform = "scale(1.02)"
                back.style.backgroundColor = "rgba(59, 218, 38, 0.479)"


            } 
            
        }
        
    }

    let edit =  document.getElementById("span1")
    edit.textContent = wins1

}



function reward2() {
    
    wins2 += 1

    for (let i = 0; i < 9; i ++) {
        let back = document.getElementById(id[i])
        back.style.opacity = 0.25
        back.style.transform = "scale(0.9)"
        back.style.backgroundColor = "rgba(231, 69, 69, 0.521)"

        for (let j = 0; j < 3; j ++) {
            
            if (winning2[j] == i) {
                let back = document.getElementById(id[winning2[j]])
                back.style.opacity = 1
                back.style.transform = "scale(1.02)"
                back.style.backgroundColor = "rgba(59, 218, 38, 0.479)"

                
            } 
            
        }
        
    }

    let edit =  document.getElementById("span2")
    edit.textContent = wins2

}


function reset () {
    won1 = false
    won2 = false

    turn1 = true
    turn2 = false


    for (let i = 0; i < 9; i ++) {
        occupied[i] = false
        occupied_2[i] = false

        let back = document.getElementById(id[i])

        back.style.backgroundImage = ""
        back.style.opacity = 1
        back.style.transform = "scale(1)"
        back.style.backgroundColor = "white"


    }

    ret()


}

function reset_() {

    if (won1 == false && won2 == false) {
        for (let i = 0; i < 9; i ++) {

            let back = document.getElementById(id[i])
    
            back.style.transform = ""
            
    
        }
    }

}




function re() {
    wins1 = 0
    wins2 = 0

    let edit =  document.getElementById("span2")
    edit.textContent = wins2

    let edit2 = document.getElementById("span1")
    edit2.textContent = wins1
}



function exit() {

    won1 = false
    won2 = false

    turn1 = true
    turn2 = false

    for (let i = 0; i < 9; i ++) {
        occupied[i] = false
        occupied_2[i] = false
    }

    let main = document.getElementById("main")
    let content = `<p>Draw<p/> <button class="last" onclick="start()">New Game</button>`
    let content1 = `<p>Player 1 (X) Won<p/> <button class="last" onclick="start()">New Game</button>`
    let content2 = `<p>Player 2 (O) Won<p/> <button class="last" onclick="start()">New Game</button>`

    if (wins1 == wins2) {
        main.innerHTML = content
    } else if (wins1 > wins2) {
        main.innerHTML = content1
    } else if (wins1 < wins2) {
        main.innerHTML = content2
    }

    wins1 = 0
    wins2 = 0

}


