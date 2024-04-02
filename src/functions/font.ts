import localFont from "next/font/local";

export const fontBold = localFont({
  src: "../fonts/GibsonBoldIt.otf",
  weight: "700",
  variable: "--font-bold",
  display: "swap",
});

export const fontRegular = localFont({
  src: "../fonts/GibsonItalic.otf",
  weight: "400",
  variable: "--font-regular",
  display: "swap",
});

export const fontSemiBold = localFont({
  src: "../fonts/GibsonSemiBdIt.otf",
  weight: "600",
  variable: "--font-semibold",
  display: "swap",
});

export const fontLight = localFont({
  src: "../fonts/GibsonLightIt.otf",
  weight: "300",
  variable: "--font-light",
  display: "swap",
});
