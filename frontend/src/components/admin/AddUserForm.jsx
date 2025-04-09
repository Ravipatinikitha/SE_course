import React, { useState } from 'react';
import { createUser } from '../../services/api';

const AddUserForm = ({ onCancel, onSuccess }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    role: 'USER'
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(formData);
      onSuccess();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        <h3 className="card-title mb-4">Add New User</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">ID*</label>
              <input
                type="text"
                className="form-control"
                name="id"
                value={formData.id}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="col-md-6">
              <label className="form-label">Name*</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="col-md-6">
              <label className="form-label">Email*</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="col-md-6">
              <label className="form-label">Password*</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
              />
            </div>
            
            <div className="col-md-6">
              <label className="form-label">Role*</label>
              <select
                className="form-select"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="USER">Regular User</option>
                <option value="ADMIN">Administrator</option>
              </select>
            </div>
            
         
          </div>
          
          <div className="d-flex justify-content-end mt-4">
            <button 
              type="button" 
              className="btn btn-outline-secondary me-2" 
              onClick={onCancel}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;