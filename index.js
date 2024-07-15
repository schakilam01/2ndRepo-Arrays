let randomnumber = Math.floor(Math.random()*100)+1
let guesscount = 1

const guesses = document.getElementById("guesses")
const lastresult = document.getElementById("lastresult")
const loworhigh = document.getElementById("loworhigh")
const submitguess = document.getElementById("submitguess")
const guessfield = document.getElementById("guessfield")
const resetbutton = document.getElementById("resetbutton")

resetbutton.style.display = "none"
guessfield.focus()

function resetgame() {
    guessfield.disabled = true
    submitguess.disabled = true
    resetbutton.style.display = "inline"

    resetbutton.addEventListener ("click", () => {
        guesscount = 1
        let resetParas = document.querySelectorAll(".result p")

        for(let i = 0; i< resetParas.length;i++) {
            resetParas[i].textContent = ""
        }
        resetbutton.style.display = "none"
        guessfield.disabled = false
        submitguess.disabled = false
        guessfield.value = ""
        guessfield.focus()
        randomnumber = Math.floor(Math.random()*100)+1
    })
}

submitguess.addEventListener ("click", () => {
    let userguess = Number(guessfield.value)
   
    if (guesscount === 1) {
        guesses.textContent = "Previous Guesses: "
        guesses.textContent += userguess
    } else {
        guesses.textContent += ", " + userguess
    }

    if (userguess === randomnumber) {
        lastresult.textContent = "Congrats! You guessed correctly!"
        loworhigh.textContent = ""
        resetgame()
    } else if (guesscount === 10) {
        lastresult.textContent = "Too many guesses. GAME OVER."
        loworhigh.textContent = ""
        resetgame()
    } else {
        lastresult.textContent = "Wrong Guess. Try Again."
        if (userguess< randomnumber) {
            loworhigh.textContent = "Your guess was too low."
        } else {
            loworhigh.textContent = "Your guess was too high."
        }
    }

    guesscount++
})