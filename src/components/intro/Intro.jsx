import React from 'react';
import "./intro.scss";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <img src="assets/catprofile.jpeg" alt="" />
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Dasha</h1>
          <h3>Freelance Developer</h3>
          <ArrowDownwardIcon className="arrow" />
        </div>
        
      </div>
    </div>
  );
}
