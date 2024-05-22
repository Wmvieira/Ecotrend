interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <div className="grid grid-flow-row gap-3 p-2 md:grid-cols-2 md:gap-5">
      {children}
    </div>
  );
}
