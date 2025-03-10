import { Card } from "@mui/material";
import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";

class Authentication extends Component {
  state = {};
  render() {
    return (
      <div className="w-screen h-screen bg-[#1A1A1D] bg-[url('/Hero.jpg')] bg-cover bg-center flex justify-center items-center">
        <div className="h-[600px] w-[400px] md:h-[900px] md:w-[800px] bg-gradient-to-r from-amber-50/50 to-cyan-50/50 rounded-3xl backdrop-blur-sm">
          <div>
            <h1 className="font-serif text-2xl md:text-4xl antialiased italic tracking-wide text-[#1A1A1D] text-center uppercase mt-10 md:mt-20">
              Moments
            </h1>
            <h3 className="text-sm md:text-xl tracking-wide text-[#1A1A1D] text-center uppercase m-6 animate-pulse">
              Capture life&apos;s moments, one story at a time.
            </h3>
          </div>
          <Login />
          {/*<Register />*/}
        </div>
      </div>
    );
  }
}

export default Authentication;
