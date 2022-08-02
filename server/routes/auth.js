import express from 'express';
const router = express.Router();
import { showMessage, register, login } from '../controllers/auth'


router.get('/:message', showMessage);
router.post('/register', register);
router.post('/login', login);

module.exports = router;