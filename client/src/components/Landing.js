import React, { Component } from "react";
import { connect } from "react-redux";

class Landing extends Component {
  render(){
    console.log(this.props);
    return (
      <section id="authors" class="my-5 text-center">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="info-header mb-5">
                <h1 class="text-primary pb-3">
                  Collect feedback from your users
                </h1>
                <p class="lead pb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur nam porro obcaecati tenetur ratione eius.             
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <h3>Susan Williams</h3>
                  <h5 class="text-muted">Lead Writer</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero fugit similique saepe corporis. Laudantium.</p>
                  <div class="d-flex flex-row justify-content-center">
                    <div class="p-4">
                      <a href="#"><i class="fa fa-facebook"></i>
                      </a>
                    </div>
                    <div class="p-4">
                      <a href="#"><i class="fa fa-twitter"></i></a>
                    </div>
                    <div class="p-4">
                      <a href="#"><i class="fa fa-instagram"></i></a>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

// function mapStateToProps(state) {
//   return { auth: state.auth };
// }

export default (Landing);