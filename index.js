let homeScoreElement = document.getElementById("scr-home")
let guestScoreElement = document.getElementById("scr-guest")

let homeScore = 0
let guestScore = 0

function updateScores () {
    homeScoreElement.textContent = homeScore
    guestScoreElement.textContent = guestScore
}

updateScores()

function addOneHome () {
    homeScore += 1
    updateScores()
}

function addOneGuest () {
    guestScore += 1
    updateScores()
}

function addTwoHome () {
    homeScore += 2
    updateScores ()
}

function addTwoGuest () {
    guestScore += 2
    updateScores ()
}

function addThreeHome () {
    homeScore += 3
    updateScores ()
}

function addThreeGuest () {
    guestScore += 3
    updateScores ()
}

function newGame() {
    homeScore = 0
    guestScore = 0
    updateScores ()
}