import React, { useState, useEffect } from 'react';
import AdminLayout from '../../layout/AdminLayout';

const AdminUsers = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [avatar, setAvatar] = useState('');
  const [date, setDate] = useState('');
  const [roleFilter, setRoleFilter] = useState(''); // New state for filtering

  useEffect(() => {
    // Sample user data
    const sampleUsers = [
      { id: 1, name: 'John Doe', username: 'johndoe', email: 'john.doe@example.com', role: 'Admin', avatar: 'https://via.placeholder.com/40', date: '2023-09-01' },
      { id: 2, name: 'Jane Smith', username: 'janesmith', email: 'jane.smith@example.com', role: 'User', avatar: 'https://via.placeholder.com/40', date: '2023-09-02' },
      { id: 3, name: 'Michael Johnson', username: 'michaelj', email: 'michael.johnson@example.com', role: 'Employee', avatar: 'https://via.placeholder.com/40', date: '2023-09-03' },
    ];
    setUsers(sampleUsers);
  }, []);

  const addUser = () => {
    setUsers([...users, { id: Date.now(), name, username, email, role, avatar, date }]);
    resetForm();
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    resetForm();
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      updateUser({ ...editingUser, name, username, email, role, avatar, date });
    } else {
      addUser();
    }
  };

  const resetForm = () => {
    setEditingUser(null);
    setName('');
    setUsername('');
    setEmail('');
    setRole('');
    setAvatar('');
    setDate('');
  };

  // Apply role filter before rendering users
  const filteredUsers = roleFilter ? users.filter(user => user.role === roleFilter) : users;

  return (
    <AdminLayout isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className={`container mx-auto mb-20 ${isOpen ? 'pl-4' : 'pl-2'}`}>
        {/* User Form */}
        <h2 className="text-2xl font-semibold mb-4 text-center py-4">
          {editingUser ? 'Edit User' : 'Add User'}
        </h2>
        <form onSubmit={handleSubmit} className="mb-6 bg-gray-100 p-4 rounded shadow-md grid md:grid-cols-2 grid-cols-1 gap-2">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Avatar URL</label>
            <input
              type="text"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Date (YYYY-MM-DD)</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="p-2 border rounded w-full"
              required
            >
              <option value="">Select a role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 col-span-1 md:col-span-2 mx-20 md:mx-20"
          >
            {editingUser ? 'Update User' : 'Add User'}
          </button> 
        </form>

        {/* Role Filter */}
        <div className="mb-4 mt-10 flex justify-end items-center w-full gap-2">
          <label className="block text-gray-700 ">Filter by Role</label>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="p-2 border rounded w-[20%] mr-4"
          >
            <option value="">All</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Employee">Employee</option>
          </select>
        </div>

        {/* User List */}
        <h2 className="text-2xl font-semibold mb-4">User List</h2>
        <div className='overflow-x-auto md:overflow-x-hidden'>
          <table className="bg-white border border-gray-200 rounded shadow-md w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Avatar</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Username</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Role</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="py-2 px-4 border-b">
                    <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                  </td>
                  <td className="py-2 px-4 border-b text-nowrap">{user.name}</td>
                  <td className="py-2 px-4 border-b text-nowrap">{user.username}</td>
                  <td className="py-2 px-4 border-b text-nowrap">{user.email}</td>
                  <td className="py-2 px-4 border-b text-nowrap">{user.role}</td>
                  <td className="py-2 px-4 border-b text-nowrap">{user.date}</td>
                  <td className="py-2 px-4 border-b flex">
                    <button
                      onClick={() => {
                        setName(user.name);
                        setUsername(user.username);
                        setEmail(user.email);
                        setRole(user.role);
                        setAvatar(user.avatar);
                        setDate(user.date);
                        setEditingUser(user);
                      }}
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;
