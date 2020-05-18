import React, { Component } from "react";

class NoPageFound extends Component {
  render() {
    return (
      <div id="error">
        <h1 className="notFoundTitle">Oops! That page can’t be found.</h1>
        <p className="notFoundDesc">
          It looks like nothing was found at this location. Maybe try one of the
          links in the menu or press back to go to the previous page.
        </p>
        Go to <a href= "/home">Home Page</a>
      </div>
    );
  }
}

export default NoPageFound;