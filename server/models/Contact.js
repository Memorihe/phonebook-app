const mongoose = require('mongoose')

const {Schema} = mongoose

const  contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        minlength: 7,
        required: true
    }
})

contactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact
