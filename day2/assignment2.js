let challenge = '30 Days Of JavaScript';// question1
console.log(challenge); //question2
console.log(challenge.length); // question3
console.log(challenge.toUpperCase()); // question4
console.log(challenge.toLowerCase()); //question5
console.log(challenge.substr(11,10)); // question6 
console.log(challenge.substring(11)); // question6
console.log(" line 8 "+challenge);

console.log(challenge.includes("of")); //question8
console.log(challenge.split(' '));  // question9

for(var i=1; i<5; i++){
	var array = [];
	array.push(i);
	for(var p=0; p<5; p++){
		array.push(Math.pow(p,i)); 
	}
	console.log(array);           // question11
}


