import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";
import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { theme } = useTheme();

  const colorr = theme === "light" ? "rgb(50, 50, 50)" : "rgb(190,190,190)";

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
          style={{ fontWeight: "bold", textDecoration: "none", color: colorr }}
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
          marginTop: "-10px",
          color: colorr,
        }}
      >
        <a href="https://www.github.com/tayfundagci/" target="blank">
          <BsGithub
            size={"33"}
            style={{ textDecoration: "none", color: colorr }}
          />
        </a>
        <a
          className="ms-2"
          href="https://www.linkedin.com/in/tayfundagci/"
          target="blank"
        >
          <AiFillLinkedin size={"40"} style={{ color: colorr }} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
