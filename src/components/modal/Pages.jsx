import { useEffect, useState } from 'react';

const Pages = () => {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${pages * 10 - 10}`
    );
    const data = await res.json();

    console.log(data);

    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(data.total / 10);
    }
  };

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== pages
    )
      setPages(selectedPage);
  };

  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, [pages]);
  return (
    <div>
      {products.length > 0 && (
        <div className="grid grid-cols-5 gap-4 pr-2 pl-2 mx-auto">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="border border-black mt-6 p-4 rounded-md cursor-pointer bg-neutral-100"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full object-cover"
                />
                <div className="font-semibold text-rose-500 text-center">
                  {product.title}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="flex flex-row justify-center mt-6 ">
          <div
            onClick={() => selectPageHandler(pages - 1)}
            className={
              pages > 1
                ? 'border border-black rounded-sm p-2 m-2  text-blue-600 cursor-pointer'
                : 'opacity-0'
            }
          >
            ◀️
          </div>
          {[...Array(totalPages)].map((_, i) => {
            return (
              <div
                key={i}
                className={
                  'border border-black rounded-sm p-2 m-2  text-rose-600 cursor-pointer'
                }
              >
                <div
                  onClick={() => selectPageHandler(i + 1)}
                  key={i}
                  className={pages === 1 + i ? 'bg-neutral-400' : ''}
                >
                  {i + 1}
                </div>
              </div>
            );
          })}
          <div
            onClick={() => selectPageHandler(pages + 1)}
            className={
              pages < totalPages
                ? 'border border-black rounded-sm p-2 m-2  text-blue-600 cursor-pointer'
                : 'opacity-0'
            }
          >
            ▶️
          </div>
        </div>
      )}
    </div>
  );
};

export default Pages;
