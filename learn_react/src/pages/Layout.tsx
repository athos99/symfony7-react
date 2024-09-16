import React from "react";
import { Outlet} from "react-router-dom";

const Layout = () => {
  console.log("layout: " + document.location.pathname);
  return (
    <>
        <a href="/">Home</a>&nbsp;
        <a href="/ex1">Ex1</a>&nbsp;
        <a href="/ex2">Ex2</a>&nbsp;
        <a href="/ex3">Ex3</a>&nbsp;
        <a href="/ex4">Ex4</a>&nbsp;
        <a href="/ex5">Ex5</a>&nbsp;
        <a href="/ex6">Ex6</a>&nbsp;
        <a href="/ex7">Ex7</a>&nbsp;
        <a href="/blogs">Blog</a>&nbsp;
        <a href="/contact">Contact</a>&nbsp;
        <a href="/products">Products</a>
      <Outlet />
    </>
  );
};

export default Layout;
