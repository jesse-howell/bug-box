//import { useMutation } from '@apollo/client';

//import { REMOVE_BUG } from '../../utils/mutations';
//import { QUERY_ME } from '../../utils/queries';


//tentative code, framework can be altered as needed RS032824
const BugsList = ({ bugs, isLoggedInUser = false }) => {
  const [removeBug, { error }] = useMutation
  (REMOVE_Bug, {
    refetchQueries: [
      QUERY_ME,
      'me'
    ]
  });

  const handleRemoveBug = async (bug) => {
    try {
      const { data } = await removeBug({
        variables: { bug },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!bug.length) {
    return <h3>No Bugs Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {bugs &&
          bugs.map((bugs) => (
            <div key={bug} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{bug}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveBug(bug)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default BugsList;