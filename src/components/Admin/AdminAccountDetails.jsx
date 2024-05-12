import React, { useState } from 'react';
import { TextInput, Button, PasswordInput } from '@mantine/core';

const AccountDetails = ({adminData}) => {
  const [userData, setUserData] = useState(adminData[0]);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (value, name) => {
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    adminData[0] = userData;
    setEditMode(false);
  };

  return (
    <div style={{ maxWidth: 500, margin: 'auto', fontSize: 16, color: '#0ca678' }}>
      <h2>Account Details</h2>
      <TextInput
        radius="xl"
        size='lg'
        label="First Name"
        value={userData.firstName}
        onChange={(event) => handleChange(event.currentTarget.value, 'firstName')}
        disabled={!editMode}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        radius="xl"
        size='lg'
        label="Last Name"
        value={userData.lastName}
        onChange={(event) => handleChange(event.currentTarget.value, 'lastName')}
        disabled={!editMode}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        radius="xl"
        size='lg'
        label="Email"
        type="email"
        value={userData.email}
        onChange={(event) => handleChange(event.currentTarget.value, 'email')}
        disabled={!editMode}
        style={{ marginBottom: 10 }}
      />
      <PasswordInput
        radius="xl"
        size='lg'
        label="Password"
        type="password"
        value={userData.password}
        onChange={(event) => handleChange(event.currentTarget.value, 'password')}
        disabled={!editMode}
        style={{ marginBottom: 10 }}
      />
      <div style={{ marginTop: 20 }}>
        {!editMode && (
          <Button size='lg' radius="xl" variant="outline" color="#0ca678" onClick={handleEdit}>
            Edit
          </Button>
        )}
        {editMode && (
          <Button size='lg' radius="xl" variant="outline" color="#0ca678" onClick={handleSave}>
            Save
          </Button>
        )}
      </div>
    </div>
  );
};

export default AccountDetails;
