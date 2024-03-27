"use client";
import { Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import styles from "./stack.module.css";
import { useState } from "react";
import styled from "styled-components";

type StackEntryType = {
  name: string;
  icon: string;
  description: string;
};

const STACK_DATA: StackEntryType[] = [
  {
    name: "Typescript",
    icon: "icons/typescript-icon.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper id urna ut dictum. In hac habitasse platea dictumst. Maecenas dignissim dolor a mollis faucibus. Aliquam ac iaculis mi, faucibus condimentum sem. Vestibulum pretium ligula ut libero auctor, non facilisis est ullamcorper. Aliquam facilisis erat felis, pharetra facilisis mauris mattis id. Sed eu sapien sed est tincidunt bibendum eget pulvinar mauris. Sed tincidunt pretium lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "React",
    icon: "icons/react-icon.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper id urna ut dictum. In hac habitasse platea dictumst. Maecenas dignissim dolor a mollis faucibus. Aliquam ac iaculis mi, faucibus condimentum sem. Vestibulum pretium ligula ut libero auctor, non facilisis est ullamcorper. Aliquam facilisis erat felis, pharetra facilisis mauris mattis id. Sed eu sapien sed est tincidunt bibendum eget pulvinar mauris. Sed tincidunt pretium lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Ruby on Rails",
    icon: "icons/rails-icon.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper id urna ut dictum. In hac habitasse platea dictumst. Maecenas dignissim dolor a mollis faucibus. Aliquam ac iaculis mi, faucibus condimentum sem. Vestibulum pretium ligula ut libero auctor, non facilisis est ullamcorper. Aliquam facilisis erat felis, pharetra facilisis mauris mattis id. Sed eu sapien sed est tincidunt bibendum eget pulvinar mauris. Sed tincidunt pretium lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function StackEntry({
  entry,
  // onClick,
}: {
  entry: StackEntryType;
  // onClick: (entry: StackEntryType) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <StyledCard>
      <StackImg src={entry.icon} onClick={() => setOpen(!open)} />
      <StackData hidden={!open}>
        <StackTitle>{entry.name}</StackTitle>
        <StackDescription>{entry.description}</StackDescription>
      </StackData>
    </StyledCard>
  );
}

export default function Home() {
  const handleEntryClicked = () => {};

  return (
    <CardContainer>
      {STACK_DATA.map((entry) => (
        <StackEntry
          entry={entry}
          // onClick={handleEntryClicked}
        />
      ))}
    </CardContainer>
  );
}

const StackData = styled.div`
  color: black;
  padding: 14px;
`;
const StackTitle = styled.div`
  font-size: 24px;
  padding-bottom: 10px;
`;
const StackDescription = styled.div`
  font-size: 14px;
`;

const CardContainer = styled.div`
  display: flex;
`;

const StyledCard = styled.div`
  margin: 20px;
  background: white;
  display: flex;
`;

const StackImg = styled(CardImg)`
  height: 300px;
  width: 300px;
`;
