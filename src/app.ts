// const app: Application = express()
import express, { Application, Request, Response } from 'express';

// const port: number = 3001
const app: Application = express();

// app.get('/toto', (req: Request, res: Response) => {
//     res.send('Hello toto')
// })
const port: number = 3001;

// app.listen(port, function () {
//     console.log(`App is listening on port ${port} !`)
// })
app.get('/toto', (req: Request, res: Response) => { 
    res.send('Hello toto'); 
  });
  
  app.listen(port, () => {
    console.log(`App is listening on port ${port} !`); 
  });