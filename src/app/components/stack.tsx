import { ThemeProvider, createTheme, styled } from "@mui/material";
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

export default function StackSection() {
  return (
    <ThemeProvider theme={darkTheme}>
      <StackContainer>
        <BarChart
          skipAnimation
          layout="horizontal"
          grid={{ vertical: true }}
          height={500}
          width={1000}
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
              const index = props.ownerState.dataIndex
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
      </StackContainer>
    </ThemeProvider>
  );
}

const StackContainer = styled("div")`
  display: flex;
  flex-direction: row;
`;
