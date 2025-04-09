import React from 'react';
import AdminDashboard from '../components/admin/AdminDashboard';


const AdminPage = () => {
  return (
    <div className="admin-page">
    
      <main className="container py-4">
        <AdminDashboard />
      </main>
    </div>
  );
};

export default AdminPage;