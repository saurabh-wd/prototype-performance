function f1(){
	this.print = function(){
		console.log("calling print");
	}
}

var objects = [];

console.time('x');

for(let i=0;i<10000;i++){
	objects.push(new f1());
}

console.timeEnd('x');