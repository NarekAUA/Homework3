const finalGrade = function(problemSets, quizzes, finalProject){
	return ((problemSets * 45) / 100) + ((quizzes * 30) / 100) + ((finalProject * 25) / 100);
}

const storyOfMyLife = function(){
	return "I think I failed the quiz"; 
}


const roomVolume = function(height, length, width){
	console.log (height * length * width);
}

const fullName = function(firstName, lastName){
	return firstName + " " + lastName;
}

const myAwesomeFunc = function(str1, str2, str3){
	if (str1.length > str2.length && str1.length > str3.length) {
		return str1;
	}
	if (str2.length > str1.length && str2.length > str3.length) {
		return str2;
	}
	if (str3.length > str1.length && str3.length > str2.length) {
		return str3;
	}
}

const comparator = function(num1, num2){
	if (num1 === num2) {
		return 0;
	}
	if (num1 > num2) {
		return 1;
	}
	if (num1 < num2) {
		return -1;
	}
}

const isTruethy = function(argum1, argum2, argum3) {
	return argum1 || argum2 || argum3 || false;
}