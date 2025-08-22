import localFont from "next/font/local";
import { Inter, Montserrat } from "next/font/google";

export const elianto = localFont({
  src: "../public/fonts/Elianto-Regular.otf",
  variable: "--elianto",
  style: "normal"
});

export const montserrat = Montserrat({ subsets: ['latin'] });

export const inter = Inter({ subsets: ['latin'] });
