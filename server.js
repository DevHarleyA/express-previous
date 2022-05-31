const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const configDB = require('./config/config.js')

MongoClient.connect(configDB.connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('horoscope')
        const repsCollection = db.collection('reps')

        app.set('view engine', 'ejs')
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())
        app.use(express.static('public'))

        app.get('/', (req, res) => {
            repsCollection.find().toArray()
            .then(results => {
                res.render('index.ejs', {reps: results})
            })
            .catch(err => console.error(err))
        })

        // no ejs involved with the API
        // good idea to test by going to this url, confirm backend is working before you connect to the front end
        app.get('/horoscopeAPI', (req, res) => {
            console.log(req.query.month, req.query.day)
            const zodiacResult = horoscopeTime(req.query.month, parseInt(req.query.day))
            res.send(zodiacResult) // sending it to the browser
            console.log(zodiacResult)
        })

        app.post('/reps', (req, res) => {
            repsCollection.insertOne({team: req.body.team, message: req.body.message, rep: 0}, (err, result) => {
                if (err) return console.log(err)
                console.log('saved to database')
                res.redirect('/')
            })
        })

        app.listen(2800, function() {
            console.log('listening on 2800')
        })
})
.catch(console.error)


// separation of concerns => creating something that is general and can be used elsewhere, not tied to a particular project.
// ie. people can use this for the results and description, but the design and user interface changes are no longer hard coded.
function horoscopeTime(month, day) {
    let sign = null // assigning as null since it will reassigned
    let desc = null
    if ((month === 'january') && (day >= 20 && day <= 31) || (month === 'february') && (day >= 1 && day <= 18)) {
        sign = 'Aquarius'
        // make it general and let front-end design the quirkyness
        // to link photos => with temp lit or concat in front end, dont need to write repetitive if statements
        desc = 'You\'re an air sign! You possess the following strengths: Progressive, original, independent, and humanitarian.'
    } else if ((month === 'february') && (day >= 19 && day <= 29) || (month === 'march') && (day >= 1 && day <= 20)) {
        sign = 'Pisces'
        desc = 'You\'re a water sign! You possess the following strengths: Compassionate, artistic, intuitive, gentle, and wise.'
    } else if ((month === 'march') && (day >= 21 && day <= 31) || (month === 'april') && (day >= 1 && day <= 19)) {
        sign = 'Aries'
        desc = 'You\'re a fire sign! You possess the following strengths: Courageous, determined, confident, and enthusiastic.'
    } else if ((month === 'april') && (day >= 20 && day <= 30) || (month === 'may') && (day >= 1 && day <= 20)) {
        sign = 'Taurus'
        desc = 'You\'re an earth sign! You possess the following strengths: Reliable, patient, practical, devoted, and responsible.'
    } else if ((month === 'may') && (day >= 21 && day <= 31) || (month === 'june') && (day >= 1 && day <= 20)) {
        sign = 'Gemini'
        desc = 'You\'re an air sign! Your strengths are gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas.'
    } else if ((month === 'june') && (day >= 21 && day <= 30) || (month === 'july') && (day >= 1 && day <= 22)) {
        sign = 'Cancer'
        desc = 'You\'re a water sign! Your strengths are tenacious, highly imaginative, loyal, emotional, sympathetic, and persuasive.'
    } else if ((month === 'july') && (day >= 23 && day <= 31) || (month === 'august') && (day >= 1 && day <= 22)) {
        sign = 'Leo'
        desc = 'You\'re a fire sign! Your strengths are creative, passionate, generous, warm-hearted, cheerful, and humorous.'
    } else if ((month === 'august') && (day >= 23 && day <= 31) || (month === 'september') && (day >= 1 && day <= 22)) {
        sign = 'Virgo'
        desc = 'You\'re an earth sign! Your strengths are loyal, analytical, kind, hardworking, and practical.'
    } else if ((month === 'september') && (day >= 23 && day <= 30) || (month === 'october') && (day >= 1 && day <= 22)) {
        sign = 'Libra'
        desc = 'You\'re an air sign! Your strengths are cooperative, diplomatic, gracious, fair-minded, and social.'
    } else if ((month === 'october') && ( day >= 23 && day <= 31) || (month === 'november') && (day >= 1 && day <= 21)) {
        sign = 'Scorpio'
        desc = 'You\'re a water sign! Your strengths are resourceful, powerful, brave, passionate, and a true friend.'
    } else if ((month === 'november') && (day >= 22 && day <= 30) || (month === 'december') && (day >= 1 && day <= 21)) {
        sign = 'Sagittarius'
        desc = 'You\'re a fire sign! Your strengths are generous, idealistic, and a great sense of humor.'
    } else if ((month === 'december') && (day >= 22 && day <= 31) || (month === 'january') && (day >= 1 && day <= 19)) {
        sign = 'Capricorn'
        desc = 'You\'re an earth sign! Your strengths are responsible, disciplined, self-control, and good managers.'
    } else {
        sign = 'invalid  entry'
        desc = 'Hmm, something doesn\'t seem right...Try typing that again. Make sure to type your month (word) and day (number)'
    }

    return {sign, desc}
}