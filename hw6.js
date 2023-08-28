//Задание 6
let arr = [21, 21, 21, 12, 21, 21];
for (i=0, c=0; i<arr.length; i++) {
	if (arr[i] === arr[0]) {
		c++;
	}
}
console.log(c === arr.length);