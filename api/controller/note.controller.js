const express = require('express')
const router = express.Router();
const Note = require('../model/notes.model')

router.post('/', async (req, res) => {
    const {title, description} = req.body;

    try{
        const response = await Note.create({
            title,
            description
        })

        res.status(200).json(response)
    }
    catch(err){
        res.status(400).json(err)
    }
})

module.exports = router;


router.delete('/:id', async(req, res) => {
    try{
        const note = await Note.findById(req.params.id)

        try{
            await note.deleteOne();
            res.status(200).json('Note has been deleted!')
        }
        catch(err){
            res.status(401).json(err)
        }
    }
    catch(err){
        res.status(400).json(err);
    }
})


router.put('/:id', async(req,res) => {
    try{
        await Note.findById(req.params.id);
        try{
            const updateNote = await Note.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },{
                new: true
            });

            res.status(200).json('updated post')
        }
        catch(err){
            res.status(401).json('not updated!')
        }
    }
    catch(err){
        res.status(400).json(err)
    }
})