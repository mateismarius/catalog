"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Card from "@/app/components/Card";
import produse from "@/app/data/produse";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Toate produsele");

  return (
    <div>
      {/* Navbar */}
      <Navbar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={["Toate produsele", ...produse.map((categorie) => categorie.nume)]}
      />

      {/* Catalog */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{activeCategory}</h2>

        {activeCategory === "Toate produsele" ? (
          // Afișează toate categoriile și produsele lor
          produse.map((categorie, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-4">{categorie.nume}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {categorie.produse.map((produs, i) => (
                  <Card key={i} produs={produs} />
                ))}
              </div>
            </div>
          ))
        ) : (
          // Afișează doar produsele din categoria selectată
          produse
            .filter((categorie) => categorie.nume === activeCategory)
            .map((categorie, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {categorie.produse.map((produs, i) => (
                  <Card key={i} produs={produs} />
                ))}
              </div>
            ))
        )}
      </div>
    </div>
  );
}
