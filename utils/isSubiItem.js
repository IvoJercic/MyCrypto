import MENU from "../constants/menu";

export default function isSubItem(parentRoute, childRoute) {
  const parent = MENU.find((item) => item.href === parentRoute);
  const res = parent?.child?.find((item) => item.href === childRoute);
  if (res) return true;
  return false;
}
