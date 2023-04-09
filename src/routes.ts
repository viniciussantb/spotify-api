import { Router } from "express";

const router = Router();

router.get('/spotify', (req, res) => {
    res.status(200).send('HelloWorld');
});

export default router;