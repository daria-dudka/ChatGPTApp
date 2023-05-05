import express from 'express';
import { postAiAssist, postAiCode, postAiText } from '../controllers/openai.js';

const router = express.Router();

router.post('/text', postAiText);
router.post('/code', postAiCode);
router.post('/assist', postAiAssist);

export default router;
