//Задание 2
let x;
switch (typeof(x)) {
	case 'number':
	console.log('X - число');
	break;
	case 'string':
	console.log('X - строка');
	break;
	case 'boolean':
	console.log('X - логическая переменная');
	break;
	default:
	console.log('Тип х не определен');
}