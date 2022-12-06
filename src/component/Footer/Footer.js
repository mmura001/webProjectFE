import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "./Footer.css";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="footer">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="http://localhost:3000/">
          WikiLibrary.com
        </a>
      </div>
    </MDBFooter>
  );
}
