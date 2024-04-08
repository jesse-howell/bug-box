import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_BUG } from '../utils/mutations';

import Auth from '../utils/auth';

const BugForm = ({ userId }) => {
  const [bug, setBug] = useState('');

  const [addBug, { error }] = useMutation(ADD_BUG);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addBug({
        variables: { userId, bug },
      });

      setBug('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Add some more bugs below.</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Add some bugs..."
              value={bug}
              className="form-input w-100"
              onChange={(event) => setBug(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Add Bug
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
          You need to be logged in to endorse skills. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default BugForm;
