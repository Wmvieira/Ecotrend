import Header from "./component/header/Header";
import Main from "./component/main/Main";

interface HeroLayoutProps {
  children: React.ReactNode;
}

export default function HeroLayout({ children }: HeroLayoutProps) {
  return (
    <div className="h-full w-full">
      <Header />
      <Main>{children}</Main>
    </div>
  );
}
