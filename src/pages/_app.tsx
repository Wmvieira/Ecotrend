import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const inter = Inter({
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
    <SessionProvider session={session}>
      <main
        className={`font-sans ${inter.variable} w-scree bg-primary-background text-primary-foreground h-screen`}
      >
        {
          //@ts-expect-error Page dynamic layout
          getLayout(<Component {...pageProps} />)
        }
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
