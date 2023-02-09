import { useEffect, useState } from "react";
import Image from "next/image";

import Style from "@/styles/Navbar.module.css";
import Item from "@/components/Navbar/item";

import { AiOutlineHome } from "react-icons/ai";
import { GiFlexibleLamp } from "react-icons/gi";
import { RiProjectorLine } from "react-icons/ri";
import Icons from "@/assets/images/icons.png";

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
          <div className={`${hMenu && Style.navbarOn} ${Style.navbar} px-2 md:px-4 lg:px-10`}>
            <div className="flex justify-between items-center w-full">

              <div className="select-none flex justify-center items-center gap-2">
                <Image src={Icons} alt="Logo" className="w-[50px]" />
                <h1 className="text-2xl font-Lexend font-medium">Portofolio</h1>
              </div>

              <div className="hidden md:flex gap-3 justify-center items-center">
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
                  url="project"
                  icon={<RiProjectorLine />}
                  fnMenu={fnMenu}
                />
              </div>

              <button
                className={`${hMenu && Style.hamburgerOn} ${Style.hamburger
                  } group flex md:hidden`}
                onClick={() => fnMenu(!hMenu)}
              >
                <div className="group-hover:bg-sky-600"></div>
                <div className="group-hover:bg-sky-600"></div>
                <div className="group-hover:bg-sky-600"></div>
              </button>
            </div>
          </div>

          <div
            className={`${hMenu ? Style.menuOn : Style.menuOf} ${Style.menu} w-full md:w-[30%] lg:w-[20%] md:mx-2`}
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
              url="project"
              icon={<RiProjectorLine />}
              fnMenu={fnMenu}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
