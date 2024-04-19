"use client";
import { ThemeProvider } from "@emotion/react";
import {
  GitHub,
  LinkedIn,
  MailOutlineSharp,
  PhoneSharp,
} from "@mui/icons-material";
import {
  Alert,
  Snackbar,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import { ReactNode, useState } from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function navigate(url: string) {
  window.location.href = url;
}

async function clipboard(value: string) {
  try {
    await navigator.clipboard.writeText(value);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

function ContactItem({
  color,
  description,
  icon,
  onClick,
}: {
  color: string;
  description: string;
  icon: ReactNode;
  onClick: () => void;
}) {
  return (
    <ContactItemContainer onClick={onClick}>
      <ContactButton $color={color}>
        {icon}
        <Typography color="text.secondary" style={{ textAlign: "center" }}>
          {description}
        </Typography>
      </ContactButton>
    </ContactItemContainer>
  );
}

export default function ContactsSection() {
  const [open, setOpen] = useState(false);
  const copy = async (value: string) => {
    await clipboard(value);
    setOpen(true);
  };
  return (
    <ThemeProvider theme={theme}>
      <ContactsContainer>
        <ContactItem
          color="#5f0f40"
          description="lara.janecka@gmail.com"
          icon={<MailOutlineSharp  />}
          onClick={async () => await copy("lara.janecka@gmail.com")}
        />
        <ContactItem
          color="#fb8b24"
          description="github.com/larajanecka"
          icon={<GitHub />}
          onClick={() => navigate("https://github.com/larajanecka")}
        />
        <ContactItem
          color="#0f4c5c"
          description="(925) 297-9529"
          icon={<PhoneSharp />}
          onClick={async () => await copy("9252979529")}
        />
        <ContactItem
          color="#9a031e"
          description="linkedin.com/in/larajanecka/"
          icon={<LinkedIn />}
          onClick={() => navigate("https://www.linkedin.com/in/larajanecka/")}
        />
      </ContactsContainer>
      <CopySnackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Copied to Clipboard
        </Alert>
      </CopySnackbar>
    </ThemeProvider>
  );
}

const ContactsContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
  margin: 20px;

  > :nth-child(odd) {
    justify-content: end;
  }
`;

const ContactItemContainer = styled("div")`
  display: flex;
`;

const ContactButton = styled("div")<{ $color: string }>`
  background-color: ${(props) => props.$color};
  width: 200px;
  height: 200px;
  border-radius: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > svg {
    height: 70px;
    width: 70px;
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

const CopySnackbar = styled(Snackbar)`
  padding-top: 30%;
`;
