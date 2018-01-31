import * as express from 'express';

console.log('Starting up Express...');

const app = express();

app.use(express.static('src/client'));


app.listen(8080, () => console.log('Example app listening on port 8080!'));

app.get('/api', (req, res) => {
    res.send('Hello from the Server (NodeJS)');
});
