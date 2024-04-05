// Node Modules
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import BugsList from '../components/BugsList';
import BugForm from '../components/BugsList';

// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS, QUERY_USER, QUERY_ME } from '../utils/queries';

// Components
// import UserList from '../components/UserList';
import Footer from '../components/Footer';

const Profile = () => {
  const { userId } = useParams();

  // Get current user
  const { loading, data, error } = useQuery(
    userId ? QUERY_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );

  // Get a list of all users
  const { usersLoading, data: usersData } = useQuery(QUERY_USERS);

  const user = data?.me || data?.user || {};
  const users = usersData?.users || [];

  if (error) console.log(error);

  // redirect to personal user page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
    return <Navigate to="/me" replace />;
  }

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (!user?.username) {
    return (
      <>
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>
        <Footer />
      </>
    );
  }



  return (
    <div>
      <h2 className="card-header">
        {userId ? `${user.name}'s` : 'Your'} friends have endorsed these
        bugss...
      </h2>

      {user.bugs?.length > 0 && (
        <BugsList
          bugs={user.bugs}
          isLoggedInUser={!userId && true}
        />
      )}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <BugForm profileId={user._id} />


        <div>
          <div>
            <h2>
              Viewing {id ? `${user.username}'s` : 'your'} profile.
            </h2>
            {renderCurrentUserInfo()}
            {renderUserList()}
          </div>
        </div>
      </div>
    </div>
  )
};
//   const renderUserList = () => {
//     if (usersLoading) return null;
//     // Only renders users who's profile we're not currently viewing
//     const notMeUsers = users.filter(o => o._id !== user._id);
//     return <UserList users={notMeUsers} title="User List" />;
//   };

//   const renderCurrentUserInfo = () => {
//     if (id) return null;
//     return (
//       <ul>
//         <li>username: {user.username}</li>
//         <li>email: {user.email}</li>
//       </ul>
//     );
//   }

//   return (
//     <div>
//       <div>
//         <h2>
//           Viewing {id ? `${user.username}'s` : 'your'} profile.
//         </h2>
//         {renderCurrentUserInfo()}
//         {renderUserList()}
//       </div>
//     </div>
//   );
// };

export default Profile;