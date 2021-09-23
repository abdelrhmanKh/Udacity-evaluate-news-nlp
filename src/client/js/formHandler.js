const axios = require('axios')
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let URLText = document.getElementById('InputUrl').value
    if (Client.checkForText(URLText)) {
        axios.post(`http://localhost:${process.env.API_KEY || 8081}/result`, { URLText })
            .then(response => response.data)
            .then(data => {
                console.log(data)
                {/* <div id="text"></div>
            <div id="agreement"></div>
            <div id="subjectivity"></div>
            <div id="confidence"></div>
            <div id="irony"></div>
            <div id="score_tag"></div> */}

                let polarity = `Polarity: ${data.score_tag}`
                let subjectivity = `Subjectivity: ${data.subjectivity}`
                let agreement = `Agreement: ${data.agreement}`
                let confidence = `Confidence: ${data.confidence}`
                let irony = `Irony: ${data.irony}`

                document.getElementById('text').innerHTML = polarity

                document.getElementById('subjectivity').innerHTML = subjectivity

                document.getElementById('agreement').innerHTML = agreement

                document.getElementById('confidence').innerHTML = confidence

                document.getElementById('irony').innerHTML = irony
            })
    } else {
        alert("The URL " + URLText + " is not valid. Please enter a valid url.")
    }

}

export { handleSubmit }




