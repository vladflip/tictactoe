var squares = document.getElementsByClassName("square");
var solves = [[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7],[1,2,3],[4,5,6],[7,8,9]];


function getIndex(el){ // Get index of an element within a parent
	var arr = el.parentNode.children;
	var elem;
	for(i=0;i<arr.length;i++){
		if(arr[i] == el) elem=i+1;
	}
	return elem;
}

var game;

function Game(ver){
	switch(ver){
		case "three":
			game = new threeline(squares);
			game.seton();
		break;

		case "four":
			game = new fourline();
	}
}

Game("three");