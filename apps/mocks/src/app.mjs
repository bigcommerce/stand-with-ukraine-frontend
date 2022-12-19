import express from 'express';
import apiMocker from 'connect-api-mocker';

const port = 9000;
const hostname = 'localhost';
const testToken = 'test.test.test';

const app = express();
app.use('/*', (req, res, next) => {
  if (req.headers.authorization === `Bearer ${testToken}`) {
    next();
  } else {
    res.status(401).json({
      errors: [
        {
          message: 'Unauthorized',
        },
      ],
    });
  }
});
app.use('/api', apiMocker('tmp'));

app.listen(port, hostname, () => {
  console.log(`Mock API Server is up and running at: http://${hostname}:${port}`);
});
