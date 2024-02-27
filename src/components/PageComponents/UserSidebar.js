//App
import React from "react";
import { Link } from "react-router-dom";

//Style
import "./UserSidebar.css";

const UserSidebar = () => {
  return (
    <>
      <section className="sidebar-container">
        <div className="sidebar-wrapper">
          <div className="sidebar-content">
            <div className="sidebar-usercontent">
              <div className="sidebar-userimage"></div>
              <div className="sidebar-userinfo">
                <h3>User Name</h3>
                <p>User Email</p>
              </div>
            </div>
            <div className="sidebar-menu">
              <ul>
                <Link to="/user/profile">
                  <li>Profile</li>
                </Link>
                <Link to="/user/health-records">
                  <li>Health Records</li>
                </Link>
                <Link to="/user/pres-mgr">
                  <li>Prescription Manager</li>
                </Link>
                <Link to="/user/cons-hry">
                  <li>Consultation History</li>
                </Link>
                <Link to="/user/notifcation">
                  <li>Notification</li>
                </Link>
                <Link to="/user/order-tracker">
                  <li>Order Tracker</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserSidebar;
