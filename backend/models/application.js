const mongoose=require('mongoose')
const ApplicationSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    shiftDate: {
        month: String,
        day: String,
        year: String
    },
    address: {
        street1: String,
        street2: String,
        city: String,
        state: String
    },
    contact: {
        email: String,
        phone: String,
        linkedin: String
    },
    jobDetails: {
        position: String,
        hearAboutUs: String,
        startDate: Date
    },
    resumePath: String,
    coverLetter: String,
    applicationDate: {
        type: Date,
        default: Date.now
    }
});

const Application = mongoose.model('Application', ApplicationSchema);

module.exports= Application;
