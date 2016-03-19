var oreType = 0;
var oreType2 = 0;
var iron = 0; var ironPrice = 10; var ironNum = 0;
var gold = 0; var goldPrice = 24; var goldNum = 0;
var copper = 0; var copperPrice = 6; var copperNum = 0;
var tin = 0; var tinPrice = 8; var tinNum = 0;
var lithium = 0; var lithiumPrice = 15; var lithiumNum = 0;
var diamond = 0; var diamondPrice = 100; var diamondNum = 0;
var money = 0;
var pickCost = 500;
var orePerClick = 1;
var pulseLevel = 0; var pulseCost = 5000; var pulse2Level = 0; var pulse2Cost = 100000;
var genLevel = 0; var genCost = 5000; var gen2Level = 0; var gen2Cost = 100000;
var energy = 0;

function refreshStats(){
	document.getElementById("iron").innerHTML = iron;
	document.getElementById("gold").innerHTML = gold;
	document.getElementById("copper").innerHTML = copper;
	document.getElementById("tin").innerHTML = tin;
	document.getElementById("lithium").innerHTML = lithium;
	document.getElementById("diamond").innerHTML = diamond;
	document.getElementById("energy").innerHTML = energy;
    document.getElementById("money").innerHTML = money;
}

function gainOre(){
	oreType = Math.floor(Math.random() * 100);
	if(oreType >= 95){
		diamond = diamond + orePerClick;
	}
	if(oreType >= 76 && oreType < 95){
		iron = iron + orePerClick;
	}
	if(oreType < 76 && oreType >= 57){
		gold = gold + orePerClick;
	}
	if(oreType < 57 && oreType >= 38){
		copper = copper + orePerClick;
	}
	if(oreType < 38 && oreType >= 19){
		tin = tin + orePerClick;
	}
    if(oreType < 19){
		lithium = lithium + orePerClick;
	}
	refreshStats();
}

function pulseMine(){
	if(energy > (pulseLevel * 4)){
		energy = energy - (pulseLevel * 4);
	    oreType2 = Math.floor(Math.random() * 100);
	    if(oreType2 >= 95){
		    diamond = diamond + (pulseLevel * 8);
    	}
    	if(oreType2 >= 76 && oreType2 < 95){
    		iron = iron + (pulseLevel * 8);
    	}
    	if(oreType2 < 76 && oreType2 >= 57){
			gold = gold + (pulseLevel * 8);
		}
		if(oreType2 < 57 && oreType2 >= 38){
			copper = copper + (pulseLevel * 8);
		}
		if(oreType2 < 38 && oreType2 >= 19){
			tin = tin + (pulseLevel * 8);
		}
		if(oreType2 < 19){
			lithium = lithium + (pulseLevel * 8);
		}
		refreshStats();
	}
}

function sellAll(){
	ironNum = iron;
	goldNum = gold;
	copperNum = copper;
	tinNum = tin;
	lithiumNum = lithium;
	diamondNum = diamond;
	for (a = 0; a < ironNum; a++){
		iron = iron - 1;
		money = money + ironPrice;
	}
	for (b = 0; b < goldNum; b++){
		gold = gold - 1;
		money = money + goldPrice;
	}
	for (c = 0; c < copperNum; c++){
		copper = copper - 1;
		money = money + copperPrice;
	}
	for (d = 0; d < tinNum; d++){
		tin = tin - 1;
		money = money + tinPrice;
	}
	for (e = 0; e < lithiumNum; e++){
		lithium = lithium - 1;
		money = money + lithiumPrice;
	}
	for (f = 0; f < diamondNum; f++){
		diamond = diamond - 1;
		money = money + diamondPrice;
	}
	ironNum = 0;
	goldNum = 0;
	copperNum = 0;
	tinNum = 0;
	lithiumNum = 0;
	diamondNum = 0;
    refreshStats();
}
function upgradePick(){
	if(money > pickCost){
		money = money - pickCost;
		if(orePerClick > 63){
		    orePerClick = orePerClick + 64;
		}
		if(orePerClick < 33){
		    orePerClick = orePerClick * 2;
		}
		pickCost = pickCost * 2;
		document.getElementById("orePerClick").innerHTML = orePerClick;
        document.getElementById("pickCost").innerHTML = pickCost;
		document.getElementById("money").innerHTML = money;
	}
}

function upgradeGen(){
	if(money > genCost){
		money = money - genCost;
		genLevel = genLevel + 1;
		genCost = Math.floor(genCost * 1.5);
		document.getElementById("genLevel").innerHTML = genLevel;
		document.getElementById("genCost").innerHTML = genCost;
		document.getElementById("money").innerHTML = money;
	}
}

function upgradeGen2(){
	if(money > gen2Cost){
		money = money - gen2Cost;
		gen2Level = gen2Level + 1;
		gen2Cost = Math.floor(gen2Cost * 1.5);
		document.getElementById("gen2Level").innerHTML = gen2Level;
		document.getElementById("gen2Cost").innerHTML = gen2Cost;
		document.getElementById("money").innerHTML = money;
	}
}

function upgradePulse(){
	if(money > pulseCost){
		money = money - pulseCost;
		pulseLevel = pulseLevel + 1;
		pulseCost = Math.floor(pulseCost * 1.5);
		document.getElementById("pulseLevel").innerHTML = pulseLevel;
		document.getElementById("pulseCost").innerHTML = pulseCost;
		document.getElementById("money").innerHTML = money;
	}
}

function upgradePulse2(){
	if(money > pulse2Cost){
		money = money - pulse2Cost;
		pulse2Level = pulse2Level + 1;
		pulse2Cost = Math.floor(pulse2Cost * 1.5);
		document.getElementById("pulse2Level").innerHTML = pulse2Level;
		document.getElementById("pulse2Cost").innerHTML = pulse2Cost;
		document.getElementById("money").innerHTML = money;
	}
}

function getEnergy(){
	energy = energy + (genLevel * 2);
	energy = energy + (gen2Level * 16);
	refreshStats();
}

function pulseMine2(){
	if(energy > (pulseLevel * 28)){
		energy = energy - (pulse2Level * 28);
	    oreType2 = Math.floor(Math.random() * 100);
	    if(oreType2 >= 95){
		    diamond = diamond + (pulse2Level * 64);
    	}
    	if(oreType2 >= 76 && oreType2 < 95){
    		iron = iron + (pulse2Level * 64);
    	}
    	if(oreType2 < 76 && oreType2 >= 57){
			gold = gold + (pulse2Level * 64);
		}
		if(oreType2 < 57 && oreType2 >= 38){
			copper = copper + (pulse2Level * 64);
		}
		if(oreType2 < 38 && oreType2 >= 19){
			tin = tin + (pulse2Level * 64);
		}
		if(oreType2 < 19){
			lithium = lithium + (pulse2Level * 64);
		}
		refreshStats();
	}
}

function winGame(){
	if (money >= 10000000){
		money -= 10000000;
		refreshStats();
		alert("Congratulations! You Have Won The Game!!!");
		alert("You Can Quit Now (HIGHLY Unadvisable), or you can carry on playing!");
	}
}

window.setInterval(function(){
	getEnergy();
    pulseMine();
	pulseMine2();
	refreshStats();
}, 1000);
