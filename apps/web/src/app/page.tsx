import PopulerProducts from "@web/components/HomePage/Products/PopulerProducts";
import {
  HydrateClient,
  getQueryClient,
  prefetch,
  trpc,
} from "@web/trpc/server";
import HeroSlider from "../components/HomePage/HeroPage/HeroSlider";

export default async function Home() {
  prefetch(trpc.menuRouter.findAll.queryOptions());
  const queryClient = getQueryClient();
  const menuList = await queryClient.fetchQuery(
    trpc.userRouter.findAll.queryOptions()
  );
  console.log(menuList);
  return (
    <HydrateClient>
      <HeroSlider />
      {/* <ProductCategory /> */}
      <PopulerProducts />
      {/* <ProductsBanner /> */}
      {/* <ServicePage />
      // {/* <DealProducts /> */}
    </HydrateClient>
  );
}
