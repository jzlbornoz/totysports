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
        <main>
            <Store jerseys={sortedData} />
        </main>
    )
}
