import productsData from "./products.json";
import { useState } from "react";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const _searchTerm = searchTerm.toLowerCase();

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(_searchTerm) ||
      product.description.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag ? product.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [...new Set(productsData.flatMap((product) => product.tags))];

  return (
      <div className="p-8">
      <h1 class="text-center text-3xl mb-5">
        {" "}
        <strong>Our Product</strong>{" "}
      </h1>
      <input
        type="text"
        name="searchTerm"
        placeholder="Search product..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow-md bg-amber-50"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
              <span className="text-yellow-500 flex items-center">
                ⭐ <strong className="ml-1">{item.rating}</strong>
              </span>
            </div>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-gray-600">
              Brand: <strong>{item.brand}</strong>
            </p>
            <div class="flex space-x-1">
            <p className="text-red-600 text-2xl">
              Price: <strong>${item.price.toFixed(2)}</strong>
            </p>
            <p class="text-green-600 underline ">Discount: {item.discountPercentage}%</p>
            </div>
            <p className="text-gray-600">
              Stock: <strong>{item.stock}</strong>
            </p>

            <div className="mt-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-200 text-black px-2 py-1 text-xs rounded-full mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
