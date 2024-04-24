import Logo from "./Logo";

export default function AppInfo() {
  return (
    <div className="flex flex-row gap-2">
      <Logo />
      <h1 className="text-primary-200 my-auto">Ecotrend</h1>
    </div>
  );
}
