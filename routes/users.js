
import express from 'express'

const router = express.Router();

router.get('/users' , (req , res) => {
    res.send("hello users file")
})

export default router;