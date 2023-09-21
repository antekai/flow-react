import { StyledLabel } from "./node-label.styles";
import {
  ExcelIcon,
  ChartIcon,
  HistogramIcon,
  FilterIcon,
  DateRangeIcon,
  DataCenterIcon,
  CropIcon,
  StatisticsIcon,
  SumIcon,
} from "../../assets";

interface NodeLabelProps {
  label: string;
  icon?: JSX.Element;
}

const NodeLabel = ({ label, icon }: NodeLabelProps) => (
  <StyledLabel>
    {icon}
    {label}
  </StyledLabel>
);

NodeLabel.excel = <NodeLabel label="Excel" icon={<ExcelIcon />} />;
NodeLabel.chart = <NodeLabel label="Chart" icon={<ChartIcon />} />;
NodeLabel.histogram = <NodeLabel label="Histogram" icon={<HistogramIcon />} />;
NodeLabel.filter = <NodeLabel label="Filter" icon={<FilterIcon />} />;
NodeLabel.dateRange = <NodeLabel label="Date Range" icon={<DateRangeIcon />} />;
NodeLabel.dataCenter = (
  <NodeLabel label="Data Center" icon={<DataCenterIcon />} />
);
NodeLabel.crop = <NodeLabel label="Crop" icon={<CropIcon />} />;
NodeLabel.statistics = (
  <NodeLabel label="Statistics" icon={<StatisticsIcon />} />
);
NodeLabel.sum = <NodeLabel label="Sum" icon={<SumIcon />} />;

export default NodeLabel;
