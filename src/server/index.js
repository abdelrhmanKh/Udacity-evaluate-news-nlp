
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const cors = require('cors')
const bodyParser = require('body-parser');
const axios = require('axios')
dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'))

const mainURl = "https://api.meaningcloud.com/sentiment-2.1?";
var textapi = process.env.API_KEY;

console.log(__dirname);
console.log(`Your API key is ${textapi}`);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/result', (req, res) => {
    let url = req.body.URLText;
    console.log(url)
    const APIURL = `${mainURl}key=${textapi}&url=${url}&lang=en`;
    console.log(APIURL)
    axios.post(APIURL)
        .then((result) => {
            res.send(result.data)
            console.log(result.data);
        })
})
app.listen(8081, () => {
    console.log('Example app listening on port 8081!')
})
