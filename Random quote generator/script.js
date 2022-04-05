// Dark/light mode
document.getElementById('mode').addEventListener('click', function() {
    document.body.classList.toggle('dark')
})

const authorarea = document.getElementById('author-name')
const quotearea = document.getElementById('quote-content')

// Copy
document.getElementById('copy').addEventListener('click', function() {
    
    navigator.clipboard.writeText(quotearea.textContent)
})

// Change quote and get from api
const api = 'http://api.quotable.io/'
const generatorBtn = document.getElementById('new-quote')
generatorBtn.addEventListener('click', function() {

    generatorBtn.textContent = 'Searching...'
    generatorBtn.classList.add('searching')

    fetch(api + 'random')
    .then(res => res.json())
    .then(result => {
        quotearea.textContent = result.content;
        authorarea.textContent = result.author;
        generatorBtn.classList.remove('searching')
        generatorBtn.textContent = 'New quote'
    })
})
generatorBtn.click()