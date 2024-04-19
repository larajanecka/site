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

// TODO: make the nav bar reactive: https://mui.com/material-ui/react-app-bar/#responsive-app-bar-with-drawer
// TODO: url params

const darkTheme = createTheme({
  palette: {
    mode: "dark",
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
          <NavButton>Resume</NavButton>
        </Typography>
      </NavbarContainer>
    </AppBar>
  );
}
export default function Home() {
  const parallax = useRef<IParallax>(null!);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navigation
          onClick={(page: Pages) => parallax.current.scrollTo(page)}
        />
        <Parallax ref={parallax} pages={5} style={{ top: "0", left: "0" }}>
          <ParallaxLayer
            offset={0}
            speed={0}
            style={{ backgroundColor: "#69DDFF" }}
            onClick={() => parallax.current.scrollTo(1)}
          />
          <ParallaxLayer
            offset={Pages.EXPERIENCE}
            speed={0}
            style={{ backgroundColor: "#BE92A2" }}
            onClick={() => parallax.current.scrollTo(2)}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0}
            style={{ backgroundColor: "#D8E1FF" }}
            onClick={() => parallax.current.scrollTo(3)}
          />
          <ParallaxLayer
            offset={3}
            speed={0}
            style={{ backgroundColor: "#96CDFF" }}
            onClick={() => parallax.current.scrollTo(4)}
          />
          <ParallaxLayer
            offset={4}
            speed={0}
            style={{ backgroundColor: "#DBBADD" }}
            onClick={() => parallax.current.scrollTo(1)}
          />
          <ParallaxLayer
            offset={Pages.EXPERIENCE}
            speed={1}
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
            speed={1}
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
            speed={1}
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
