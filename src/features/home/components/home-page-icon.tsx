import {
  Boxes,
  ChartNoAxesColumnIncreasing,
  Database,
  FileText,
  PackageCheck,
  Settings,
  ShoppingCart,
  Sparkles,
  Users,
} from "lucide-react";
import type { ComponentProps } from "react";
import type { HomePageIconName } from "../types";

const icons = {
  boxes: Boxes,
  chart: ChartNoAxesColumnIncreasing,
  database: Database,
  "file-text": FileText,
  "package-check": PackageCheck,
  settings: Settings,
  "shopping-cart": ShoppingCart,
  sparkles: Sparkles,
  users: Users,
} satisfies Record<HomePageIconName, typeof Boxes>;

type Props = ComponentProps<typeof Boxes> & {
  name: HomePageIconName;
};

export function HomePageIcon({ name, ...props }: Props) {
  const Icon = icons[name];

  return <Icon {...props} />;
}
