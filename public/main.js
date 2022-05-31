document.querySelector('.submit').addEventListener('click', horoscopeCheck)


function horoscopeCheck(e) {
    e.preventDefault()
    const month = document.querySelector('#month').value
    const day = document.querySelector('#day').value
    const url = `/horoscopeAPI/?month=${month}&day=${day}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

/*
function horoscopeTime() {
    const month = document.querySelector('#month').value
    const day = document.querySelector('#day').value

    if ((month === 'january') && (day >= 20 && day <= 31) || (month === 'february') && (day >= 1 && day <= 18)) {
        document.querySelector('#zodiacSign').innerText='Aquarius, Baby'
        document.querySelector('#signDescription').innerText='You\'re an air sign! You possess the following strengths: Progressive, original, independent, and humanitarian.'
        document.querySelector('#zodiacPic').src="aquarius.png"
        document.querySelector('.results').style.backgroundColor = "black"
        document.querySelector('.results').style.color = "#3c8488"
    } else if ((month === 'february') && (day >= 19 && day <= 29) || (month === 'march') && (day >= 1 && day <= 20)) {
        document.querySelector('#zodiacSign').innerText='Pisces, Time'
        document.querySelector('#signDescription').innerText='You\'re a water sign! You possess the following strengths: Compassionate, artistic, intuitive, gentle, and wise.'
        document.querySelector('#zodiacPic').src="pisces.png"
        document.querySelector('.results').style.backgroundColor = "black"
        document.querySelector('.results').style.color = "#31464b"
    } else if ((month === 'march') && (day >= 21 && day <= 31) || (month === 'april') && (day >= 1 && day <= 19)) {
        document.querySelector('#zodiacSign').innerText='You are an Aries, RAM RAM'
        document.querySelector('#signDescription').innerText='You\'re a fire sign! You possess the following strengths: Courageous, determined, confident, and enthusiastic.'
        document.querySelector('#zodiacPic').src="images/aries.png"
        document.querySelector('.results').style.backgroundColor = "black"
        document.querySelector('.results').style.color = "#aa1717"
    } else if ((month === 'april') && (day >= 20 && day <= 30) || (month === 'may') && (day >= 1 && day <= 20)) {
        document.querySelector('#zodiacSign').innerText='LOOK OUT FOR THE BULL, you\'re a Taurus like the creator...'
        document.querySelector('#signDescription').innerText='You\'re an earth sign! You possess the following strengths: Reliable, patient, practical, devoted, and responsible.'
        document.querySelector('#zodiacPic').src="images/taurus.png"
        document.querySelector('.results').style.backgroundColor = "black"
        document.querySelector('.results').style.color = "#4e853d"
    } else if ((month === 'may') && (day >= 21 && day <= 31) || (month === 'june') && (day >= 1 && day <= 20)) {
        document.querySelector('#zodiacSign').innerText='Double Trouble, you\'re a Gemini!'
        document.querySelector('#signDescription').innerText='You\'re an air sign! Your strengths are gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas.'
        document.querySelector('#zodiacPic').src="images/gemini.png"
        document.querySelector('.results').style.backgroundColor = "black"
        document.querySelector('.results').style.color = "#e9e9e9"
    } else if ((month === 'june') && (day >= 21 && day <= 30) || (month === 'july') && (day >= 1 && day <= 22)) {
        document.querySelector('#zodiacSign').innerText='Look out, this Cancer ain\'t crabby!'
        document.querySelector('#signDescription').innerText='You\'re a water sign! Your strengths are tenacious, highly imaginative, loyal, emotional, sympathetic, and persuasive.'
        document.querySelector('#zodiacPic').src="images/cancer.png"
        document.querySelector('.results').style.backgroundColor = "black"
        document.querySelector('.results').style.color = "#ffffc3"
    } else if ((month === 'july') && (day >= 23 && day <= 31) || (month === 'august') && (day >= 1 && day <= 22)) {
        document.querySelector('#zodiacSign').innerText='RAWR, Leo!'
        document.querySelector('#signDescription').innerText='You\'re a fire sign! Your strengths are creative, passionate, generous, warm-hearted, cheerful, and humorous.'
        document.querySelector('#zodiacPic').src="images/leo.png"
        document.querySelector('.results').style.backgroundColor = "black"
        document.querySelector('.results').style.color = "#cc3220"
    } else if ((month === 'august') && (day >= 23 && day <= 31) || (month === 'september') && (day >= 1 && day <= 22)) {
        document.querySelector('#zodiacSign').innerText='Oh hey Virgo'
        document.querySelector('#signDescription').innerText='You\'re an earth sign! Your strengths are loyal, analytical, kind, hardworking, and practical.'
        document.querySelector('#zodiacPic').src="images/virgo.png"
        document.querySelector('.results').style.backgroundColor = "black"
        document.querySelector('.results').style.color = "#e3b75a"
    } else if ((month === 'september') && (day >= 23 && day <= 30) || (month === 'october') && (day >= 1 && day <= 22)) {
        document.querySelector('#zodiacSign').innerText='Hi Libra!'
        document.querySelector('#signDescription').innerText='You\'re an air sign! Your strengths are cooperative, diplomatic, gracious, fair-minded, and social.'
        document.querySelector('#zodiacPic').src="images/libra.png"
        document.querySelector('.results').style.backgroundColor = "black"
        document.querySelector('.results').style.color = "#76a159"
    } else if ((month === 'october') && ( day >= 23 && day <= 31) || (month === 'november') && (day >= 1 && day <= 21)) {
        document.querySelector('#zodiacSign').innerText='Snap snap, Scorpio ~'
        document.querySelector('#signDescription').innerText='You\'re a water sign! Your strengths are resourceful, powerful, brave, passionate, and a true friend.'
        document.querySelector('#zodiacPic').src="images/scorpio.png"
        document.querySelector('.results').style.backgroundColor = "black"
        document.querySelector('.results').style.color = "#c7322f"
    } else if ((month === 'november') && (day >= 22 && day <= 30) || (month === 'december') && (day >= 1 && day <= 21)) {
        document.querySelector('#zodiacSign').innerText='SAGITTARIUS'
        document.querySelector('#signDescription').innerText='You\'re a fire sign! Your strengths are generous, idealistic, and a great sense of humor.'
        document.querySelector('#zodiacPic').src="images/sagittarius.png"
        document.querySelector('.results').style.backgroundColor = "black"
        document.querySelector('.results').style.color = "#c7322f"
    } else if ((month === 'december') && (day >= 22 && day <= 31) || (month === 'january') && (day >= 1 && day <= 19)) {
        document.querySelector('#zodiacSign').innerText='Looking good, Capricorn'
        document.querySelector('#signDescription').innerText='You\'re an earth sign! Your strengths are responsible, disciplined, self-control, and good managers.'
        document.querySelector('#zodiacPic').src="public/capricorn.png"
        document.querySelector('.results').style.backgroundColor = "black"
        document.querySelector('.results').style.color = "#c23931"
    } else {
        document.querySelector('#zodiacSign').innerText='invalid  entry'
        document.querySelector('#signDescription').innerText='Hmm, something doesn\'t seem right...Try typing that again. Make sure to type your month (word) and day (number)'
        document.querySelector('#zodiacPic').src="public/fish.png"
        document.querySelector('.results').style.backgroundColor = "lightblue"
    }
} 
*/