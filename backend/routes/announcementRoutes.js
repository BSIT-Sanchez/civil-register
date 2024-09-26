import express from 'express';
import multer from 'multer';
import { createAnnouncement, getAnnouncements, updateAnnouncement, deleteAnnouncement } from '../controllers/announcementController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/announcements', upload.single('image'), createAnnouncement);
router.get('/announcements', getAnnouncements);
router.put('/announcements/:id', upload.single('image'), updateAnnouncement);
router.delete('/announcements/:id', deleteAnnouncement);

export default router;
