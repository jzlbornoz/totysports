type Sizes = "S" | "M" | "L" | "XL";
type Seasons = "22/23" | "23/24" | "Actual";

export interface JerseyModel {
  id: number;
  name: string;
  size: Sizes | Sizes[];
  price: number;
  sale: number;
  team: string;
  players?: string | string[];
  season: Seasons;
  stock: number;
  technology: string;
  link: string
}
