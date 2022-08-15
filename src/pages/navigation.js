import React from 'react';
import { Link } from 'gatsby';



const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/post">
            Post
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;