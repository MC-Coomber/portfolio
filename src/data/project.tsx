import Page from "./page";

export default interface Project {
  name: string;
  imageUrl: string;
  id: string;
  company: string;
  role: string;
  services: string[];
  description: string;
  pages: Page[];
}
