import { useEffect, useRef } from "react";

import HeroSection from "../components/HeroSection";
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

const NAVBAR_HEIGHT = 120; // px, adjust if your navbar is a different height

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();
  const categoriesHeaderRef = useRef(null);

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  const handleScrollToCategories = () => {
    if (categoriesHeaderRef.current) {
      const headerTop =
        categoriesHeaderRef.current.getBoundingClientRect().top +
        window.scrollY;
      window.scrollTo({
        top: headerTop - NAVBAR_HEIGHT,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <HeroSection onExploreClick={handleScrollToCategories} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2
          ref={categoriesHeaderRef}
          className="text-center text-4xl sm:text-5xl font-bold text-emerald-400 mb-10"
        >
          Our Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
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
