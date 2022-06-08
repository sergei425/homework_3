const http = require('http');
const {key} = require('./config')

const url = 'http://api.weatherstack.com/current';

const city = process.argv.slice(2)[0];

http.get(`${url}?access_key=${key}&query=${city}`, res => {
  
  let data = '';
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  console.log('Status Code:', res.statusCode);
  console.log('Date in Response header:', headerDate);

  res.on('data', chunk => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('Response ended: ');
    console.log(data);
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});

