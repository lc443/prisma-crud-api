const express = require('express');
const bodyParser = require('body-parser')
const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const { workout } = new PrismaClient();

router.use(bodyParser.json());
router.get('/', async(req, res) => {
    const workouts = await workout.findMany({
        select: {
            workout_title: true, workout_description: true, workout_id: true
        }
    });
    res.json(workouts)
});

router.get('/:id', async(req, res) => {
    const { id } = req.params;

    const oneWorkout = await workout.findMany({
        select: {
            workout_title: true, workout_description: true, workout_id: true
        },
        where: {
            workout_id: parseInt(id)
        }
    });
    res.json(oneWorkout)
});

//POST WORKOUTS
router.post('/', async (req, res) => {
    const { workout_title, workout_description } = req.body

    const workout = await workout.create({
        data: { workout_title, workout_description }
    });

    res.json(workout);
});


//Update WORKOUTS
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { workout_title, workout_description } = req.body

    const update_workout = await workout.update({
        data: { workout_title, workout_description },
        where: { workout_id: parseInt(id)}
        
    });

    res.json(update_workout);
});

//CREATE WORKOUT BASED ON CATEGORY NAME
module.exports = router