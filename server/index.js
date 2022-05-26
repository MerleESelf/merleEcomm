const morgan = require('morgan')
const express = require('express');

const PORT = 3001;
const app = express();

app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.send({ message: 'Hello from Express!' });
})

// auth and api routes
// app.use('/auth', require('./auth'))
app.use('/api', require('./api'))


// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

// const init = async () => {
//   try {
//     await db.sync();
//     app.listen(PORT, () => {
//       console.log(`Fucking yo gurl over on PORT: ${PORT}`);
//     });
//   } catch (err) {}
// };

// init();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});