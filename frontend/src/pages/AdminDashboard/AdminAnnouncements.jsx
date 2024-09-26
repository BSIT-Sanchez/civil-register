import { useState, useEffect } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import AdminLayout from '../../layout/AdminLayout';
import { toast } from 'react-toastify';

const AdminAnnouncements = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  const [announcements, setAnnouncements] = useState([]);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAnnouncements = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/announcements');
      const data = await response.json();
      if (response.ok) {
        setAnnouncements(data.announcements);
      } else {
        console.error(data.message);
        setError(data.message);
      }
    } catch (error) {
      console.error('Error fetching announcements:', error);
      setError('Failed to fetch announcements.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDivClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleModalToggle = (index) => {
    setActiveModalIndex(activeModalIndex === index ? null : index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', e.target.title.value);
    formData.append('description', e.target.description.value);
    formData.append('postedBy', e.target.postedBy.value);

    if (imagePreview) formData.append('image', document.querySelector('#fileInput').files[0]);

    try {
      const response = await fetch('http://localhost:5000/api/announcements', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (response.ok) {
        toast.success(result.message);
        fetchAnnouncements();
        setImagePreview(null);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while creating the announcement.');
    }
  };

  const handleEditClick = (announcement) => {
    setEditingAnnouncement(announcement);
    setImagePreview(announcement.image);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', e.target.title.value);
    formData.append('description', e.target.description.value);
    formData.append('postedBy', e.target.postedBy.value);

    if (imagePreview) formData.append('image', document.querySelector('#fileInput').files[0]);

    try {
      const response = await fetch(`http://localhost:5000/api/announcements/${editingAnnouncement._id}`, {
        method: 'PUT',
        body: formData,
      });
      const result = await response.json();
      if (response.ok) {
        toast.success(result.message);
        setEditingAnnouncement(null);
        fetchAnnouncements();
        setImagePreview(null);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while updating the announcement.');
    }
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm('Are you sure you want to delete this announcement?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/announcements/${id}`, {
          method: 'DELETE',
        });
        const result = await response.json();
        if (response.ok) {
          toast.success(result.message);
          fetchAnnouncements();
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        console.error(error);
        toast.error('An error occurred while deleting the announcement.');
      }
    }
  };

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const optionsDate = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = date.toLocaleDateString(undefined, optionsDate);
    const formattedTime = date.toLocaleTimeString();

    return `${formattedTime} ${formattedDate}`;
  };

  return (
    <AdminLayout isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className='container mx-auto w-full mt-20 md:mt-1 px-1'>
        <div className={`bg-red-400 w-full px-2 rounded-sm pb-5 ${isOpen ? 'w-[106%]' : 'w-full'}`}>
          <h1 className='font-[800] text-[20px] text-gray-500'>{editingAnnouncement ? 'Edit Announcement' : 'Create Announcement'}</h1>
          <form
            className='grid grid-cols-5 mt-4 gap-2 px-0 md:px-[10rem]'
            onSubmit={editingAnnouncement ? handleEditSubmit : handleSubmit}
          >
            <input
              type='text'
              name='title'
              placeholder='Title'
              defaultValue={editingAnnouncement?.title || ''}
              className='outline-none p-2 rounded-sm border border-gray-700 col-span-3 w-full'
            />
            <input
              type='text'
              name='postedBy'
              placeholder='Posted By:'
              defaultValue={editingAnnouncement?.postedBy || ''}
              className='outline-none p-2 rounded-sm border border-gray-700 col-span-2'
            />
            <textarea
              name='description'
              placeholder='Description'
              defaultValue={editingAnnouncement?.description || ''}
              className='w-full outline-none p-2 rounded-sm border border-gray-700 col-span-5'
            />
            <div className='col-span-5'>
              <div
                className='w-full h-[12rem] bg-gray-200 rounded-sm flex justify-center items-center cursor-pointer border-gray-700 border'
                onClick={handleDivClick}
              >
                {imagePreview ? (
                  <img src={imagePreview} alt='Preview' className='w-full h-full object-cover rounded-sm' />
                ) : (
                  <span className='text-gray-500'>Click to upload image</span>
                )}
              </div>
              <input
                type='file'
                id='fileInput'
                className='hidden'
                onChange={handleImageChange}
              />
            </div>
            <div className='bg-[#3447c5] w-full col-span-5 rounded-sm p-2 flex justify-center items-center cursor-pointer'>
              <input
                type='submit'
                value={editingAnnouncement ? 'Update' : 'Submit'}
                className='font-[600] text-white text-center w-full cursor-pointer'
              />
              {editingAnnouncement && (
                <button
                  type='button'
                  onClick={() => setEditingAnnouncement(null)}
                  className='ml-2 font-[600] text-white text-center cursor-pointer'
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Announcements List */}
        <div className='grid md:grid-cols-4 grid-cols-1 gap-4 mt-4 w-full mb-10'>
          {loading ? (
            <p>Loading announcements...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : announcements.length > 0 ? (
            announcements.map((announcement, index) => (
              <div
                key={index}
                className='p-2 border border-gray-200 rounded-md shadow-md relative'
              >
                <div className='absolute top-2 right-2 cursor-pointer' onClick={() => handleModalToggle(index)}>
                  <HiOutlineDotsHorizontal />
                </div>
                {activeModalIndex === index && (
                  <div className='absolute top-6 right-2 bg-white border border-gray-200 rounded-md shadow-lg z-10'>
                    <ul>
                      <li className='p-2 cursor-pointer' onClick={() => handleEditClick(announcement)}>Edit</li>
                      <li className='p-2 cursor-pointer' onClick={() => handleDeleteClick(announcement._id)}>Delete</li>
                    </ul>
                  </div>
                )}
                <h2 className='font-[600] text-xl'>{announcement.title}</h2>
                <p className='text-gray-500'>{formatDateTime(announcement.createdAt)}</p>
                <p className='mt-2'>{announcement.description}</p>
              
                {announcement.image && (
                  <img src={announcement.image} alt={announcement.title} className='w-full h-48 object-cover rounded-md mt-2' />
                )}
                 <p className='mt-2'>{announcement.postedBy}</p>
              </div>
            ))
          ) : (
            <p>No announcements found.</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAnnouncements;
