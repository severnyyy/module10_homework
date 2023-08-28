//Задание 8
let langs = new Map();
langs.set('en', 'english');
langs.set('ru', 'russian');
for (let [key, value] of langs) {
	console.log( `Ключ - ${key}, Значение - ${value}`)
}
