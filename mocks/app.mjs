import express from 'express';
import apiMocker from 'connect-api-mocker';

const port = 9000;
const hostname = 'localhost';

const app = express();
app.use('/api', apiMocker('mocks'));

app.listen(port, hostname, () => {
  console.log(
    `Mock API Server is up and running at: http://${hostname}:${port}`
  );
});
