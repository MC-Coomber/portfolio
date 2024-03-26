"use client";
import Content from "@/components/home/content";
import { Header } from "@/components/home/header";
import { Chevron } from "@/components/home/chevron";
import { useRef } from "react";
import { Footer } from "@/components/home/footer";
import { Project } from "@/sanity/types";

export default function Home({ projects }: HomeProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="">
      <Header />
      <Content ref={contentRef} projects={projects} />
      <Chevron
        onClick={() =>
          contentRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      />
      <Footer />
    </div>
  );
}

interface HomeProps {
  projects: Project[]
}