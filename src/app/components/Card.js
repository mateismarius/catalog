import Image from 'next/image'

const Card = ({ produs }) => (
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <Image
                src={produs.img} // Linkul către imagine
                alt={produs.nume} // Text alternativ
                width={80} // Lățimea imaginii
                height={80} // Înălțimea imaginii
                className="mx-auto rounded-md" // Clasa CSS (opțională)
            />
        <h3 className="text-lg font-semibold">{produs.nume}</h3>
        <p className="text-sm text-gray-600">{produs.descriere}</p>
        <p className="text-green-600 font-bold mt-2">{produs.pret}</p>
    </div>
);

export default Card;