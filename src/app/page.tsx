"use client";
import Content from "@/components/content";
import "./globals.css";
import { FirstView } from "@/components/header";
import { Chevron } from "@/components/chevron";
import { useRef } from "react";

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="">
      <FirstView />
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
