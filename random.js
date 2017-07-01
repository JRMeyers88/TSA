
var arrow = window.addEventListener("click", randomize);

function randomize(){
	var randNum = Math.floor(Math.random() * 2) + 1;
	var imgName = "img_" + randNum + ".png";
	console.log("imgname", imgName);
	document.getElementById("image").src="../img" + "/" + imgName;
};