import { CircleRounded } from "@mui/icons-material";
import {
  Box,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import { BarChart, BarElement, BarElementProps } from "@mui/x-charts";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});
enum CATEGORY {
  Basic = 1,
  Fundamentals = 2,
  Proficient = 3,
  Opinionated = 4,
  Master = 5,
}

const COLOR_MAP = {
  [CATEGORY.Basic]: "#00a6fb",
  [CATEGORY.Fundamentals]: "#0582ca",
  [CATEGORY.Proficient]: "#006494",
  [CATEGORY.Opinionated]: "#003554",
  [CATEGORY.Master]: "#051923",
};

type LanguageData = {
  name: string;
  value: CATEGORY;
  extra?: string;
};
const DataSet: LanguageData[] = [
  {
    name: "Typescript",
    value: CATEGORY.Proficient,
  },
  {
    name: "Ruby on Rails",
    value: CATEGORY.Opinionated,
  },
];

function Legend() {
  return (
    <LegendContainer>
      <CircleRounded style={{ color: COLOR_MAP[CATEGORY.Basic] }} />
      <LegendEntry>
        <Typography variant="h6" component="span" color="text.primary">
          Basic
        </Typography>
        <Typography color="text.secondary">TODO</Typography>
      </LegendEntry>
      <CircleRounded style={{ color: COLOR_MAP[CATEGORY.Fundamentals] }} />
      <LegendEntry>
        <Typography variant="h6" component="span" color="text.primary">
          Fundamentals
        </Typography>
        <Typography color="text.secondary">TODO</Typography>
      </LegendEntry>
      <CircleRounded style={{ color: COLOR_MAP[CATEGORY.Proficient] }} />
      <LegendEntry>
        <Typography variant="h6" component="span" color="text.primary">
          Proficient
        </Typography>
        <Typography color="text.secondary">TODO</Typography>
      </LegendEntry>
      <CircleRounded style={{ color: COLOR_MAP[CATEGORY.Opinionated] }} />
      <LegendEntry>
        <Typography variant="h6" component="span" color="text.primary">
          Opinionated
        </Typography>
        <Typography color="text.secondary">TODO</Typography>
      </LegendEntry>
      <CircleRounded style={{ color: COLOR_MAP[CATEGORY.Master] }} />
      <LegendEntry>
        <Typography variant="h6" component="span" color="text.primary">
          Master
        </Typography>
        <Typography color="text.secondary">TODO</Typography>
      </LegendEntry>
    </LegendContainer>
  );
}

export default function StackSection() {
  return (
    <ThemeProvider theme={darkTheme}>
      <StackContainer>
        <ChartContainer>
          <BarChart
            skipAnimation
            layout="horizontal"
            grid={{ vertical: true }}
            height={500}
            width={1000}
            margin={{
              left: 120,
            }}
            xAxis={[
              {
                dataKey: "value",
                tickMinStep: 1,
                valueFormatter: (val) => CATEGORY[val],
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
    </ThemeProvider>
  );
}

const LegendContainer = styled("div")`
  flex: 1;
  padding: 12px;
  display: grid;
  grid-template-columns: 40px auto;
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
