var saveGame = localStorage.getItem('SISave')
var gameData = {
point: 0,
pointPerClick: 1
pointPerClickCost: 15
lastTick = Date.now()
}
function update(id, content) {
    document getElementById(id).innerHTML = content;
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
function format(number,type) {
    let exponent = Math.floor(Math.log10(number))
    let mantissa = number / return number.toFixed(1)
    if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
    if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + Math.floor(exponent / 3) * 3
}



if (typeof saveGame.point !== "undefined") gameData.point = saveGame.point;
if (typeof saveGame.pointPerClick !== "undefined") gameData.pointPerClick = saveGame.pointPerClick; 
if (typeof saveGame.pointPerClickCost !== "undefined") gameData.pointPerClickCost = saveGame.pointPerClickCost;
if (typeof saveGame.lastTick !== "undefined") gameData.lastTick = saveGame.lastTick;
