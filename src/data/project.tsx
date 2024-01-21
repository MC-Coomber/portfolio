import Page from "./page";

export default interface Project {
  name: string;
  id: string;
  company: string;
  description: string;
  imageUrl: string;
  pages: Page[];
}
