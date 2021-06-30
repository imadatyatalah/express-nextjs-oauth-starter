import React from "react";
import Image from "next/image";

import { useUser } from "@/stores/useUser";

const Header = () => {
  const user = useUser((state) => state.user);
  const logged_in = useUser((state) => state.logged_in);

  return (
    <>
      <header className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-4xl">LOGO</h1>
        </div>

        <div>
          {logged_in && user ? (
            <>
              <div>
                <Image
                  src={user.githubAvatarUrl}
                  width="45"
                  height="45"
                  alt={user.githubName}
                  className="rounded-full"
                />
              </div>

              <button>
                <a href={"http://localhost:1337/auth/github/logout"}>logout</a>
              </button>
            </>
          ) : (
            <>
              <button>
                <a href={"http://localhost:1337/auth/github"}>Sign in</a>
              </button>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
