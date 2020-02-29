import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Profile from "../../assets/profile.jpg";
import { Container, Box } from "./styles";

export default function Header() {
  return (
    <Container>
      <Box>
        <div className="title">
          <h1>Quiz Now</h1>
        </div>

        <div className="avatar">
          <img src={Profile} alt="profile" />
          <span>Perfil</span>
        </div>

        <div className="Menu">
          <DropdownButton id="dropdown-basic-button" title="Menu">
            <Dropdown.Item
              style={{ color: "#49aeeb", fontWeight: "bold", fontSize: 20 }}
              href="#/action-1"
            >
              Quiz
            </Dropdown.Item>
            <Dropdown.Item
              style={{ color: "#49aeeb", fontWeight: "bold", fontSize: 20 }}
              href="#/action-2"
            >
              Listas
            </Dropdown.Item>
            <Dropdown.Item
              style={{ color: "#49aeeb", fontWeight: "bold", fontSize: 20 }}
              href="#/action-3"
            >
              Coisas
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </Box>
    </Container>
  );
}
