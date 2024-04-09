import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { UPDATE_USER } from '../utils/mutations'

import Auth from '../utils/auth';

const UserForm = ({ userId }) => {
    const [username, setUsername] = useState('');
  
    const [updateUser, { error }] = useMutation(UPDATE_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const data = await updateUser({
          variables: { userId, username },
        });
  
        setUsername('');
      } catch (err) {
        console.error(err);
      }
    };

    return (
      <div>
      <h4>Click here to change your username (changes will apply next login)!</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Enter a new username"
              value={username}
              className="form-input w-100"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Change Username
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to change this user's name. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
      );
    };

export default UserForm;