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
    href: CURRENT_ROUTE,
    icon: faBaby,
    child: [
      {
        text: "Home2",
        href: PAGE1_ROUTE,
      },
      {
        text: "Home3",
        href: PAGE2_ROUTE,
      },
      {
        text: "Home4",
        href: PAGE3_ROUTE,
      },
    ],
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
