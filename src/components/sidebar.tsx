import Image from "next/image";

export default function Sidebar() {
  return (
    <header className="flex flex-col lg:w-1/2 lg:max-h-screen lg:sticky lg:py-24 top-0">
      <h1 className="text-4xl font-bold">Mike Coomber</h1>
      <h2 className="text-lg mt-4">
        A UX-focused developer specialising in React and Flutter
      </h2>
      <div className="relative flex justify-center">
        <Image
          src={"/laptop.png"}
          alt="laptop"
          width={600}
          height={400}
          style={{ maxHeight: "400px", maxWidth: "450px" }}
          className="py-8 block"
        />
        <Image
          src={"/icon-library.png"}
          width={600}
          height={400}
          alt="work"
          className="absolute"
          style={{
            maxHeight: "220px",
            height: "220px",
            maxWidth: "341px",
            top: 46,
            left: 53,
            marginLeft: 6,
          }}
        />
      </div>
    </header>
  );
}
