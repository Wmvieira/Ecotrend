import DashboardLayout from "~/layout/dashboard/DashboardLayout";

Home.getLayout = (page: never) => <DashboardLayout>{page}</DashboardLayout>;

export default function Home() {
  return <></>;
}
