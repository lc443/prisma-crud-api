const router = require('express').Router();
const bodyParser = require('body-parser');

const { PrismaClient } = require('@prisma/client');
const { route } = require('./categories');

const { user } = new PrismaClient();


router.use(bodyParser.json());
//GET USERS
router.get('/', async(req, res) => {
    const users = await user.findMany({
        select: {
            first_name: true, last_name: true, username: true, password: true, email: true, role: true, workouts: true
        }
    });
    res.json(users);
});

//GET ONE
router.get('/:id', async (req, res) => {
   
    const {id}  = req.params;
    const getUser = await user.findMany({
        where: {
            user_id: parseInt(id)
        },
        select: {
            username: true, password: true, first_name: true, last_name: true, email: true, role: true,
            workouts: true
        }
    });

    res.json(getUser);
});

//POST USERS
router.post('/', async (req, res) => {
    const { username, first_name, last_name, password, email } = req.body

    const newUser = await user.create({
        data: { username, first_name, last_name, password, email }
    });
    res.json(newUser);
});


//UDATE USER
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { username, first_name, last_name, password, email } = req.body

    const newUser = await user.update({

        data: { username, first_name, last_name, password, email },
        where: {
            user_id: parseInt(id)
        }
    });
    res.json(newUser);
});

module.exports = router

//DELETE USER
router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params;
    const deleteUser = await user.delete({
        where: {
            user_id: parseInt(id)
        }
    });

    res.json("deleted!");

    } catch(err) {
        console.error(err.message);
        res.send('Does not Exists');
    }
    
});



