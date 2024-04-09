import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

// components
import Footer from '../components/Footer';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
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
      <fieldset>
        <label>Email</label>
      <input
        placeholder="Email"
        name="email"
        type="email"
        value={formState.email}
        onChange={handleChange} />
        <label>Password</label>
      <input
        placeholder="******"
        name="password"
        type="password"
        value={formState.password}
        onChange={handleChange} />
      </fieldset>
      <button type="submit">
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
      <main class="container-fluid">
        <article>
        <div>
          <h3>Login</h3>
          {renderForm()}
        </div>
        </article>
          <Footer />
          {error && <div>{error.message}</div>}
      </main>
    </body>
    </section>
  );
};

export default Login;