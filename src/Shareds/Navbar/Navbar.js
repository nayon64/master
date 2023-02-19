import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Icon/logo.png";
import home from "../../Assets/Icon/home.png";
import compass from "../../Assets/Icon/compass.png";
import love from "../../Assets/Icon/love.png";
import shop from "../../Assets/Icon/shop.png";
import selling from "../../Assets/Icon/sellling.png";
import user from "../../Assets/Icon/user.png";
import watch from "../../Assets/Icon/watch.png";
import message from "../../Assets/Icon/message.png";
import setting from "../../Assets/Icon/setting.png";
import frame2 from "../../Assets/Frame2.png";

const Navbar = () => {
  // routes
  const routes = [
    {
      path: "/",
      name: "Home",
      icon: home,
    },
    {
      path: "/",
      name: "Explore",
      icon: compass,
    },
    {
      path: "/",
      name: "Saved",
      icon: love,
    },
    {
      path: "/",
      name: "Cart",
      icon: shop,
    },
    {
      path: "/",
      name: "Selling",
      icon: selling,
    },
    {
      path: "/",
      name: "Profile",
      icon: user,
    },
    {
      path: "/",
      name: "History",
      icon: watch,
    },
    {
      path: "/contact",
      name: "Contact us",
      icon: message,
    },
    {
      path: "/",
      name: "Setting",
      icon: setting,
    },
  ];

  // routes section
  const menus = (
    <>
      {routes.map((menu, i) => (
        <NavLink
          key={i}
          to={menu.path}
          className={`flex items-center my-3 ${({ isActive }) =>
            isActive ? "active" : "text-black"}`}
        >
          <img className="mx-3" src={menu.icon} alt="" />
          <span>{menu.name} </span>
        </NavLink>
      ))}
    </>
  );

  return (
    <div className="p-5">
      {/* logo sction  */}
      <div className="flex items-center">
        <img src={logo} alt="" />
        <span className="ml-3 text-3xl">MK Sounds</span>
      </div>
      {/* routes setion  */}
      <nav className="my-4">
        <ul className="flex flex-col">{menus}</ul>
      </nav>
      {/* advertised section  */}
      <div>
        <img src={frame2} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
