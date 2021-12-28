const express = require('express');
const bodyParser = require('body-parser')
const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const { workout } = new PrismaClient();

router.use(bodyParser.json());
router.get('/', async(req, res) => {
    const workouts = await workout.findMany({
        select: {
            workout_id: true,  workout_title: true, workout_description: true, createdAt: true, updateAt: true, exercises: true
        }
    });
    res.json(workouts)
});

router.get('/:id', async(req, res) => {
    const { id } = req.params;

    const oneWorkout = await workout.findMany({
        select: {
            workout_id: true,  workout_title: true, workout_description: true, createdAt: true, updateAt: true, exercises: true
        },
        where: {
            workout_id: parseInt(id)
        }
    });
    res.json(oneWorkout)
});

//POST WORKOUTS
router.post('/', async (req, res) => {
    const { workout_title, workout_description, user_id } = req.body

    const newWorkout = await workout.create({
        data: { workout_title, workout_description , user_id}
    });

    res.json(newWorkout);
});


//Update WORKOUTS
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { workout_title, workout_description, user_id } = req.body

    const update_workout = await workout.update({
        data: { workout_title, workout_description, user_id },
        where: { workout_id: parseInt(id)}
        
    });

    res.json(update_workout);
});

//DELETE WORKOUT
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteWorkout = await workout.delete({
            where: {
                workout_id: parseInt(id)
            }
        });
        res.send('Deleted!!');
    } catch (error) {
        console.error(error.message)
        res.send('Does not exist with this id')
    }
});
module.exports = router