import React, { Component } from "react";

class Header extends Component {
  render(){
    return (
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-0">
      <div class="container">
        <a href="/" class="navbar-brand">Survey</a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="conllapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav  ml-auto">
            <li class="nav-item px-2">
              <a href="index.html" class="nav-link active">Home</a>
            </li>
            <li class="nav-item px-2">
              <a href="about.html" class="nav-link">About Us</a>
            </li>
            <li class="nav-item px-2">
              <a href="service.html" class="nav-link">Services</a>
            </li>
            <li class="nav-item px-2">
              <a href="blog.html" class="nav-link">Blog</a>
            </li>
            <li class="nav-item px-2">
              <a href="/auth/google" class="nav-link">Login With Google</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}

export default Header;