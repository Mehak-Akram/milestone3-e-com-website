import BestSelling from "@/components/bestselling";
import Categories from "@/components/categories";
import FeaturedProduct from "@/components/featuredProduct";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <FeaturedProduct />
      <Categories />
      <BestSelling/>
      <Services />
    </div>
  );
}
