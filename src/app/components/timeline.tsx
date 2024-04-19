"use client";

import { ChildCareSharp, QuestionMark } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Typography, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ReactNode } from "react";

function DateField({ dates }: { dates: string }) {
  return (
    <TimelineOppositeContent style={{ paddingTop: 16 }}>
      <Typography variant="body2" color="text.secondary">
        {dates}
      </Typography>
    </TimelineOppositeContent>
  );
}

function Entry({
  title,
  position,
  children,
}: {
  title: string;
  position?: string;
  children?: ReactNode;
}) {
  return (
    <TimelineContent>
      <Typography variant="h6" component="span" color="text.primary">
        {title}
      </Typography>
      {position != null ? (
        <Typography color="text.primary">
          <b>Title: </b>
          {position}
        </Typography>
      ) : null}
      {children != null ? (
        <Typography color="text.primary">{children}</Typography>
      ) : null}
    </TimelineContent>
  );
}

function Separator({
  children,
  color,
}: {
  children: ReactNode;
  color: "none" | string;
}) {
  return (
    <TimelineSeparator >
      {color === "none" ? (
        <NoFillDot>{children}</NoFillDot>
      ) : (
        <FillDot $color={color}>{children}</FillDot>
      )}
      <TimelineConnector style={{backgroundColor: grey[900]}}/>
    </TimelineSeparator>
  );
}

function Logo({ src }: { src: string }) {
  const imageSize = 30;
  return <img src={src} width={imageSize} height={imageSize} />;
}

function HighlightsList({ entries }: { entries: string[] }) {
  return (
    <Typography color="text.primary">
      <StyledList>
        {entries.map((entry, i) => (
          <li key={i}>{entry}</li>
        ))}
      </StyledList>
    </Typography>
  );
}

export default function TimelineSection() {
  return (
    <Timeline position="right">
      <Item>
        <DateField dates="??? - ???" />
        <Separator color="none">
          <QuestionMark color="action" />
        </Separator>
        <Entry title="Your Company Here" />
      </Item>

      <Item>
        <DateField dates="Jul 2022 - Sep 2022" />
        <Separator color="none">
          <Logo src="/logos/loop.png" />
        </Separator>
        <Entry title="Loop" position="Senior Software Engineer">
          <HighlightsList
            entries={[
              "Implemented system for processing invoices into payments via various Payment Service Providers",
              "Refactored invoice approval into work queue based process",
              "Organized multiple team building events",
              "Lead creation of dynamic discount application via user settings  tool",
              "Built user onboarding to payments system",
            ]}
          />
        </Entry>
      </Item>

      <Item>
        <DateField dates="Jul 2017 - Jul 2022" />
        <Separator color="none">
          <Logo src="/logos/flexport.png" />
        </Separator>
        <Entry title="Flexport" position="SWE Intern - SWE 2">
          <HighlightsList entries={[]} />
        </Entry>
      </Item>

      <Item>
        <DateField dates="Sept 2012 - Apr 2017" />
        <Separator color="none">
          <Logo src="/logos/waterloo.png" />
        </Separator>
        <Entry title="University" position="Software Engineering Student">
          TODO
        </Entry>
      </Item>

      <Item>
        <DateField dates="Nov 1993" />
        <Separator color="#ff99be">
          <ChildCareSharp />
        </Separator>
        <Entry title="Birth" position="Human Intern">
          According to my mother I was adorable. Everyone else uses the phrase
          "oddly Churchill-ian".
        </Entry>
      </Item>
    </Timeline>
  );
}

const StyledList = styled("ul")`
  list-style: disc;
`;

const Item = styled(TimelineItem)`
  &:before {
    display: none;
  }
`;

const FillDot = styled(TimelineDot)<{ $color: string }>`
  background-color: ${(props) => props.$color};
  box-shadow: none;
`;

const NoFillDot = styled(TimelineDot)`
  background-color: rgba(0, 0, 0, 0);
  box-shadow: none;
`;
