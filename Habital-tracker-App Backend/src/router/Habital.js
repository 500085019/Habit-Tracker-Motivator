import express from express
import {createHabit , getHabit, deleteHabit, updateHabit} from '../controller/habitController.js'

const router = express.router();


router.post('/',createHabit);

router.get('/',getHabit);

router.delete('/:id',deleteHabit);

router.put('/:id',updateHabit);




export default router