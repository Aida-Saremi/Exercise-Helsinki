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
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
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


app.post('/api/persons', (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({ error: 'Name and number are required' });
  }

  const newPerson = {
    id: generateId(), // Use a function to generate a new ID
    name: body.name,
    number: body.number,
  };

  persons = persons.concat(newPerson);
  response.json(newPerson);
});

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((p) => p.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).send('Not Found');
  }
});
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((p) => p.id !== id);

  response.status(204).end(); // 204 successful delete requests
});
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

function generateId() {
  return Math.floor(Math.random() * 1000000);
}