// we could get nodeData from backend as json

export type NodeName =
  | "excel"
  | "dataCenter"
  | "filter"
  | "dateRange"
  | "crop"
  | "statistics"
  | "chart"
  | "histogram"
  | "sum";

export type NodeType = "input" | "default" | "output";

export type NodeData = Record<NodeName, { label: string; type: NodeType }>;

const nodeData: NodeData = {
  excel: {
    label: "Excel",
    type: "input",
  },
  dataCenter: {
    label: "Data Center",
    type: "input",
  },
  filter: {
    label: "Filter",
    type: "default",
  },
  dateRange: {
    label: "Date",
    type: "default",
  },
  crop: {
    label: "Crop",
    type: "default",
  },
  statistics: {
    label: "Statistics",
    type: "output",
  },
  chart: {
    label: "Chart",
    type: "output",
  },
  histogram: {
    label: "Histogram",
    type: "output",
  },
  sum: {
    label: "Sum",
    type: "default",
  },
};

export default nodeData;
