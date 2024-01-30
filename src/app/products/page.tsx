import db from "@/data/db.json";

const products = db.products;

export default function Home() {
  return (
    <main>
      <h2 className="text-2xl mb-2 font-bold">Products</h2>
      <ul>
        {products.map((product) => {
          return (
            <div key={product.id}>
              {product.model} / {product.category}
            </div>
          );
        })}
      </ul>
    </main>
  );
}
