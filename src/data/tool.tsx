import Github from "../assets/github.png";
import Flutter from "../assets/flutter.png";
import React from "../assets/react.png";
import GithubActions from "../assets/github-actions.png";
import Figma from "../assets/figma.png";
import { StaticImageData } from "next/image";

export class Tool {
  name: string;
  id: string | undefined;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }

  get image(): StaticImageData | undefined {
    if (!this.id) return undefined;
    return imageMap[this.id];
  }
}

const imageMap: Record<string, StaticImageData> = {
  github: Github,
  "github-actions": GithubActions,
  react: React,
  flutter: Flutter,
  figma: Figma,
};
