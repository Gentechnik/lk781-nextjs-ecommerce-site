import db from "@/data/db.json";

const products = db.products;

export default function Home() {
  return (
    <main>
      <h2 className="text-2xl mb-2 font-bold">Products</h2>
      <ul className="flex flex-col gap-4">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-slate-600 p-4 rounded-md w-1/2 flex"
            >
              <p className="font-bold text-2xl text-green-300">{product.id}</p>
              <img
                className="mx-3 w-1/3"
                src={`images/products/product_${product.id}.jpg`}
                alt="a simple contentless mock up picture"
              />
              <section>
                <p className="text-yellow-400">{product.category}</p>
                <p className="font-semibold text-2xl">
                  {product.brand} {product.model}
                </p>
                <p className="text-red-400 font-bold">{product.price} €</p>
              </section>
            </div>
          );
        })}
      </ul>
    </main>
  );
}
