import CategoryPage from "./categoryPage";

const Category = ({ params }: { params: { category: string } }) => {
  return (
    <div className="mt-[50px]  mb-[90px] ">
      <CategoryPage params={params} />
    </div>
  );
};

export default Category;
