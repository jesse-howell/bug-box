// import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
// import bugFactComponent from './BugFact';


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
          <h1 className="m-0" style={{ fontSize: '40px' }}>
            Did you know...
          </h1>
        <div className="m-0 container" style={{ fontSize: '34px', fontWeight: '700', textAlign: 'center', paddingBottom: '19px' }}>
         {/* <BugFact /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
