import Card from "./Card";

const Category = ({ produse }) => (

    <section className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {produse.map((produs, index) => (
                <Card key={index} produs={produs} />
            ))}
        </div>
    </section>
);

export default Category;
