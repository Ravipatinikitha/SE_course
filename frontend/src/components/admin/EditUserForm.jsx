import React, { useState } from 'react';
import { updateUser } from '../../services/api';

const EditUserForm = ({ user, onCancel, onSuccess }) => {
  const [formData, setFormData] = useState({
    id: user.id,
    name: user.name,
    email: user.email,
    password: '',
    role: user.role,
    department: user.department
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(user.id, formData);
      onSuccess();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        <h3 className="card-title mb-4">Edit User: {user.id}</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">ID</label>
              <input
                type="text"
                className="form-control"
                value={formData.id}
                disabled
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
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Leave blank to keep current password"
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
            
            <div className="col-md-6">
              <label className="form-label">Department</label>
              <input
                type="text"
                className="form-control"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserForm;