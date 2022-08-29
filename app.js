const express = require('express')
const app = express()
const port = 3000


const data = [{
  "name": "John",
  "stars": 1,
},
{
  "name": "Johnphon",
  "stars": 2,
},{
  "name": "kon",
  "stars": 3,
},{
  "name": "Doe",
  "stars": 4,
},{
  "name": "solth",
  "stars": 5,
},
]

app.get('/', (req, res , next) => {
  res.send('Hello World!');
  next();
})

app.use('/' , (req, res, next) => {
  console.log("suecess");
});
app.get('/:name', (req, res) => {
  const requireddata = data.filter((item) => item.name === req.params.name);

  requireddata.length !=0 ? res.send(`${requireddata[0].stars}`) : res.send('No data found');

  // we need to send the string in the response
  // if we send the number as response it takse the numer as a status code
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})