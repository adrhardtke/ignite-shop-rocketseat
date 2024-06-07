import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";


import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: '400',  subsets: ['latin']  });

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return  <>
    <style jsx global>{`
      :root {
        --font-sans: ${roboto.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps} />
</>
}
