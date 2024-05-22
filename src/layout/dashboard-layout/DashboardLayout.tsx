import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="h-full w-full">
      <Header />
      {children}
      <Nav />
    </div>
  );
}
