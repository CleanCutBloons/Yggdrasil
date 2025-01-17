let modInfo = {
	name: "The Spiral Tree",
	id: "spiraltree",
	author: "CleanCutBloons",
	pointsName: "energy",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 4,  // In hours
	played: false,
}

// Set your version in num and name
let VERSION = {
	num: "0.0.2",
	name: "Sources of Power",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0.2</h3><br>
		- Added the first ring of layers.<br>
		- No reason to buy them yet, but they're there!<br>
        <h3>v0.0.1</h3><br>
		- Added the inner layer.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    let startPoints = new Decimal(0)
    return startPoints
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	return 1;
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { 
	return {}
}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("1e1000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(60) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
