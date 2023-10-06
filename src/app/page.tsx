import Sidebar from "@/components/sidebar";
import Content from "@/components/content";
import "./globals.css";

export default function Home() {
  return (
    <div className="h-full max-w-screen lg:flex px-12 lg:px-24 py-12 lg:py-0 gap-4 bg-secondary-blue text-text-color">
      <Sidebar />
      <Content />
    </div>
  );
}
