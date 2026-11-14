import express from 'express';
import { createLead, getAllLeads } from '../controllers/leadController.js';

const router = express.Router();

router.post('/', createLead);
router.get('/', getAllLeads);

export default router;
