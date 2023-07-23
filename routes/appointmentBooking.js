const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');

// Create a new appointment
router.post('/appointment', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).send(appointment);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all appointments
router.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.send(appointments);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get an appointment by ID
router.get('/appointments/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).send();
    }
    res.send(appointment);
  } catch (error) {
    
    res.status(500).send(error);
  }
});

// Update an appointment by ID
router.patch('/appointments/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!appointment) {
      return res.status(404).send();
    }
    res.send(appointment);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete an appointment by ID
router.delete('/appointments/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).send();
    }
    res.send(appointment);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
