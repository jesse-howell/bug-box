import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

// import UserList from "../components/UserList";
// components
import Footer from '../components/Footer';


function Home() {
  const { data, loading, error } = useQuery(QUERY_USERS);

  const users = data?.users || [];

  if (error) {
    throw Error(error);
  }

  if (loading) {
    return <h2>Loading…</h2>;
  }
  

  return (
    <>
      <div>Home</div>
      <Footer />
      {/* <UserList users={users} /> */}
    </>
  );
}

export default Home;