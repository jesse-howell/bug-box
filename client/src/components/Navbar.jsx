import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  if (Auth.loggedIn()) {
    return (
      <nav>
      <ul>
        <li><strong>Bug Box</strong></li>
      </ul>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/me">{Auth.getProfile().data.username}&lsquo;s profile</a></li>
        <button onClick={logout}>Logout</button>
      </ul>
      </nav>
    );
  }
  // If logged out show login controls
  return (
    <nav>
      <ul>
        <li><strong>Bug Box</strong></li>
      </ul>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/signup">Signup</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;