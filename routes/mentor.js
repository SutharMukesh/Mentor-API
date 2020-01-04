/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const express = require('express');
const Mentor = require('../models/mentor');

const mentorroute = express.Router();

// Get All mentor details for homepage
mentorroute.get('/', async (req, res) => {
  try {
    logger.info(`Mentor/: Get all mentors for home page`);
    let mentors = await Mentor.find({});
    res.status(200).send(mentors);
  } catch (error) {
    logger.error(`Mentor/: Error while finding mentors: ${((error.stack) ? error.stack : error)}`);
    res.status(400).send({message:`Error while finding mentors: ${error}`});
  }
});

// Add new Mentor
mentorroute.post('/add', async (req, res) => {
  try {
      logger.info(`Mentor/add: Adding Mentor ${JSON.stringify(req.body)}`);
      newmentor = new Mentor(req.body);
      result = await newmentor.save();
      res.status(200).send({message:'Added Mentor successfully'});
    
  } catch (error) {
    logger.error(`Mentor/add: Error while inserting Mentor: ${((error.stack) ? error.stack : error)}`);
    res.status(401).send({message:`Error while inserting Mentor: ${error}`});
  }
});

// Edit a mentor
mentorroute.post('/update/:id', async (req, res) => {
  try {
    console.log(req.params.id)
      logger.info(`Mentor/update: Updating Mentor ${JSON.stringify(req.body)}`);
      await Mentor.updateOne({ _id: req.params.id }, req.body, { runValidators: true });
      res.status(200).send({message:'Mentor details updated'});
  } catch (error) {
    logger.error(`Mentor/update: Error while updating Mentor: ${((error.stack) ? error.stack : error)}`);
    res.status(400).send({message:`Error while updating mentor: ${error}`});
  }
});

// Delete a mentor
mentorroute.delete('/:id', async (req, res) => {
  // Only Supervisor can delete a product
  try {
      logger.info(`Mentor/delete: Deleting Mentor id: ${req.params.id}`);
      result = await Mentor.deleteOne({ _id: req.params.id });
      res.status(200).send({message:`delete mentor details: ${JSON.stringify(result)}`});
  } catch (error) {
    logger.error(`Mentor/delete: Error while deleting mentor: ${((error.stack) ? error.stack : error)}`);
    res.status(400).send({message:`Error while deleting: ${error}`});
  }
});

module.exports = mentorroute;
