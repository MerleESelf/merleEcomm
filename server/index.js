const morgan = require('morgan')
const express = require('express');
const path = require('path')

const PORT = 8080;
const app = express();

app.use(morgan("tiny"));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// app.get('/', (req, res)=>{
//   res.send('Hello World')
// })


// sends index.html
app.use('*', (req, res) => {
  console.log("DIR NAME HERE",__dirname)
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  
})

// auth and api routes
app.use('/auth', require('./auth'))
app.use('/api', require('./api'))


// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});