import { Router } from "express";
import TestController from "../controller/testController.js";
import testController from "../controller/testController.js";

const router = new Router();

router.get('/',(req, res) => {
    res.send('hello world')
})

router.get('/author', testController.getFirst)


export default router
