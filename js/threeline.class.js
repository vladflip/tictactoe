function getIndex(el){ // Get index of an element within a parent
	var arr = el.parentNode.children;
	var elem;
	for(i=0;i<arr.length;i++){
		if(arr[i] == el) elem=i+1;
	}
	return elem;
}

function threeline(arr){
	this.cnt = 0;
	this.elem = ['tic'];
	this.pic = ' tic';

	this.seton = function(){
		for(i=0;i<arr.length;i++){
			arr[i].onclick = this.move;
		}
	}

	this.check = function(el){ // check game status every move
		var tics = [], tacs = [];
		var maxdiff = 0;

		
		for(i=0;i<this.elem.length;i++){ // check if exists the completed line
			if((i+1)%2!==0){ // tic
				tics.push(this.elem[i]);
			}else{ // tac
				tacs.push(this.elem[i]);
			}
		}

		//check for lines


		if(tics.length>tacs.length){ // possible winner is tic
			var buff = [];
			var bufcnt = 0;
			solve:
			for(i=0;i<solves.length;i++){
					if(bufcnt===3)
						buff.push(solves[i-1]);
				loop:
				for(j=0;j<solves[i].length;j++){
					if(tics.indexOf(solves[i][j])!==-1){
						bufcnt++;
						continue loop;
					}
					else{
						bufcnt = 0;
						continue solve;
					}
				}
			}
		} else {					 // possible winner is tac
			var buff = [];
			var bufcnt = 0;
			solv:
			for(i=0;i<solves.length;i++){
					if(bufcnt===3)
						buff.push(solves[i-1]);
				lop:
				for(j=0;j<solves[i].length;j++){
					if(tacs.indexOf(solves[i][j])!==-1){
						bufcnt++;
						continue lop;
					}
					else{
						bufcnt = 0;
						continue solv;
					}
				}
			}
		}
		if(buff.length)
	return buff;
	}

	this.move = function(){
		if(game.elem.join("").indexOf(getIndex(this))==-1){
			game.elem.push(getIndex(this)); // fill in object 'elem' with pic and elindex
			this.className = this.className=='square'?this.className+game.pic:this.className;
			game.pic = game.pic === ' tic'?' tac':' tic';
			game.cnt++;
			game.drawline(game.check(this));
			//game.sendmove();
		}
	}

	// this.moveclient=function(element){
	// 	element.className = element.className=='square'?element.className+game.pic:element.className;
	// 	game.elem.push(getIndex(element)); // fill in object 'elem' with pic and elindex
	// 	game.pic = game.pic === ' tic'?' tac':' tic';
	// 	game.cnt++;
	// 	game.drawline(game.check(element));
	// }

	// this.calc = function(num){
	// 	num = num.slice(-1);
	// 	this.moveclient(el[num-1]);
	// }

	// this.preventclick = function(){
	// 	var div = document.createElement("div");
	// 	el[0].parentNode.appendChild(div);
	// 	div.className = "preventdiv";
	// }

	// this.removepreventclick = function(){
	// 	var div = document.getElementsByClassName("preventdiv")[0];
	// 					div.parentNode.removeChild(div);
	// }

	// this.startspin = function(a){
	// 	if(a) var spin = document.getElementsByClassName("circlesmall")[0];
	// 	else
	// 		var spin = document.getElementsByClassName("windows8")[0];
	// 	var div = document.getElementsByClassName("preventdiv")[0];
	// 	div.appendChild(spin);
	// 	spin.style.display = 'block';
	// }

	// this.startbutton = function(){
	// 	var button = document.createElement("div");
	// 	var div = document.getElementsByClassName("preventdiv")[0];

	// 	div.appendChild(button);
	// 	button.className = "startgame";
	// 	button.innerHTML = "START THE GAME!";
	// }

	// this.waitforenemy = function(button,link){
	// 	var input = document.createElement("input");
	// 	input.setAttribute("type","text");
	// 	input.setAttribute("value",link);
	// 	button.innerHTML = "";
	// 	button.appendChild(input);
	// 	button.style.fontFamily = 'Corbel';
	// 	button.style.fontSize = '20px';
	// 	button.style.cursor = "text";

	// 	input.className = "inputlink";
	// 	input.setAttribute("focused","");

	// 	game.startspin(1);
	// 	button.onclick = function(){return false};
	// }

	this.drawline = function(arr){
		if(arr){

			arr  = arr[0].sort();
				setTimeout(function(){
					squares[arr[0]-1].style.backgroundColor = '#91D0B1';
				},100);
				setTimeout(function(){
					squares[arr[1]-1].style.backgroundColor = '#91D0B1';
				},400);
				setTimeout(function(){
					squares[arr[2]-1].style.backgroundColor = '#91D0B1';
				},800);
				setTimeout(function(){
					for(i=0;i<3;i++)
						squares[arr[i]-1].style.backgroundColor = '#2ecc71';
				},1300);
				setTimeout(function(){
					for(i=0;i<3;i++)
						squares[arr[i]-1].style.backgroundColor = '#91D0B1';
				},1500);
		}
	}


	// this.sendmove = function(){
	// 	this.preventclick();
	// 	var xhr = new XMLHttpRequest();
	// 	var p = 'move='+this.elem.join("").replace(",","");
	// 	xhr.open("GET","gamein.php?"+p,true);
	// 	xhr.onreadystatechange = function(){
	// 		if(xhr.readyState == 4){
	// 			if(xhr.response.indexOf('<')==-1||xhr.response.indexOf('fuck')==-1){
	// 					game.removepreventclick();

	// 					game.calc(xhr.response);
	// 				}
	// 			}
	// 		}
	// 	xhr.send(null);
	// 	}

}