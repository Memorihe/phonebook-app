require('dotenv').config()
require('./database')

const express = require('express')
const cors = require('cors')
const Contact = require('./models/Contact')
const notFound = require('./middlewares/notFound')
const handleErrors = require('./middlewares/handleErrors')
const app = express()
const path = require('path')

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'build')))

app.get('/api/contacts', (request, response, next) => {
  Contact.find({})
    .then((res) => response.json(res))
    .catch((err) => next(err))
})

app.post('/api/contacts', (request, response, next) => {
  const body = request.body

  const contact = new Contact(body)
  contact
    .save()
    .then((res) => response.json(res))
    .catch((err) => next(err))
})

app.get('/api/contacts/:id', (request, response, next) => {
  const { id } = request.params
  Contact.findById(id)
    .then((res) => response.json(res))
    .catch((err) => next(err))
})

app.delete('/api/contacts/:id', (request, response, next) => {
  const { id } = request.params
  Contact.findByIdAndDelete(id)
    .then(() => response.status(200).end())
    .catch((err) => next(err))
})

app.put('/api/contacts/:id', (request, response, next) => {
  const { id } = request.params
  const contact = request.body
  if (!contact.name || !contact.number) response.status(400).end()

  const newContactInfo = {
    name: contact.name,
    number: contact.number
  }

  Contact.findByIdAndUpdate(id, newContactInfo, { new: true })
    .then((res) => response.json(res))
    .catch((err) => next(err))
})

app.use(notFound)
app.use(handleErrors)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server runnig on port ${PORT}`))
