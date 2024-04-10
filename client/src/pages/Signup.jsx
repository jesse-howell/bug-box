import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const renderForm = () => {
    if (data) {
      return (
      <p>
        Success! You may now head{' '}
        <Link to="/">back to the homepage.</Link>
      </p>
      )
    } 
    return (
      <section style={{
        padding: "20px",
      }}>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="Your username"
          name="username"
          type="text"
          value={formState.name}
          onChange={handleChange} />
        <input
          placeholder="Your email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange} />
        <input
          placeholder="******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange} />
        <button type="submit" class="pico-background-orange-600">
          Submit
        </button>
      </form>
      </section>
    );
  };

  return (
    <section style={{
      padding: "20px",
      color: "#577400",
    }}>
      <body>
    <main>
      <article>
      <div>
      <h4>Sign Up</h4>
        {renderForm()}
      </div>
      </article>
        {/* <Footer /> */}
        {error && <div>{error.message}</div>}
    </main>
    </body>
    </section>
  );
};

export default Signup;