import { JerseyModel } from "@/models/jersey.model";
import JerseysData from '../../../jerseysData.json';

export default async function Head({ params, }: { params: { id: string } }) {

    const data: JerseyModel[] = JerseysData.jerseys;
    const idParsed = parseInt(params.id);
    const jerseyArray = data.filter(item => item.id == idParsed);
    const jersey = jerseyArray[0];

    return (
        <>
            <title>{jersey.name}</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/favicon.ico" />
        </>
    );
} 