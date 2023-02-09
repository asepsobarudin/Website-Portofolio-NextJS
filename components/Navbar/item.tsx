import Style from "@/styles/Navbar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

interface ItemProps {
  title: string;
  url: string;
  icon: any;
  fnMenu: any;
}

export default function Item(props: ItemProps) {
  const { title, url, icon, fnMenu } = props;
  return (
    <>
      <Link
        className={`${Style.menuNavbar} hover:bg-[#178474] hover:text-white`}
        onClick={() => fnMenu(false)}
        activeClass={Style.activeItem}
        to={url}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
        <span className="text-xl">{icon}</span>
        <span className="text-base font-semibold font-Poppins">{title}</span>
      </Link>
    </>
  );
}
