import Page from "./page";
import { Tool } from "./tool";

export default interface Project {
  name: string;
  imageUrl: string;
  id: string;
  company: string;
  role: string;
  tools: Tool[];
  description: string;
  pages: Page[];
}
