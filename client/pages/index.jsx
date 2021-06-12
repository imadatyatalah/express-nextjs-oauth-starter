import { parseCookies } from "nookies";

const Home = ({ data }) => {
  return (
    <>
      <main>
        <h1>Welcome to Nextjs OAuth with GitHub</h1>

        <div>
          {data.token ? (
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

        <code>
          <pre>{JSON.stringify(data.user, null, 2)}</pre>
        </code>
      </main>
    </>
  );
};

async function getUser(token) {
  const res = await fetch("http://localhost:1337/me", {
    headers: { token },
  });

  const data = await res.json();

  if (res.status === 200) {
    return { token, user: data };
  } else {
    return { token };
  }
}

export const getServerSideProps = async (ctx) => {
  const { gh_token } = parseCookies(ctx);

  const data = await getUser(gh_token || "");

  return { props: { data } };
};

export default Home;
