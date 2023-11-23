function firstWord(s) {
  // your code here
	if(s==="" || s.trin()===""){
		return ""
	}
	s=s.trim();
	let a = s.split(" ");
	return a[0]
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
