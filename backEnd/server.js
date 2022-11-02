import express from 'express';
import data from './data.js'

const app = express();

app.get('/api/shows', (req, res) => {
    res.send(data.shows);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`);
})