import { OrderPage } from "@/components/client/OrderPage";

export default function OrderInfoPage({ params, }: { params: { id: string } }) {
    return (
        <OrderPage orderId={params.id} />
    )
}
