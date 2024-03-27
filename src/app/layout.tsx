import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";

export const metadata: Metadata = {
  title: "Lara Janecka",
  description: "Personal website of Lara Janecka",
};

function Navigation() {
  return (
    <Container>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        sticky="top"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Nav className="me-auto">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/stack">Tech Stack</NavLink>
          <NavLink href="/experience">Work Experience</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/resume">Resume</NavLink>
          <NavLink href="/facts">Fun Facts</NavLink>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <>{children}</>
      </body>
    </html>
  );
}
