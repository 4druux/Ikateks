import {
  Target,
  ClipboardCheck,
  FileText,
  Handshake,
  Orbit,
  Gauge,
  Rocket,
  TrendingUp,
  FileSearch,
} from "lucide-react";
import { ElementType } from "react";

export interface StaticServiceItem {
  id: number;
  icon: ElementType;
  i18nKey: string;
}

export interface TranslatedServiceItem extends StaticServiceItem {
  title: string;
  description: string;
  overviewMethodology: string[];
  keywords: string[];
}

export const services: StaticServiceItem[] = [
  { id: 1, icon: Target, i18nKey: "marketEntry" },
  { id: 2, icon: ClipboardCheck, i18nKey: "feasibilityStudy" },
  { id: 3, icon: FileSearch, i18nKey: "competitorIntelligence" },
  { id: 4, icon: FileText, i18nKey: "businessPlan" },
  { id: 5, icon: Handshake, i18nKey: "corporateAction" },
  { id: 6, icon: Orbit, i18nKey: "transformation" },
  { id: 7, icon: Gauge, i18nKey: "operationalExcellence" },
  { id: 8, icon: Rocket, i18nKey: "implementation" },
  { id: 9, icon: TrendingUp, i18nKey: "investmentAdvisory" },
];
