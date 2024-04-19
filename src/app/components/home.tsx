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
  width: 30%;
  margin: auto;
`;
const TextContainer = styled("div")`
  width: 50%;
`;
