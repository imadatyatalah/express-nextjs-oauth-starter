import React from "react";
import PropTypes from "prop-types";

import axios from "axios";

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
  const { data: user } = await axios.get(
    `http://localhost:1337/user/${params.username}`
  );

  return { props: { user } };
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
