const express = require('express');
const bodyParser = require('body-parser')
const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const { exercise } = new PrismaClient();

router.use(bodyParser.json());

//GET ALL
router.get('/', async (req, res) => {
    const exercises = await exercise.findMany({
        select: { exercise_name: true, category: true }
    });
    res.json(exercises);
});

//GET ONE
router.get("/:id", async (req, res) => {
    const { id } = req.params
    const one_exercise = await exercise.findMany({
        select: { exercise_name: true, category: true },
        where: { exercise_id : parseInt(id)}
    });
    res.json(one_exercise);
});


//POST ONE
router.use(bodyParser.json());
router.post('/', async(req, res) => {
    const category_id = req.body.category_id
    const category_name = req.body.category.category_name
    const exercise_name = req.body.exercise_name

    const new_exercise = await exercise.create({
        data: { exercise_name,
             category:  {
                 connectOrCreate: {
                     where: {
                         category_id
                     },
                     create: {
                         category_id,
                         category_name: category_name
                     }
                 }
             }
            
        }
        
    });
    res.json(new_exercise);
});


//UPDATE 
router.use(bodyParser.json());
router.put('/:id', async(req, res) => {
    const { id } = req.params
    const category_id = req.body.category_id
    const category_name = req.body.category.category_name
    const exercise_name = req.body.exercise_name

    const updated_exercise = await exercise.update({
        where: { exercise_id : parseInt(id)},
        data: { exercise_name,
             category:  {
                 connectOrCreate: {
                     where: {
                         category_id
                     },
                     create: {
                         category_id,
                         category_name: category_name
                     }
                 }
             }
            
        }
        
    });
    res.json(updated_exercise);
});

//DELETE
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const exists = await exercise.findUnique({
        select: {
            exercise_id: true, exercise_name: true
        }, where: {
            exercise_id: parseInt(id)
        }
    });

    if(exists) {
        const deleteUser = await exercise.delete({
            where: { exercise_id: parseInt(id) }
        });
        res.sendStatus(200);
    }  else {
        res.sendStatus(404);
    }
});


module.exports = router;