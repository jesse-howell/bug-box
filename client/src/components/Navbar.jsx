import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  if (Auth.loggedIn()) {
    return (
      <>
      <ul class="flex">
        <li class="mr-6">
        <a class="text-lime-600 hover:text-lime-800" href="/">
          Home
        </a>
        </li>
        <li>
        <a class="text-lime-600 hover:text-lime-800" href="/me">
          {Auth.getProfile().data.username}&lsquo;s profile
        </a>
        </li>
        <button onClick={logout}>
          Logout
        </button>
        </ul>
      </>
    );
  }
  // If logged out show login controls
  return (
    <>
    <ul class="flex">
      <li class="mr-6">
      <a class="text-lime-600 hover:text-lime-800" href="/">
        Home
      </a>
      </li>
      <li class="mr-6">
      <a class="text-lime-600 hover:text-lime-800" href="/login">
        Login
      </a>
      </li>
      <li class="mr-6">
      <a class="text-lime-600 hover:text-lime-800" href="/signup">
        Signup
      </a>
      </li>
      </ul>
    </>
  );
}

export default Navbar;