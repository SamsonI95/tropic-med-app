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
          height: 90vh;
        }
        UserSidebar {
          position: absolute;
          left: 0;
        }
        UserContent {
          postion: absolute;
        }

        @media (max-width: 1400px) {
          section {
          height: 810px;
          }
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
