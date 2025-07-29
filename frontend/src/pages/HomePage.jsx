import { useEffect } from "react";

import CategoryItem from "../components/CategoryItem";
import FeaturedProducts from "../components/FeaturedProducts";
import { useProductStore } from "../stores/useProductStore";

const categories = [
  { href: "/books", name: "Books", imageUrl: "/homepage/books.jpg" },
  { href: "/incenses", name: "Incenses", imageUrl: "/homepage/incenses.jpg" },
  {
    href: "/journals",
    name: "Journals",
    imageUrl: "/homepage/journals.jpg",
  },
  {
    href: "/candles",
    name: "Candles",
    imageUrl: "/homepage/candles.jpg",
  },
  { href: "/tea", name: "Herbal Teas", imageUrl: "/homepage/tea.jpg" },
  {
    href: "/objects",
    name: "Sacred Objects",
    imageUrl: "/homepage/objects.jpg",
  },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
          Mindful Living Starts Here
        </h1>
        <p className="text-center text-xl text-gray-300 mb-12">
          Discover the latest trends in lifestyle essentials.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>
        {!isLoading && products.length > 0 && (
          <FeaturedProducts featuredProducts={products} />
        )}
      </div>
    </div>
  );
};
export default HomePage;
