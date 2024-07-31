var gameData = {
point: 0,
pointPerClick: 1
pointPerClickCost: 15
lastTick = Date.now()
}
function gibmepoint() {
    gameData.point += gameData.pointPerClick
    document.getElementById("pointAmount").innerHTML = gameData.point + "pointAmount"

}
function buypointPerClick() {
if (gameData.point) >= (gameData.pointPerClickCost)
gameData.point -= gameData.pointPerClickCost
gameData.pointPerClick += 1
gameData.pointPerClickCost *= 1.5
document.getElementById("pointAmount").innerHTML = gameData.point + "pointAmount"
document.getElementById("thebigpoints").innerHTML ="more per click, currently 1, needed: " + gameData.pointPerClickCost + "pointAmount"
}

var mainGameLoop = window.setInterval(function() {
diff = Date.now() - gameData.lastTick;
gameData.lastTick = Date.now()
gameData.point += gameData.goldPerClick * (diff / 1000)
document.getElementById("pointAmount").innerHTML = gameData.point + ""
    get 1()
}, 1000)
var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("SISave"), JSON.stringify(gameData))
}, 100
var savegame = JSON.parse(localStorage.getItem("SISave"))
if (savegame !== null) {
    gameData = savegame
}

