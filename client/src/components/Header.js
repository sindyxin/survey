import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent(){
    switch (this.props.auth){
      case null:
        return;
      case false:
        return (            
          <li class="nav-item px-2">
          <a href="/auth/google" class="nav-link">Login with Google</a>
          </li>);
      default:
        return (            
          <li class="nav-item px-2">
          <a href="/api/logout" class="nav-link">Logout</a>
          </li>);
    }
  }
  render(){
    console.log(this.props);
    return (
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-0">
      <div class="container">
        <Link to={this.props.user ? '/surveys' : '/'} class="navbar-brand">Survey</Link>
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
            { this.renderContent() }
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps) (Header);