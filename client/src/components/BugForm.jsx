import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_BUG } from '../utils/mutations';
import Auth from '../utils/auth';

const BugForm = ({ userId }) => {
  const [bug, setBug] = useState('');

  const [addBug, { error }] = useMutation(ADD_BUG);

  // handle Form errors
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // error msg for if bug input area is left blank
    if(!bug) {
      setErrorMessage('This field cannot be left blank, please enter a bug name...');
      return;
    }

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
            <button className="btn btn-info btn-block py-3 pico-background-orange-400" type="submit">
              Add Bug
            </button>
          </div>
          {errorMessage && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {errorMessage}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to add to bug list. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default BugForm;
