"use client";
import { useRef } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Button,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import TimelineSection from "./components/timeline";
import StackSection from "./components/stack";
import ContactsSection from "./components/contacts";
import createFunFactClouds from "./components/facts";
import HomeSection from "./components/home";

// TODO: make the nav bar reactive: https://mui.com/material-ui/react-app-bar/#responsive-app-bar-with-drawer
// TODO: url params

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

enum Pages {
  HOME = 0,
  EXPERIENCE = 1,
  STACK = 2,
  FACTS = 3,
  CONTACT = 4,
}

function Navigation({ onClick }: { onClick: (page: Pages) => void }) {
  return (
    <AppBar position="static">
      <NavbarContainer>
        <Typography>
          <NavButton onClick={() => onClick(Pages.HOME)}>Home</NavButton>
          <NavButton onClick={() => onClick(Pages.EXPERIENCE)}>
            Experience
          </NavButton>
          <NavButton onClick={() => onClick(Pages.STACK)}>Tech Stack</NavButton>
          <NavButton onClick={() => onClick(Pages.FACTS)}>Fun Facts</NavButton>
          <NavButton onClick={() => onClick(Pages.CONTACT)}>Contact</NavButton>
          <NavButton href="pdfs/resume.pdf" download>
            Resume
          </NavButton>
        </Typography>
      </NavbarContainer>
    </AppBar>
  );
}
export default function Home() {
  const parallax = useRef<IParallax>(null!);

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Navigation
          onClick={(page: Pages) => parallax.current.scrollTo(page)}
        />
        <Parallax ref={parallax} pages={5} style={{ top: "0", left: "0" }}>
          <ParallaxLayer
            offset={Pages.HOME}
            speed={0}
            style={{ backgroundColor: "#e4c1f9ff" }}
            onClick={() => parallax.current.scrollTo(Pages.EXPERIENCE)}
          />
          <ParallaxLayer
            offset={Pages.EXPERIENCE}
            speed={0}
            style={{ backgroundColor: "#d0f4deff" }}
            onClick={() => parallax.current.scrollTo(Pages.STACK)}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={Pages.STACK}
            speed={0}
            style={{ backgroundColor: "#ffb4a2" }}
            onClick={() => parallax.current.scrollTo(Pages.FACTS)}
          />
          <ParallaxLayer
            offset={Pages.FACTS}
            speed={0}
            style={{ backgroundColor: "#a9def9ff" }}
            onClick={() => parallax.current.scrollTo(Pages.CONTACT)}
          />
          <ParallaxLayer
            offset={Pages.CONTACT}
            speed={0}
            style={{ backgroundColor: "#fcf6bdff" }}
            onClick={() => parallax.current.scrollTo(Pages.HOME)}
          />
          <ParallaxLayer
            offset={Pages.HOME}
            speed={0}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ParallaxDataSection>
              <HomeSection />
            </ParallaxDataSection>
          </ParallaxLayer>
          <ParallaxLayer
            offset={Pages.EXPERIENCE}
            speed={1.5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ParallaxDataSection>
              <TimelineSection />
            </ParallaxDataSection>
          </ParallaxLayer>
          <ParallaxLayer
            offset={Pages.STACK}
            speed={1.5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ParallaxDataSection>
              <StackSection />
            </ParallaxDataSection>
          </ParallaxLayer>
          {createFunFactClouds(Pages.FACTS)}
          <ParallaxLayer
            offset={Pages.CONTACT}
            speed={1.5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ParallaxDataSection>
              <ContactsSection />
            </ParallaxDataSection>
          </ParallaxLayer>
        </Parallax>
      </ThemeProvider>
    </>
  );
}

const NavbarContainer = styled(Toolbar)`
  display: flex;
  justify-content: center;
  z-index: 100;
  background-color: #121212;
`;
const NavButton = styled(Button)`
  align: center;
`;

const ParallaxDataSection = styled("div")`
  width: 100%;
  margin: 100px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
`;
