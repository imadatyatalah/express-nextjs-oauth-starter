import { useUser } from "../hooks/useUser";

const Home = () => {
  const user = useUser((state) => state.user);

  return (
    <>
      <main>
        <section>
          <h1>Welcome to Nextjs OAuth with GitHub</h1>

          <div>
            {user && (
              <code>
                <pre>{JSON.stringify(user, null, 2)}</pre>
              </code>
            )}
          </div>

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
        </section>
      </main>
    </>
  );
};

export default Home;
