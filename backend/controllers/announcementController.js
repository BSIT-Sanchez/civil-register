import cloudinary from '../config/cloudinaryConfig.js';
import Announcement from '../models/announcementModel.js';
import fs from 'fs';

// Create Announcement
export const createAnnouncement = async (req, res) => {
  try {
    const { title, description, postedBy } = req.body;

    let imageUrl = null;
    if (req.file) {
      const result = await cloudinary.v2.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
      fs.unlinkSync(req.file.path); // Clean up temporary file
    }

    const newAnnouncement = new Announcement({
      title,
      description,
      postedBy,
      image: imageUrl,
    });

    await newAnnouncement.save();
    res.status(201).json({ message: 'Announcement created successfully!', announcement: newAnnouncement });
  } catch (error) {
    console.error('Error creating announcement:', error.message, error.stack);
    res.status(500).json({ message: 'Failed to create announcement.' });
  }
};

// Get All Announcements
export const getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.status(200).json({ announcements });
  } catch (error) {
    console.error('Error fetching announcements:', error.message, error.stack);
    res.status(500).json({ message: 'Failed to fetch announcements.' });
  }
};

// Update Announcement
export const updateAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, postedBy } = req.body;

    const updateData = { title, description, postedBy };
    if (req.file) {
      const result = await cloudinary.v2.uploader.upload(req.file.path);
      updateData.image = result.secure_url;
      fs.unlinkSync(req.file.path); // Clean up temporary file
    }

    const updatedAnnouncement = await Announcement.findByIdAndUpdate(id, updateData, { new: true });
    res.status(200).json({ message: 'Announcement updated successfully!', announcement: updatedAnnouncement });
  } catch (error) {
    console.error('Error updating announcement:', error.message, error.stack);
    res.status(500).json({ message: 'Failed to update announcement.' });
  }
};

// Delete Announcement
export const deleteAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    await Announcement.findByIdAndDelete(id);
    res.status(200).json({ message: 'Announcement deleted successfully!' });
  } catch (error) {
    console.error('Error deleting announcement:', error.message, error.stack);
    res.status(500).json({ message: 'Failed to delete announcement.' });
  }
};
