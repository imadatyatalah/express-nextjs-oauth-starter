import useUser from "../hooks/useUser";

const Home = () => {
  const { user } = useUser();

  return (
    <>
      <main>
        <h1>Welcome to Nextjs OAuth with GitHub</h1>

        <div>
          {user?.error ? (
            <p>
              <a href={"http://localhost:1337/auth/github"}>
                Click here to login
              </a>
            </p>
          ) : (
            <p>
              <a href={"http://localhost:1337/auth/github/logout"}>
                Click here to logout
              </a>
            </p>
          )}
        </div>

        <code>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </code>
      </main>
    </>
  );
};

export default Home;
