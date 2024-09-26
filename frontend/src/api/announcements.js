const API_URL = 'http://localhost:5000/api/announcements'; // Adjust URL as needed

export const createAnnouncement = async (announcementData) => {
  const formData = new FormData();
  for (const key in announcementData) {
    formData.append(key, announcementData[key]);
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    body: formData,
  });
  return response.json();
};

export const fetchAnnouncements = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const updateAnnouncement = async (id, updatedData) => {
  const formData = new FormData();
  for (const key in updatedData) {
    formData.append(key, updatedData[key]);
  }

  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    body: formData,
  });
  return response.json();
};

export const deleteAnnouncement = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};
