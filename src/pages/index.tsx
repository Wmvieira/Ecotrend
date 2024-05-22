import AppCommunity from "~/component/hero/app-community/AppCommunity";
import AppInfo from "~/component/hero/app-info/AppInfo";
import AppPolicy from "~/component/hero/app-policy/AppPolicy";
import AppServices from "~/component/hero/app-services/AppServices";
import HeroLayout from "~/layout/hero-layout/HeroLayout";

Hero.getLayout = (page: never) => <HeroLayout>{page}</HeroLayout>;

export default function Hero() {
  return (
    <>
      <AppInfo />
      <AppServices />
      <AppCommunity />
      <AppPolicy />
      {/* <div className="grid h-full w-full grid-flow-col grid-rows-3 justify-center">
        <div className="row-span-2 flex flex-col justify-center gap-2 text-center">
          <div className="w-full">
            <Image
              src="/logo.png"
              width={200}
              height={200}
              alt="logo"
              className="mx-auto rounded-lg"
            />
          </div>
          <h1 className="text-3xl">Ecotrend</h1>
          <p className="text-xl">Rumo a um mundo melhor</p>
        </div>
        <div className="flex h-full flex-col justify-center gap-3 text-center">
          <div>
            <p>
              Ao continuar você aceita aos termos de uso da plataforma{" "}
              <Link href="" className="text-secondary">
                Ecotrend
              </Link>
            </p>
          </div>
          <div>
            <Button color="secondary" className="" as={Link} href="/home">
              Continuar
            </Button>
          </div>
        </div>
      </div> */}
      {/* <AppServices /> */}
      {/* <AppCommunity /> */}
    </>
  );
}
