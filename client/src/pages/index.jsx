import { useUser } from "../stores/useUser";

const Home = () => {
  const user = useUser((state) => state.user);
  const logged_in = useUser((state) => state.logged_in);

  return (
    <>
      <section>
        <h1>Welcome to Nextjs OAuth with GitHub</h1>

        <div>
          {logged_in && user && (
            <code>
              <pre>{JSON.stringify(user, null, 2)}</pre>
            </code>
          )}
        </div>

        <div>
          {logged_in ? (
            <p>
              <a href={"http://localhost:1337/auth/github/logout"}>
                Click here to logout
              </a>
            </p>
          ) : (
            <p>
              <a href={"http://localhost:1337/auth/github"}>
                Click here to login
              </a>
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
