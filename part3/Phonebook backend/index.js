const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    
        { 
          "id": 1,
          "name": "Arto Hellas", 
          "number": "040-123456"
        },
        { 
          "id": 2,
          "name": "Ada Lovelace", 
          "number": "39-44-5323523"
        }
    ]
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  const date = new Date();
  const entriesCount = persons.length;

  const infoMessage = `
    <p>Phonebook has info for ${entriesCount} people</p>
    <p>${date}</p>
  `;

  response.send(infoMessage);
});
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.post('/api/persons', (request, response) => {
  const person = request.body
  console.log(persons)
  response.json(persons)
})