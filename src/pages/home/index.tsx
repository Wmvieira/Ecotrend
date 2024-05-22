import DashboardLayout from "~/layout/dashboard-layout/DashboardLayout";

Home.getLayout = (page: never) => <DashboardLayout>{page}</DashboardLayout>;

export default function Home() {
  return <></>;
}
