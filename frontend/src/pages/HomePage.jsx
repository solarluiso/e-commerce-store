import CategoryItem from "../components/CategoryItem";

const categories = [
  { href: "/books", name: "Books", imageUrl: "/homepage/books.jpg" },
  { href: "/incenses", name: "Incenses", imageUrl: "/homepage/incenses.jpg" },
  {
    href: "/headphones",
    name: "Headphones",
    imageUrl: "/homepage/headphones.jpg",
  },
  {
    href: "/potteries",
    name: "Potteries",
    imageUrl: "/homepage/potteries.jpg",
  },
  { href: "/lamps", name: "Lamps", imageUrl: "/homepage/lamps.jpg" },
  { href: "/cups", name: "Cups", imageUrl: "/homepage/cups.jpg" },
];

const HomePage = () => {
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
      </div>
    </div>
  );
};
export default HomePage;
