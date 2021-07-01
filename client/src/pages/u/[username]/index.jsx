import React from "react";
import PropTypes from "prop-types";

const User = ({ user }) => {
  return (
    <>
      <section>
        <div>
          <code>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </code>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`http://localhost:1337/user/${params.username}`);
  const user = await res.json();

  return { props: { user } };
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
