// import { Link } from 'react-router-dom';
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
          <li><strong style={{ fontSize: '40px' }}>Bug-Box!</strong></li>
        </ul>
        <ul>
          <li><button class="pico-background-orange-500"><a href="/">Home</a></button></li>
          <li><button class="pico-background-orange-500"><a href="/me">{Auth.getProfile().data.username}&lsquo;s profile</a></button></li>
          <li><button class="pico-background-orange-500" onClick={logout}>Logout</button></li>
        </ul>
      </nav>
    );
  }
  // If logged out show login controls
  return (
    <nav>
      <ul>
        <li><strong style={{ fontSize: '40px' }}>Bug-Box!</strong></li>
      </ul>
      <ul>
        <li><button type="submit" class="pico-background-orange-500"><a href="/">Home</a></button></li>
        <li><button type="submit" class="pico-background-orange-500"><a href="/login">Login</a></button></li>
        <li><button type="submit" class="pico-background-orange-500"><a href="/signup">Signup</a></button></li>
      </ul>
    </nav>
  );
}

export default Navbar;