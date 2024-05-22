import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Work_Sans } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";

const work = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const getLayout =
    //@ts-expect-error Page dynamic layout
    (Component?.getLayout as unknown) ?? ((page: unknown) => page);
  return (
    <NextUIProvider>
      <SessionProvider session={session}>
        <main className={`font-sans ${work.variable} w-scree h-screen`}>
          {
            //@ts-expect-error Page dynamic layout
            getLayout(<Component {...pageProps} />)
          }
        </main>
      </SessionProvider>
    </NextUIProvider>
  );
};

export default api.withTRPC(MyApp);
