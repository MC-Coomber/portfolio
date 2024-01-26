"use client";
import Content from "@/components/home/content";
import "./globals.css";
import { Header } from "@/components/home/header";
import { Chevron } from "@/components/home/chevron";
import { useRef } from "react";

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="">
      <Header />
      <Content ref={contentRef} />
      <Chevron
        onClick={() =>
          contentRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      />
    </div>
  );
}
