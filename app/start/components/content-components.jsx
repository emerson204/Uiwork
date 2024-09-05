import { montserrat } from "@/config/fonts";

export default function ContentComponents({ children }) {
  return <div className={`${montserrat.className} pt-7 `}>{children}</div>;
}
