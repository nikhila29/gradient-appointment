const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: /^[a-zA-Z ]+$/,
  },
  phoneNumber: {
    type: String,
    required: true,
    match: /^\d{10}$/,
  },
  doctorName: {
    type: String,
    required: true,
    match: [/^Dr\. [a-zA-Z ]+$/, "Doctor name should start with 'Dr.' and contain only alphabetic characters and spaces"],
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other'],
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['Consult', 'Revisit'],
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);


module.exports = Appointment;
