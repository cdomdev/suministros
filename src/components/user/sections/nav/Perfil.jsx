import { lazy, useEffect, useState } from "react";
const UserProfile = lazy(() => import("./perfilUsuario/UserProfile"));
import Avatar from "@mui/material/Avatar";
import { isAuthenticated } from "../../../../helpers/isAuthenticated";
import EventEmitter from "../../../../hook/EventEmitter";
const LoginModal = lazy(() =>
  import("../../services/autenticacion/LoginModal")
);

const Perfil = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, [isLoggedIn]);

  useEffect(() => {
    const authChangeCallback = (isLoggedIn) => {
      setIsLoggedIn(isLoggedIn);
    };

    const unsubscribe = EventEmitter.subscribe(
      "authChange",
      authChangeCallback
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div>
        {isLoggedIn ? (
          <UserProfile setIsLoggedIn={() => setIsLoggedIn(!isLoggedIn)} />
        ) : (
          <>
            <LoginModal
              setIsLoggedIn={() => setIsLoggedIn(!isLoggedIn)}
              controlComponent={(handleShow) => (
                <>
                  <Avatar
                    src="/broken-image.jpg"
                    onClick={handleShow}
                    sx={{ cursor: "pointer" }}
                  />
                </>
              )}
            />
          </>
        )}
        <span className="profile">PERFIL</span>
      </div>
    </>
  );
};
export default Perfil;
