homeEl = document.getElementById("home-score")
guestEl = document.getElementById("guest-score")
homeScore = 0
guestScore = 0

function add1PointsHome(){
    homeScore += 1
    homeEl.textContent = homeScore
}
function add2PointsHome(){
    homeScore += 2
    homeEl.textContent = homeScore
}
function add3PointsHome(){
    homeScore += 3
    homeEl.textContent = homeScore
}

function add1PointsGuest(){
    guestScore += 1
    guestEl.textContent = guestScore
}
function add2PointsGuest(){
    guestScore += 2
    guestEl.textContent = guestScore
}
function add3PointsGuest(){
    guestScore += 3
    guestEl.textContent = guestScore
}
function resetGame() {
    homeScore = 0
    guestScore = 0
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
}