import React from 'react';

const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
         
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name || '-'}</td>
              <td>{user.email}</td>
              <td>
                <span className={`badge ${user.role === 'ADMIN' ? 'bg-danger' : 'bg-primary'}`}>
                  {user.role}
                </span>
              </td>
              <td>{user.department || '-'}</td>
              <td>
                <div className="btn-group">
                  <button 
                    onClick={() => onEdit(user)} 
                    className="btn btn-sm btn-outline-primary"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => onDelete(user.id)} 
                    className="btn btn-sm btn-outline-danger"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;