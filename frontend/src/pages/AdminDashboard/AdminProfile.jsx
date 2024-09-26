import { useState } from "react";
import AdminLayout from "../../layout/AdminLayout";

const AdminProfile = ({ userData }) => {
  // States
  const [isOpen, setIsOpen] = useState(true);
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({
    username: userData?.username || "adminAko123",
    email: userData?.email || "admin@gmail.com",
    firstName: userData?.firstName || "Lando",
    middleName: userData?.middleName || "Abastillas",
    lastName: userData?.lastName || "Sanchez",
    password: "admin123",
    image: userData?.image || null,
    role: userData?.role || "User"
  });

  // State for image preview
  const [previewImage, setPreviewImage] = useState(userData?.image || null);

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle profile image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file
      });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Toggle edit mode on clicking "Edit Profile"
  const hanlderClick = () => {
    setIsEditable(!isEditable);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form reload
    setIsEditable(!isEditable); // Disable editing after submission

    // Handle form submission logic here (e.g., API call)
    console.log("Submitted form data:", formData);
  };

  return (
    <AdminLayout isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        
        <h1 className="text-3xl font-semibold text-gray-700 mb-6 pl-2">User Profile</h1>

        <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Edit/Save Button */}
          <div className="mb-4 col-span-2 flex justify-end">
            {isEditable ? (
              <button
                type="button"
                onClick={hanlderClick}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save Changes
              </button>
            ) : (
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Edit Profile
              </button>
            )}
          </div>

          {/* Username Input */}
          <div className="mb-4 col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              readOnly={!isEditable}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4 col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              readOnly={!isEditable}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* First Name Input */}
          <div className="mb-4 col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              readOnly={!isEditable}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Middle Name Input */}
          <div className="mb-4 col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="middleName">
              Middle Name
            </label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleInputChange}
              readOnly={!isEditable}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Last Name Input */}
          <div className="mb-4 col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              readOnly={!isEditable}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4 col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              readOnly={!isEditable}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Profile Image Input */}
          <div className="col-span-2 md:col-span-1  ">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Profile Image
              </label>
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                disabled={!isEditable}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Image Preview */}
            {previewImage && (
              <div className="mb-4">
                <img src={previewImage} alt="Profile Preview" className="h-40 w-full object-cover rounded-sm" />
              </div>
            )}
          </div>

          {/* Role Input */}
          <div className="mb-4 col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
              Role
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              readOnly={true} // Role cannot be edited
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminProfile;
