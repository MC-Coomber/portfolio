import Link from "next/link";
import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin.png";
import Image from "next/image";

export function Footer() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-evenly items-center py-4 px-16 border-t border-slate-600 border-solid">
      <div className="flex flex-col flex-1 items-center gap-2">
        <h4 className="font-bold">Find me</h4>
        <div className="flex gap-4">
          <Link
            href={"https://github.com/MC-Coomber"}
            className="hover:underline flex gap-2"
          >
            <Image src={Github} alt="github logo" height={14} width={24} />
            Github
          </Link>
          <Link
            href={"https://www.linkedin.com/in/mike-coomber-b80141161/"}
            className="hover:underline flex gap-2"
          >
            <Image src={Linkedin} alt="github logo" height={14} width={24} />
            LinkedIn
          </Link>
        </div>
      </div>
      <div className="flex flex-1 text-center">
        <div>
          This site was made using NextJs and deployed with Vercel. You can view
          the source code{" "}
          <Link
            href={"https://github.com/MC-Coomber/portfolio"}
            className="font-semibold hover:underline"
          >
            here
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
