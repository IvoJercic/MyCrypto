import {
  ACCOUNT_ROUTE,
  CONTACT_ROUTE,
  CURRENT_ROUTE,
  HOME_ROUTE,
  PAGE1_ROUTE,
  PAGE2_ROUTE,
  PAGE3_ROUTE,
} from "./routes";
import { faBaby, faCake, faHouse } from "@fortawesome/free-solid-svg-icons";

const MENU = [
  {
    text: "Home",
    href: HOME_ROUTE,
    icon: faBaby,
  },
  {
    text: "Account",
    href: ACCOUNT_ROUTE,
    icon: faBaby,
  },
  {
    text: "Contact",
    href: CONTACT_ROUTE,
    icon: faBaby,
  },
];

export default MENU;
