import { ElementType } from "react";
import { CheckCircle, Briefcase, TrendingUp } from "lucide-react";

export interface WhyMeruItem {
  id: number;
  icon: ElementType;
  i18nKey: string;
}

export const whyMeru: WhyMeruItem[] = [
  {
    id: 1,
    icon: CheckCircle,
    i18nKey: "tailored",
  },
  {
    id: 2,
    icon: Briefcase,
    i18nKey: "expertise",
  },
  {
    id: 3,
    icon: TrendingUp,
    i18nKey: "impact",
  },
];
