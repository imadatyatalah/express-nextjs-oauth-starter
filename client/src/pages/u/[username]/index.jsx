import React from "react";

const Username = ({ user }) => {
  return (
    <>
      <main>
        <section>
          <div>
            <code>
              <pre>{JSON.stringify(user, null, 2)}</pre>
            </code>
          </div>
        </section>
      </main>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const { username } = ctx.params;

  const user = await fetch(`http://localhost:1337/user/${username}`);

  return { props: { user: await user.json() } };
};

export default Username;
