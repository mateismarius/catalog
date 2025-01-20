import Card from "./Card";

const Category = ({ categorie }) => (
    <section className="mb-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">{categorie.nume}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {categorie.produse.map((produs, index) => (
                <Card key={index} produs={produs} />
            ))}
        </div>
    </section>
);

export default Category;
