import Container from "@components/container";
import ThemeSwitch from "@components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@utils/all";
import VercelLogo from "../public/img/vercel.svg";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-sm text-center">
        Copyleft 🄯 {new Date().getFullYear()} {props?.copyright}{" "}
        guaranteed by GPLv2 license.
      </div>
      <div className="flex justify-center gap-1 mt-1 text-sm text-center text-gray-500 dark:text-gray-600">
        <span>
          <a
            href="https://hstrejoluna.com"
            rel="noopener"
            target="_blank">
            HS Trejo Luna
          </a>
        </span>
        <span>&middot;</span>
        <span>
          {" "}
          <a
            href="https://github.com/hstrejoluna/hstrejoluna-music-blog"
            rel="noopener"
            target="_blank">
            Github
          </a>
        </span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="mt-5">
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener"
            className="relative block w-44">
            <Image
              src={VercelLogo}
              layout="fixed"
              loader={myLoader}
              alt="Powered by Vercel"
              unoptimized={true}
              width="150"
              height="25"
            />
          </a>
        </div>
        <ThemeSwitch />
      </div>
    </Container>
  );
}

  
