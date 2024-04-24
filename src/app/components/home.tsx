import { ThemeProvider, Typography, createTheme, styled } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});
export default function HomeSection() {
  return (
    <ThemeProvider theme={theme}>
      <HomeContainer>
        <LogoImage src="logos/personal.png" />
        <TextContainer>
          <Typography variant="h2" style={{ textAlign: "center" }}>
            Who am I?
          </Typography>
          <Typography variant="body1">
            I’m a fullstack web developer with a deep love of large, complex
            domains. In particular I gravitate towards tasks usually no one
            wants such as refactoring gnarly codebases, document writing, and
            process refinement. I onboard quickly to new systems and excel and
            getting everyone on the same page. From debating engineering trade
            offs to project kick off meetings, I’m at my happiest getting things
            done, no matter what part of the project it is. If you’re looking
            for a team player with a passion for clean code and efficient
            processes, you need look no farther. Warning: I will attempt to
            start a board game night.
          </Typography>
        </TextContainer>
      </HomeContainer>
    </ThemeProvider>
  );
}

const HomeContainer = styled("div")`
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoImage = styled("img")`
  width: 200px;
  margin-left: auto;
  margin-right: 200px
`;
const TextContainer = styled("div")`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
