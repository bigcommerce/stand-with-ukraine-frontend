import express from 'express';
import apiMocker from 'connect-api-mocker';

const port = 9000;
const app = express();

app.use('/api', apiMocker('mocks'));

console.log(`Mock API Server is up and running at: http://localhost:${port}`);
app.listen(port);
