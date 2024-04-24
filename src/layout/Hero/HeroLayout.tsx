import Header from "./component/header/Header";

interface HeroLayoutProps {
  children: React.ReactNode;
}

export default function HeroLayout({ children }: HeroLayoutProps) {
  return (
    <div className="h-full w-full">
      <Header />
      {children}
    </div>
  );
}
