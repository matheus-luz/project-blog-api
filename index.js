require('dotenv').config();
const express = require('express');
const { userRouter } = require('./routes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);

app.listen(PORT, () => console.log('ouvindo porta 3000!'));
