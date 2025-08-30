import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Filter} from "lucide-react";
import { Helmet } from "react-helmet";
import { useSubCategoriesByMain } from "../hook/apiHooks";
import ProductDisplay from "../components/ProductDisplay";

export const CategoryProducts: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [sortBy, setSortBy] = useState("name");
  const [priceRange] = useState<[number, number]>([0, 5000]);

  const { data, loading, error } = useSubCategoriesByMain(categoryId);
  console.log(data);

  const category = data?.main_category;
  const products = data?.sub_categories ?? [];

  // sort
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return (a.price ?? 0) - (b.price ?? 0);
      case "price-high":
        return (b.price ?? 0) - (a.price ?? 0);
      case "name":
        return a.Name.localeCompare(b.Name);
      default:
        return 0;
    }
  });

  // filter
  const filteredProducts = sortedProducts.filter(
    (p) => (p.price ?? 0) >= priceRange[0] && (p.price ?? 0) <= priceRange[1]
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!category) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Category Not Found</h1>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
       <Helmet>
        <title>{category.Name} | Ratnasmriti Gems</title>
        <meta
          name="description"
          content={`Explore our ${category.Name} collection. Find the best pieces crafted with elegance and style.`}
        />
        {/* Optional: Social share meta */}
        <meta property="og:title" content={`${category.Name} | Ratnasmriti Gems`} />
        <meta
          property="og:description"
          content={`Discover ${category.Name} items from our curated collection.`}
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
            {category.Name}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore our products in {category.Name}
          </p>

          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                <option value="name">Name A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-600">
                {filteredProducts.length} products
              </span>
             
            </div>
          </div>
        </div>

        {/* Products */}
       <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductDisplay key={product._id} product={product} />
        ))}
      </div>


        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No products found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters or browse other categories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
