import React, { Component } from "react";

export default class NavbarHome extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <span class="navbar-brand text">PrepareMe</span>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active text" aria-current="page" href="">
                  Home
                </a>
                <a class="nav-link text" href="">
                  Features
                </a>
                <a class="nav-link text" href="">
                  Pricing
                </a>

                <nav class="navbar auth">
                  <div>
                    <form class="container-fluid justify-content-start ">
                      <button
                        class="btn btn-outline-success me-2 login"
                        type="button"
                      >
                        Login
                      </button>
                      <button
                        class="btn btn-outline-success me-2 signUp"
                        type="button"
                      >
                        Sign Up
                      </button>
                    </form>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
