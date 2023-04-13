import { Store } from "@/components/client/Store";
import { JerseyModel } from "@/models/jersey.model";
import JerseysData from '../../jerseysData.json';

export default function StorePage() {
    const data: JerseyModel[] = JerseysData.jerseys;
    const stockData = data.filter(item => item.stock > 0);
    return (
        <main>
            <Store jerseys={stockData} />
        </main>
    )
}
