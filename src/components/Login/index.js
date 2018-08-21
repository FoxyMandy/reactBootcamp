import React, { Component } from "react";
import "./index.css";

class Login extends Component {
  render() {
    return (
      <div class="container bg">
        <div class="row" id="pwd-container">
          <div class="col-md-4" />

          <div class="col-md-4">
            <section class="login-form">
              <form
                class="form-container"
                method="post"
                action="#"
                role="login"
              >
                <img src="" class="img-responsive" alt="" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  class="form-control input-lg"
                />

                <input
                  type="password"
                  class="form-control input-lg"
                  id="password"
                  placeholder="Password"
                  required=""
                />

                <div class="pwstrength_viewport_progress" />

                <button
                  type="submit"
                  name="go"
                  class="btn btn-lg btn-info btn-block"
                >
                  Meow in
                </button>
              </form>

              <div class="form-links" />
            </section>
          </div>

          <div class="col-md-4" />
        </div>
      </div>
    );
  }
}

export default Login;
