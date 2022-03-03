import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";

function Footer() {
  return (
    <div>
      <p
        style={{
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/tayfundagci/"
          style={{ fontWeight: "bold" }}
          target="blank"
        >
          Tayfun Dagci
        </a>
        <br />
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5px",
        }}
      >
        <a href="https://www.github.com/tayfundagci/" target="blank">
          <BsGithub size={"33"} />
        </a>
        <a href="https://www.linkedin.com/in/tayfundagci/" target="blank">
          <AiFillLinkedin size={"40"} h />
        </a>
      </div>
    </div>
  );
}

export default Footer;
