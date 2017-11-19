var Time = new Date();
var Time1 = ("0" + Time.getHours()).slice(-2) + ":" + 
			("0" + Time.getMinutes()).slice(-2) + ":" + 
			("0" + Time.getSeconds()).slice(-2);
var Nettleser = navigator.appName;
var TidOgNettleser = "Klokken er " + Time1 + " og du bruker en " + Nettleser + " nettleser";

//console.log(Time1)
//console.log(Nettleser)


function VisTid() {
	document.getElementById("VisTid").innerHTML = TidOgNettleser;
}

//Knapp(RedditLinuxMasterRace)

function MouseOverReddit() {
	//console.log("MouseoverReddit");
	document.getElementById("LinuxMR").src="images/linux-mr.png";
}
function MouseOutReddit() {
	//console.log("RedditOUT")
	document.getElementById("LinuxMR").src="images/linux.png";
}
function MouseClickReddit() {
	window.location.href="https://www.reddit.com/r/linuxmasterrace/";
}

//Knapp(Zoom)

function MouseOverZoom() {
	//console.log("MouseoverZoom");
	document.getElementById("zoom").src="images/nope.gif";
}
function MouseOutZoom() {
	//console.log("RedditOUT")
	document.getElementById("zoom").src="images/zoomdef.png";
}
function MouseClickZoom() {
	window.location.href="http://zoomquilt.org/";
}

//Knapp(Load)

function MouseOverLoad() {
	document.getElementById("load").src="images/load.gif";
}
function MouseOutLoad() {
	//console.log("RedditOUT")
	document.getElementById("load").src="images/loading.gif";
}
function MouseClickLoad() {
	window.location.href="http://www.patience-is-a-virtue.org/";
}

//Knapp(Spin)

function MouseOverSpin() {
	document.getElementById("spin").src="images/leekspin.gif";
}
function MouseOutSpin() {
	//console.log("RedditOUT")
	document.getElementById("spin").src="images/leek.png";
}
function MouseClickSpin() {
	window.location.href="http://leekspin.com/";
}