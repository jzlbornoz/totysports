import { ProductPage } from '@/components/client/ProductPage';
import { JerseyModel } from '@/models/jersey.model';
import JerseysData from '../../../jerseysData.json';


const page = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    if (id) {
        const data: JerseyModel[] = JerseysData.jerseys;
        const idParsed = parseInt(id);
        const jerseyArray = data.filter(item => item.id == idParsed);
        const jersey = jerseyArray[0];

    return (
        <ProductPage productItem={jersey}/>
    )
    }

}

export default page