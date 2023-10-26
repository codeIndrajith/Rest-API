import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/users.js';

import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

// the common way (json format) to exchange data request and response in rest api
app.use(bodyParser.json());
app.use('/users', userRoutes);

app.listen(PORT, () => console.log(`app listen on http://localhost:${PORT}`));

app.get('/', (req, res) => {
  res.send('Hello home page');
});

app.get('/users', userRoute);
