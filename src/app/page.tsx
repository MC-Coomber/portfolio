"use client";
import Sidebar from "@/components/sidebar";
import Content from "@/components/content";
import "./globals.css";
import { useState } from "react";
import { ImageContext } from "@/context/image-context";

export default function Home() {
  const [currentImage, setCurrentImage] = useState<string>();

  return (
    <div className="max-w-screen lg:flex pr-12 lg:pr-24 py-12 lg:py-0 gap-16 bg-secondary-blue text-text-color">
      <ImageContext.Provider value={{ currentImage, setCurrentImage }}>
        <Sidebar />
        <Content />
      </ImageContext.Provider>
    </div>
  );
}
