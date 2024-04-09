import localFont from "next/font/local";

export const fontBold = localFont({
  src: "../fonts/gibson-bold.otf",
  weight: "700",
  variable: "--font-bold",
  display: "swap",
});

export const fontRegular = localFont({
  src: "../fonts/gibson-italic.otf",
  weight: "400",
  variable: "--font-regular",
  display: "swap",
});

export const fontSemiBold = localFont({
  src: "../fonts/gibson-semibold.otf",
  weight: "600",
  variable: "--font-semibold",
  display: "swap",
});

export const fontLight = localFont({
  src: "../fonts/gibson-light.otf",
  weight: "300",
  variable: "--font-light",
  display: "swap",
});
