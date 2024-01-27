import Project from "./project";
import { Tool } from "./tool";

export const allWork = [
  {
    name: "Zeta Icon Library",
    id: "zeta-icon-library",
    company: "Zebra Technologies",
    role: "Lead Front End Developer",
    description:
      "As part of Zebra's new Zeta Design system, I created a new workflow to make the icon library maintainable by designers and more accessible to developers by leveraging Figma's API and Github actions. I also created a web app in React to display the contents of the icon library and make it easily accessible for developers.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-8d3d7.appspot.com/o/mikecoomber99%40gmail.com%2FFrame%202.png?alt=media&token=924685f7-f07e-45e4-bdeb-82556924ea33",
    pages: [
      {
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/portfolio-8d3d7.appspot.com/o/mikecoomber99%40gmail.com%2Fzebra-icons-old.png?alt=media&token=17f137d0-8671-4934-ac73-fd4b069413b5",
        imageCaption: "The old Zebra icon library built in Polymer.",
        title: "The Problem",
        text: "Originally, Zebra's icon library was maintained by developers. This made it hard for the designers to keep track of what icons had gone in the library, and every time a new icon was created a developer had to add it to the source code of the site and redeploy it.\n On top of this, Zebra had component libraries in both Flutter and React, and each of those repositories was maintaining it's own icon library.",
      },
      {
        title: "The Solution",
        text: "Our designers already had an icon library in Figma. By treating this as a single source of truth for all of our component libraries and the website, we could ensure that any developer using our new Zeta components could have access to all the icons that the designers did. Additionally, it meant the icon library would be maintained solely by the design team and take the responsability off of developers.",
      },
      {
        imageUrl:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQbxKU661kNI0m7Yw0xBW5SrN5Uc56_8cq4t4OhaYMXIvPhIgJo8v7H2d3PDtIDsfQt",
        title: "Implementation",
        text: "This was a project where I did stuff and things and stuff and things",
      },
    ],
    tools: [
      new Tool("React", "react"),
      new Tool("Figma APIs", "figma"),
      new Tool("Github Actions", "github-actions"),
    ],
  } as Project,
  {
    name: "Employee Self Service (ESS)",
    id: "proj-1",
    company: "Zebra Technologies",
    role: "Front End Development Team Lead",
    imageUrl:
      "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQbxKU661kNI0m7Yw0xBW5SrN5Uc56_8cq4t4OhaYMXIvPhIgJo8v7H2d3PDtIDsfQt",
    pages: [
      {
        imageUrl:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQbxKU661kNI0m7Yw0xBW5SrN5Uc56_8cq4t4OhaYMXIvPhIgJo8v7H2d3PDtIDsfQt",
        text: "This was a project where I did stuff and things and stuff and things",
      },
    ],
  } as Project,
  {
    name: "Test Project",
    id: "proj-1",

    company: "Zebra",
    role: "Test desc",
    imageUrl:
      "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQbxKU661kNI0m7Yw0xBW5SrN5Uc56_8cq4t4OhaYMXIvPhIgJo8v7H2d3PDtIDsfQt",
    pages: [
      {
        imageUrl:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQbxKU661kNI0m7Yw0xBW5SrN5Uc56_8cq4t4OhaYMXIvPhIgJo8v7H2d3PDtIDsfQt",
        text: "This was a project where I did stuff and things and stuff and things",
      },
    ],
  } as Project,
  {
    name: "Test Project",
    id: "proj-1",

    company: "Zebra",
    role: "Test desc",
    imageUrl:
      "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQbxKU661kNI0m7Yw0xBW5SrN5Uc56_8cq4t4OhaYMXIvPhIgJo8v7H2d3PDtIDsfQt",
    pages: [
      {
        imageUrl:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQbxKU661kNI0m7Yw0xBW5SrN5Uc56_8cq4t4OhaYMXIvPhIgJo8v7H2d3PDtIDsfQt",
        text: "This was a project where I did stuff and things and stuff and things",
      },
    ],
  } as Project,
  {
    name: "Test Project",
    id: "proj-1",

    company: "Zebra",
    role: "Test desc",
    imageUrl:
      "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQbxKU661kNI0m7Yw0xBW5SrN5Uc56_8cq4t4OhaYMXIvPhIgJo8v7H2d3PDtIDsfQt",
    pages: [
      {
        imageUrl:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQbxKU661kNI0m7Yw0xBW5SrN5Uc56_8cq4t4OhaYMXIvPhIgJo8v7H2d3PDtIDsfQt",
        text: "This was a project where I did stuff and things and stuff and things",
      },
    ],
  } as Project,
  {
    name: "Test Project",
    id: "proj-1",

    company: "Zebra",
    role: "Test desc",
    imageUrl:
      "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQbxKU661kNI0m7Yw0xBW5SrN5Uc56_8cq4t4OhaYMXIvPhIgJo8v7H2d3PDtIDsfQt",
    pages: [
      {
        imageUrl:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQbxKU661kNI0m7Yw0xBW5SrN5Uc56_8cq4t4OhaYMXIvPhIgJo8v7H2d3PDtIDsfQt",
        text: "This was a project where I did stuff and things and stuff and things",
      },
    ],
  } as Project,
  {
    name: "Test Project",
    id: "proj-1",

    company: "Zebra",
    role: "Test desc",
    imageUrl:
      "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQbxKU661kNI0m7Yw0xBW5SrN5Uc56_8cq4t4OhaYMXIvPhIgJo8v7H2d3PDtIDsfQt",
    pages: [
      {
        imageUrl:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQbxKU661kNI0m7Yw0xBW5SrN5Uc56_8cq4t4OhaYMXIvPhIgJo8v7H2d3PDtIDsfQt",
        text: "This was a project where I did stuff and things and stuff and things",
      },
    ],
  } as Project,
];
