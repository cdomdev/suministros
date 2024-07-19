import Layout from "../layout/Layout";
import { Outlet } from "react-router";
import { Profile } from "./sidebar/Profile";

const PageProfile = () => {
  return (
    <>
      <Layout title={"Perfil"} component={<ProfileBody />} />
    </>
  );
};

const ProfileBody = () => {
  return (
    <>
      <div className="body">
        <div className="sidebar">
          <Profile />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PageProfile;
