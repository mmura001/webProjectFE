import { AppBar, Box } from "@material-ui/core";
import React, { Component } from "react";
import SearchBar from "../component/SearchBar";
class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ paddingTop: 80 }}>
          <Box>
            <h1>Home Page</h1>
          </Box>
        </div>
        <SearchBar placeholder={"Search.."} />
      </div>
    );
  }
}

export default HomePage;
