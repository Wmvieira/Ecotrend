import AppInfo from "./appInfo/AppInfo";
import Login from "./Login";

export default function Header() {
  return (
    <header className="bg-primary-900 flex w-full flex-row justify-between gap-2 p-4">
      <AppInfo />
      <Login />
    </header>
  );
}
