var gameData = {
point: 0,
pointPerClick: 1
pointPerClickCost: 15
lastTick = Date.now()
}
function gibmepoint() {
    gameData.point += gameData.pointPerClick
    document.getElementById("pointAmount").innerHTML = gameData.point + "point"

}
function buypointPerClick() {
if (gameData.point) >= (gameData.pointPerClickCost)
gameData.point -= gameData.pointPerClickCost
gameData.pointPerClick += 1
gameData.pointPerClickCost *= 1.5
document.getElementById("point").innerHTML = gameData.point + "point"
document.getElementById("thebigpoints").innerHTML ="more per click, currently 1, needed: " + gameData.pointPerClickCost + "point"
}

var mainGameLoop = window.setInterval(function() {
diff = Date.now() - gameData.lastTick;
gameData.lastTick = Date.now()
gameData.point += gameData.goldPerClick * (diff / 1000)
document.getElementById("point").innerHTML = gameData.point + "point"
    get 1()
}, 1000)
var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("SISave"), JSON.stringify(gameData))
}, 100
var savegame = JSON.parse(localStorage.getItem("SISave"))
if (savegame !== null) {
    gameData = savegame
