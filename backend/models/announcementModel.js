import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  postedBy: { type: String, required: true },
  image: { type: String },
}, { timestamps: true });

const Announcement = mongoose.model('Announcement', announcementSchema);

export default Announcement;
