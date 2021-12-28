const express = require('express');
const bodyParser = require('body-parser')
const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const { category } = new PrismaClient();

router.use(bodyParser.json());

router.get('/', async(req, res) => {
    const categories = await category.findMany({
        select: {
            category_id: true, category_name: true
        }
    });
    res.json(categories)
})
module.exports = router