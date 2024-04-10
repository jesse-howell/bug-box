import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";
import Header from "../components/Header";
import Hero from '../components/Hero';



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
      <Hero /> 
    </>
  );
}

export default Home;