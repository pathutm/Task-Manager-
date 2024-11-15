import React from 'react';

const AdminToggle = ({ isAdmin, toggleAdminView }) => {
  return (
    <div className="admin-toggle">
      <label>
        <input type="checkbox" checked={isAdmin} onChange={toggleAdminView} />
        Admin View
      </label>
    </div>
  );
};

export default AdminToggle;
