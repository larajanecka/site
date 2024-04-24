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
import Image from "next/image";
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
    <TimelineSeparator>
      {color === "none" ? (
        <NoFillDot>{children}</NoFillDot>
      ) : (
        <FillDot $color={color}>{children}</FillDot>
      )}
      <TimelineConnector style={{ backgroundColor: grey[900] }} />
    </TimelineSeparator>
  );
}

function Logo({ src }: { src: string }) {
  const imageSize = 30;
  return <Image alt="logo" src={src} width={imageSize} height={imageSize} />;
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
              "Refactored invoice approval flow into work queue based process",
              "Organized multiple team building events",
              "Lead creation of dynamic discount application via user settings  tool",
              "Built user onboarding to payments system",
              "Facilitated conversations to resolve ambiguities in project requirements",
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
          <HighlightsList
            entries={[
              "Conducted over 100 technical interview",
              "Sole maintainer of tool for processing $400 million of business annually",
              "Contributed to system overhaul from monolith to service oriented architecture",
              "Initiated and participated in committee to redesign technical interview process",
              "Rebuilt complex price calculation system to accommodate future expansions and increased accuracy requirements",
              "Built UI for ingesting client's book of business to facilitate contract negotiations",
              "Created scheduled job to keep multiple sources of data in sync over high traffic periods",
              "Co-founded women in engineering ERG",
              "Wrote complete system documentation for 2 codebases and collaborated on user guide",
              "Refactored csv ingestion engine into pipeline architecture and built out comprehensive test suite to do so safely",
              "Represented team in multiple company and org wide presentations",
              "Attended multiple recruiting and outreach events",
              "Created onboarding documentation for new teammates",
              "Collaborated across team lines to gather business requirements from stakeholders and distribute work across developers",
              "Adapted geographic area tool to accommodate differing specificity use case",
              "Presented to stakeholders to explain importance of paying off tech debt",
            ]}
          />
        </Entry>
      </Item>

      <Item>
        <DateField dates="Jan 2016 - Apr 2016" />
        <Separator color="none">
          <Logo src="/logos/zazzle.svg" />
        </Separator>
        <Entry title="Zazzle" position="Mobile Development Intern">
          <HighlightsList
            entries={[
              "Built API endpoint for surfacing product data",
              "Added product display feature to IOS and Android natively",
            ]}
          />
        </Entry>
      </Item>

      <Item>
        <DateField dates="May 2015 - Aug 2015" />
        <Separator color="none">
          <Logo src="/logos/extreme networks.jpeg" />
        </Separator>
        <Entry title="Extreme Networks" position="Computer Programmer">
        <HighlightsList entries={[
          "Created UI for users to configure guest password generation",
          "Built tool to design device layout for wireless network across buildings"
        ]}/>
        </Entry>
      </Item>

      <Item>
        <DateField dates="Jan 2014 - Apr 2014 & Sept 2014 - Dec 2014" />
        <Separator color="none">
          <Logo src="/logos/auvik.svg" />
        </Separator>
        <Entry title="Auvik" position="Software Engineering Intern">
          <HighlightsList
            entries={[
              "Implemented network simulator as seen by SNMP polling",
              "Expansion of D3 and Backbone based data displays",
              "PDF generation of network displays",
            ]}
          />
        </Entry>
      </Item>

      <Item>
        <DateField dates="Sept 2012 - Apr 2017" />
        <Separator color="none">
          <Logo src="/logos/waterloo.png" />
        </Separator>
        <Entry
          title="University"
          position="Bachelors of Software Engineering"
        ></Entry>
      </Item>

      <Item>
        <DateField dates="Nov 1993" />
        <Separator color="#ff99be">
          <ChildCareSharp />
        </Separator>
        <Entry title="Birth" position="Human Intern">
        {"According to my mother I was adorable. Everyone else uses the phrase\"oddly Churchill-ian\"."}
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
