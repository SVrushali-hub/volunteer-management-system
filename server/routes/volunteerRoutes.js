import express from 'express';
import {registerVolunteer, getVolunteers, deleteVolunteer, approveVolunteer, rejectVolunteer} from '../controllers/volunteerController.js';
const router =  express.Router();
router.post("/", registerVolunteer);
router.get("/", getVolunteers);
router.delete("/:id", deleteVolunteer);
router.put("/:id/approve", approveVolunteer);
router.put("/:id/reject", rejectVolunteer);
export default router;