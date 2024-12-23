import express from "express"
import {getrecommendation} from '../controller/aiController.js'


const router = express.Router();

router.get('/',getrecommendation);


export default router


