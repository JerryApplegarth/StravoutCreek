// import data
import { username } from './data.js';
console.log(username);

// light and dark mode
const checkbox = document.getElementById('checkbox');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');

checkbox.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	h1.classList.toggle('dark');
	h2.classList.toggle('dark');
	h3.classList.toggle('dark');
});

// date and time
const displayTime = document.querySelector('.display-time');
// Time
function showTime() {
	let time = new Date();
	displayTime.innerText = time.toLocaleTimeString('en-US', { hour12: false });
	setTimeout(showTime, 1000);
}

showTime();

// Date
function updateDate() {
	let today = new Date();

	// return number
	let dayName = today.getDay(),
		dayNum = today.getDate(),
		month = today.getMonth(),
		year = today.getFullYear();

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const dayWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	// value -> ID of the html element
	const IDCollection = ['day', 'daynum', 'month', 'year'];
	// return value array with number as a index
	const val = [dayWeek[dayName], dayNum, months[month], year];
	for (let i = 0; i < IDCollection.length; i++) {
		document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
	}
}

updateDate();
