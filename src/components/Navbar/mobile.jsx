import Link from 'next/link';
import React from 'react';

const NavBarMobile = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top visible-xs" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link href="/" className="navbar-brand">
            Next.js App
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="active">
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* Remove the gradient from the navbar */
        .navbar-default {
          background-color: #f8f8f8;
          border-color: #e7e7e7;
        }

        /* Adjust the padding for the navbar */
        .navbar-default .navbar-nav > li > a {
          padding-top: 10px;
          padding-bottom: 10px;
          line-height: 20px;
        }

        /* Add hover effect to the navbar */
        .navbar-default .navbar-nav > li > a:hover,
        .navbar-default .navbar-nav > li > a:focus {
          background-color: #e7e7e7;
        }

        /* Set the active state for the current page */
        .navbar-default .navbar-nav > .active > a,
        .navbar-default .navbar-nav > .active > a:hover,
        .navbar-default .navbar-nav > .active > a:focus {
          background-color: #ddd;
        }

        /* Add a bottom border to the navbar */
        .navbar-default {
          border-bottom: 1px solid #ddd;
        }

        /* Remove the dropdown caret */
        .navbar-default .navbar-nav > li > .dropdown-menu:before {
          display: none;
        }

        /* Adjust the padding for the dropdown menus */
        .navbar-default .navbar-nav > li > .dropdown-menu {
          margin-top: 0;
          padding: 10px 0;
        }

        /* Add hover effect to the dropdown menu items */
        .navbar-default .navbar-nav > li > .dropdown-menu > li > a:hover,
        .navbar-default .navbar-nav > li > .dropdown-menu > li > a:focus {
          background-color: #e7e7e7;
        }

        /* Set the active state for the current dropdown menu item */
        .navbar-default .navbar-nav > li > .dropdown-menu > .active > a,
        .navbar-default .navbar-nav > li > .dropdown-menu > .active > a:hover,
        .navbar-default .navbar-nav > li > .dropdown-menu > .active > a:focus {
          background-color: #ddd;
        }
      `}</style>
    </nav>
  );
};

export default NavBarMobile;
