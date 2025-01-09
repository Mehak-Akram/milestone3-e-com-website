import SlugPage from "./slugPage";

const Slug = ({ params }: { params: { slug: string } }) => {
  return (
    <section className="text-myBlack1 body-font overflow-hidden">
      <SlugPage params={params} />
    </section>
  );
};

export default Slug;
