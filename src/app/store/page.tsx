import { Store } from "@/components/client/Store";
import { JerseyModel } from "@/models/jersey.model";
import JerseysData from '../../jerseysData.json';

export default function StorePage() {
    const data: JerseyModel[] = JerseysData.jerseys.sort();

    const compareFunction = (a: JerseyModel, b: JerseyModel) => {
        if (a.season === "23/24" && b.season !== "23/24") {
            return -1; // a va antes que b
        } else if (a.season !== "23/24" && b.season === "23/24") {
            return 1; // a va después de b
        } else {
            return a.season.localeCompare(b.season); // ordenar alfabéticamente si no es "23/24"
        }
    };

    const sortedData = data.sort(compareFunction);
    return (
        <main className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 mt-[11vh] bg-white">
            <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Authentic Jerseys
                    </h2>

                    <p className="max-w-md mt-4 text-gray-500">
                    No te pierdas esta oportunidad única de comprar tu jersey y sentirte como un pro
                    ¡Aprovecha nuestros descuentos!
                    </p>
                </header>
            <Store jerseys={sortedData} />
        </main>
    )
}
