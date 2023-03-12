import { Store } from "@/components/client/Store";
import { JerseyModel } from "@/models/jersey.model";
import JerseysData from '../../jerseysData.json';

export default function StorePage() {
    const data: JerseyModel[] = JerseysData.jerseys;
    return (
        <main>
            <Store jerseys={data} />
        </main>
    )
}
