export type CellType =
  | "십성"
  | "천간"
  | "지지"
  | "십이운성"
  | "십이신살"
  | "귀인";

export interface BaseItem {
  title: string;
  hanja: string;
}

export interface jijangGan extends BaseItem {
  subHanja: string;
  fiveCircleColor: string;
}

export interface SajuData {
  십성: BaseItem[];
  천간: jijangGan;
  지지: jijangGan;
  십이운성: BaseItem;
  십이신살: BaseItem;
  귀인: BaseItem[];
}

export interface CellProps {
  type: CellType;
  data: SajuData;
  index?: number;
}
