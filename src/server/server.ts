import * as express from 'express';


const app = express();

app.use(express.static('src/client'))


app.listen(8080, () => console.log('Example app listening on port 8080!'))

app.get('/api', (req, res) => res.send('Got an API call!')) // test fjd jd