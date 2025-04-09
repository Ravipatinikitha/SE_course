import React, { useState, useEffect } from 'react';
import { getAllUsers, deleteUser } from '../../services/api';
import UserList from './UserList';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';



const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  useEffect(() => {
    fetch('http://localhost:8080/api/admin/users', {
      method: 'GET',
      credentials: 'include'  // 👈 super important!
    })
    
      .then(res => res.json())
      .then(data => {
        console.log("Fetched user data:", data); // 👈 this line
        if (Array.isArray(data)) {
          setUsers(data);
        } else if (Array.isArray(data.users)) {
          setUsers(data.users); // if backend returns { users: [...] }
        } else {
          console.error("Unexpected user data:", data);
          setUsers([]);
        }
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setUsers([]);
      });
  }, []);
  
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getAllUsers();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(id);
        fetchUsers();
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setShowAddForm(false);
  };

  const handleAddUser = () => {
    setShowAddForm(true);
    setEditingUser(null);
  };

  const handleCancel = () => {
    setEditingUser(null);
    setShowAddForm(false);
  };

  const handleSuccess = () => {
    fetchUsers();
    setEditingUser(null);
    setShowAddForm(false);
  };

  if (loading) return <div className="text-center mt-4">Loading users...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>User Management</h2>
        {!editingUser && !showAddForm && (
          <button 
            onClick={handleAddUser} 
            className="btn btn-primary"
          >
            + Add New User
          </button>
        )}
      </div>

      {editingUser ? (
        <EditUserForm 
          user={editingUser} 
          onCancel={handleCancel} 
          onSuccess={handleSuccess} 
        />
      ) : showAddForm ? (
        <AddUserForm 
          onCancel={handleCancel} 
          onSuccess={handleSuccess} 
        />
      ) : (
        <UserList 
          users={users} 
          onDelete={handleDelete} 
          onEdit={handleEdit} 
        />
      )}
    </div>
  );
};

export default AdminDashboard;