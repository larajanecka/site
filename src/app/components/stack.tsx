import { CircleRounded } from "@mui/icons-material";
import { Typography, styled } from "@mui/material";
import { BarChart, BarElement } from "@mui/x-charts";

enum LEVEL {
  Basic = 1,
  Fundamentals = 2,
  Proficient = 3,
  Opinionated = 4,
  Master = 5,
}

const COLOR_MAP = {
  [LEVEL.Basic]: "#00a6fb",
  [LEVEL.Fundamentals]: "#0582ca",
  [LEVEL.Proficient]: "#006494",
  [LEVEL.Opinionated]: "#003554",
  [LEVEL.Master]: "#051923",
};

type LanguageData = {
  name: string;
  value: LEVEL;
  extra?: string;
};
const DataSet: LanguageData[] = [
  {
    name: "Typescript",
    value: LEVEL.Proficient,
  },
  {
    name: "Ruby on Rails",
    value: LEVEL.Opinionated,
  },
  {
    name: "Postgres",
    value: LEVEL.Opinionated,
  },
  {
    name: "React",
    value: LEVEL.Proficient,
  },
  {
    name: "GraphQL",
    value: LEVEL.Proficient,
  },
  {
    name: "Prisma",
    value: LEVEL.Proficient,
  },
  {
    name: "NodeJS",
    value: LEVEL.Proficient,
  },
  {
    name: "NestJS",
    value: LEVEL.Fundamentals,
  },
  {
    name: "Jest",
    value: LEVEL.Opinionated,
  },
  {
    name: "Sorbet",
    value: LEVEL.Opinionated,
  },
  {
    name: "Rspec",
    value: LEVEL.Opinionated,
  },
  {
    name: "HTML/Css",
    value: LEVEL.Proficient,
  },
  {
    name: "GraphQL",
    value: LEVEL.Proficient,
  },
  {
    name: "Flow",
    value: LEVEL.Opinionated,
  },
  {
    name: "GraphQL",
    value: LEVEL.Proficient,
  },
  {
    name: "Datadog",
    value: LEVEL.Fundamentals,
  },
  {
    name: "ElasticSearch",
    value: LEVEL.Proficient,
  },
  {
    name: "Storybook",
    value: LEVEL.Fundamentals,
  },
  {
    name: "Fullstory",
    value: LEVEL.Fundamentals,
  },
  {
    name: "Webpack",
    value: LEVEL.Fundamentals,
  },
  {
    name: "Git",
    value: LEVEL.Opinionated,
  },
  {
    name: "Selenium",
    value: LEVEL.Fundamentals,
  },

  {
    name: "Project Planning",
    value: LEVEL.Opinionated,
  },
  {
    name: "Documentation",
    value: LEVEL.Master,
  },
  {
    name: "Collaboration",
    value: LEVEL.Proficient,
  },
  {
    name: "Interviewing",
    value: LEVEL.Opinionated,
  },
  {
    name: "Event Planning",
    value: LEVEL.Fundamentals,
  },
  {
    name: "Mentorship",
    value: LEVEL.Fundamentals,
  },
  {
    name: "Presenting",
    value: LEVEL.Proficient,
  },

  {
    name: "Kafka",
    value: LEVEL.Fundamentals,
  },
  {
    name: "Redis",
    value: LEVEL.Fundamentals,
  },
  {
    name: "GRPC",
    value: LEVEL.Fundamentals,
  },
  {
    name: "AWS S3",
    value: LEVEL.Fundamentals,
  },
  {
    name: "AWS EC2",
    value: LEVEL.Basic,
  },
  {
    name: "Docker",
    value: LEVEL.Fundamentals,
  },

  {
    name: "Figma",
    value: LEVEL.Basic,
  },
  {
    name: "Jira",
    value: LEVEL.Fundamentals,
  },
  {
    name: "Salesforce",
    value: LEVEL.Basic,
  },
  {
    name: "Agile/Scrum",
    value: LEVEL.Opinionated,
  },
  {
    name: "Games",
    value: LEVEL.Master,
  },
];

function Legend() {
  return (
    <LegendContainer>
      <CircleRounded style={{ color: COLOR_MAP[LEVEL.Basic] }} />
      <LegendEntry>
        <Typography variant="h6" component="span" color="text.primary">
          Basic
        </Typography>
        <Typography color="text.secondary">
          Can operate within and expand upon existing implementations.
        </Typography>
      </LegendEntry>
      <CircleRounded style={{ color: COLOR_MAP[LEVEL.Fundamentals] }} />
      <LegendEntry>
        <Typography variant="h6" component="span" color="text.primary">
          Fundamentals
        </Typography>
        <Typography color="text.secondary">
          Could implement anything the system was designed to accomodate.
        </Typography>
      </LegendEntry>
      <CircleRounded style={{ color: COLOR_MAP[LEVEL.Proficient] }} />
      <LegendEntry>
        <Typography variant="h6" component="span" color="text.primary">
          Proficient
        </Typography>
        <Typography color="text.secondary">
          Could implement any feature using system.
        </Typography>
      </LegendEntry>
      <CircleRounded style={{ color: COLOR_MAP[LEVEL.Opinionated] }} />
      <LegendEntry>
        <Typography variant="h6" component="span" color="text.primary">
          Opinionated
        </Typography>
        <Typography color="text.secondary">
          Understands the system well enough to have formed opinions on best
          practices.
        </Typography>
      </LegendEntry>
      <CircleRounded style={{ color: COLOR_MAP[LEVEL.Master] }} />
      <LegendEntry>
        <Typography variant="h6" component="span" color="text.primary">
          Master
        </Typography>
        <Typography color="text.secondary">
          Intimately familiar with inner workings and implementation details.
        </Typography>
      </LegendEntry>
    </LegendContainer>
  );
}

export default function StackSection() {
  return (
    <StackContainer>
      <ChartContainer>
        <BarChart
          skipAnimation
          layout="horizontal"
          grid={{ vertical: true }}
          height={2000}
          width={1000}
          margin={{
            left: 120,
          }}
          xAxis={[
            {
              dataKey: "value",
              tickMinStep: 1,
              valueFormatter: (val) => LEVEL[val],
            },
          ]}
          yAxis={[
            {
              scaleType: "band",
              dataKey: "name",
            },
          ]}
          dataset={DataSet}
          series={[
            {
              dataKey: "value",
            },
          ]}
          slots={{
            bar: (props: any) => {
              const index = props.ownerState.dataIndex;
              const value = DataSet[index].value;
              const color = COLOR_MAP[value];

              return (
                <BarElement
                  id={index}
                  dataIndex={index}
                  {...props}
                  style={{
                    ...props.style,
                    fill: color,
                  }}
                />
              );
            },
          }}
        />
      </ChartContainer>
      <Legend />
    </StackContainer>
  );
}

const LegendContainer = styled("div")`
  flex: 1;
  margin-top: 50px;
  padding: 20px;
  display: grid;
  grid-template-columns: 40px auto;
  grid-auto-rows: min-content;
  grid-row-gap: 30px;
`;
const LegendEntry = styled("div")``;

const ChartContainer = styled("div")`
  flex: 2;
  display: flex;
  align-items: center;
`;
const StackContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
