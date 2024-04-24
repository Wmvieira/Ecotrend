interface NavWrapperProps {
  children: React.ReactNode;
}
export default function NavWrapper({ children }: NavWrapperProps) {
  return (
    <nav className="bg-primary-700 rounded-md p-2">
      <ul className=" flex flex-row justify-center gap-8 p-1">{children}</ul>
    </nav>
  );
}
