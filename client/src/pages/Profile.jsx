// Node Modules
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import BugsList from '../components/BugsList';
import BugForm from '../components/BugForm';
import UserForm from '../components/UserForm';

// Utilities
import Auth from '../utils/auth';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

const Profile = () => {
  const { userId } = useParams();


  // Get current user
  const { loading, data, error } = useQuery(
    userId ? QUERY_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <h2 className="card-header">
        {userId ? `${user.username}'s` : 'Your'} bugs...
      </h2>

      {user.bugs?.length > 0 && (
        <BugsList
          bugs={user.bugs}
          isLoggedInUser={!userId && true}
        />
      )}

      <div className='my-4 p-4 grid' style={{ border: '1px dotted #1a1a1a' }}>
        <div>
          <BugForm userId={user._id} />
        </div>
        <div>
          <UserForm userId={user._id} />
        </div>
      </div>
     </div>
  );
};

export default Profile;