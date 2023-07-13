import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
      <div>
        <input type="search" placeholder="Search" />
      </div>
      <nav>
        <Link to="new">New</Link>

        <Link to="features">Feature</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Products;
