//App
import React from "react";
import { Outlet } from "react-router-dom";

//Component
import UserHeader from "../PageComponents/UserHeader";
import UserSidebar from "../PageComponents/UserSidebar";

const UserPage = () => {
  return (
    <>
      <style>
        {`
        section {
          display: flex;
        }
        UserSidebar {
          position: absolute;
          left: 0;
        }
        UserContent {
          postion: absolute;
        }
        `}
      </style>
      <div>
        <section>
          <UserSidebar />
          <UserHeader />
        </section>
        <Outlet />
      </div>
    </>
  );
};

export default UserPage;
