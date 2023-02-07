import { useEffect, useState } from "react";
import Image from "next/image";

import Style from "@/styles/Navbar.module.css";
import Item from "@/components/Navbar/item";

import { AiOutlineHome } from "react-icons/ai";
import { GiFlexibleLamp } from "react-icons/gi";
import { RiProjectorLine } from "react-icons/ri";
import ph1 from "@/public/next.svg";

export default function Navbar() {
  const [hMenu, fnMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      fnMenu(false)
    })
  }, [])

  return (
    <>
      <nav className="fixed w-full z-10 top-0 flex justify-center px-2">
        <div
          className={`${hMenu && Style.containerOn
            } w-full flex flex-col justify-center items-end`}
        >
          <div className={`${hMenu && Style.navbarOn} ${Style.navbar}`}>
            <div className="flex justify-between items-center w-full">
              <div className="select-none">
                <Image src={ph1} width={100} height={100} alt="Logo" />
              </div>

              <button
                className={`${hMenu && Style.hamburgerOn} ${Style.hamburger
                  } group`}
                onClick={() => fnMenu(!hMenu)}
              >
                <div className="group-hover:bg-sky-600"></div>
                <div className="group-hover:bg-sky-600"></div>
                <div className="group-hover:bg-sky-600"></div>
              </button>
            </div>
          </div>

          <div
            className={`${hMenu ? Style.menuOn : Style.menuOf} ${Style.menu}`}
          >
            <Item
              title="Home"
              url="leanding"
              icon={<AiOutlineHome />}
              fnMenu={fnMenu}
            />
            <Item
              title="Skils"
              url="skils"
              icon={<GiFlexibleLamp />}
              fnMenu={fnMenu}
            />
            <Item
              title="Project"
              url="#"
              icon={<RiProjectorLine />}
              fnMenu={fnMenu}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
