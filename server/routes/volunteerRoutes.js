import express from 'express';
import {registerVolunteer, getVolunteers} from '../controllers/volunteerController.js';
const router =  express.Router();
router.post("/", registerVolunteer);
router.get("/", getVolunteers);
export default router;