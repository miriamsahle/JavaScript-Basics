// dates & times
const before = new Date('February 1 2019 7:30:59');
const now = new Date();
const diff = now.getTime() - before.getTime();

console.log(now);
console.log(typeof now);

// year, months, day, times
console.log('getFullYear: ', now.getFullYear());
console.log('getMonth: ', now.getMonth());
console.log('getDate: ', now.getDate());
console.log('getDay: ', now.getDay());
console.log('getHours: ', now.getHours());
console.log('getMinutes: ', now.getMinutes());
console.log('getSeconds: ', now.getSeconds());

// timestamps
console.log('timestamp:', now.getTime());
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);

console.log(`the blog was written ${days} days ago`);
 
// converting timestamps into date objects
const timestamp = 167593384745990;
console.log(new Date(timestamp));

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

// Date-fns library
// returns a boolean
//formattinf options
console.log(dateFns.isToday(now));
console.log(dateFns.format(now, 'YYYY')); //console the year
console.log(dateFns.format(now, 'MMMM')); //console the month
console.log(dateFns.format(now, 'dddd')); //console the day
console.log(dateFns.format(now, 'do')); //console the date
console.log(dateFns.format(now, 'dddd do MMMM YYYY')); //console the whole date

//comparing dates 
console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));
