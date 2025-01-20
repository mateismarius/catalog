import Category from "@/app/components/Category";
import produse from "@/app/data/produse"
export default function Home() {
  return (
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Catalog Produse</h1>
        <div id="catalog">
          {produse.map((categorie, index) => (
              <Category key={index} categorie={categorie} />
          ))}
        </div>
      </div>
  );
}
