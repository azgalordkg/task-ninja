import {
  ArrowDownSquare,
  Calendar,
  Label,
  TimeCircle,
} from "@/components/icons";
import { COLORS } from "@/constants/colors";

export const DASHBOARD_LIST = [
  {
    navigationName: "Tasks",
    prependIcon: ArrowDownSquare,
    title: "TODAY",
    color: COLORS.GREEN,
  },
  {
    navigationName: "Tasks",
    prependIcon: TimeCircle,
    title: "UNSCHEDULED",
    color: COLORS.RED,
  },
  {
    navigationName: "Upcoming",
    prependIcon: Calendar,
    title: "UPCOMING",
    color: COLORS.BLUE,
  },
  {
    navigationName: "LabelSettings",
    prependIcon: Label,
    title: "LABELS",
    color: COLORS.YELLOW,
  },
];
