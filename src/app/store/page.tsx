import { Store } from "@/components/client/Store";
import { JerseyModel } from "@/models/jersey.model";
import Image from "next/image";
import Link from "next/link";
import JerseysData from '../../jerseysData.json';

export default function StorePage() {
    const data: JerseyModel[] = JerseysData.jerseys;
    const firstProduct: JerseyModel = JerseysData.jerseys.find(item => item.id == 31) || JerseysData.jerseys[23];
    const secondProduct: JerseyModel = JerseysData.jerseys.find(item => item.id == 32) || JerseysData.jerseys[25];

    const compareFunction = (a: JerseyModel, b: JerseyModel) => {
        if (a.season === "23/24" && b.season !== "23/24") {
            return -1; // a va antes que b
        } else if (a.season !== "23/24" && b.season === "23/24") {
            return 1; // a va después de b
        } else {
            return a.season.localeCompare(b.season); // ordenar alfabéticamente si no es "23/24"
        }
    };
    data.sort(compareFunction);

    return (
        <main className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 mt-[11vh] bg-white">
            <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-1 text-sm text-gray-600">
                    <li>
                        <Link href="/" className="block transition hover:text-gray-700">
                            Home
                        </Link>
                    </li>

                    <li className="rtl:rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 
                                0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </li>

                    <li>
                        <Link href="/store" className="block transition hover:text-gray-700"> Tienda </Link>
                    </li>
                </ol>
            </nav>
            <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                            <div className="max-w-md mx-auto text-center lg:text-left">
                                <header>
                                    <h2 className="text-xl font-bold text-third sm:text-3xl">Nueva temporada</h2>

                                    <p className="mt-4 text-gray-500">
                                        Sigue apoyando a tu equipo favorito en esta nueva temporada y
                                        con los mejores precios
                                    </p>
                                </header>

                                <Link
                                    href="/store/clubs"
                                    className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition 
                                    bg-third border border-third rounded hover:shadow focus:outline-none focus:ring"
                                >
                                    Compra ahora
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-2 lg:py-8">
                            <ul className="grid grid-cols-2 gap-4">
                                <li>
                                    <Link href={`/store/${firstProduct.id}`} className="block group">
                                        <Image
                                            src={"https://sportal365images.com/process/smp-images-production/ringier.africa/14062023/90cafd15-c23f-4370-8099-d6bf21a34c30.jpg"}
                                            alt=""
                                            className="object-cover w-full rounded aspect-square"
                                            width={1200}
                                            height={1200}
                                        />

                                        <div className="mt-3">
                                            <h3
                                                className="font-medium text-gray-900 group-hover:underline 
                                                group-hover:underline-offset-4"
                                            >
                                                {firstProduct.name}
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-700">{firstProduct.sale}$</p>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link href={`/store/${secondProduct.id}`} className="block group">
                                        <Image
                                            src="https://cdn.shopify.com/s/files/1/0668/2198/0439/files/GP21574-Mejorado-NR.jpg?v=1686798025"
                                            alt=""
                                            className="object-cover w-full rounded aspect-square"
                                            width={1200}
                                            height={1200}
                                        />

                                        <div className="mt-3">
                                            <h3
                                                className="font-medium text-gray-900 group-hover:underline 
                                                group-hover:underline-offset-4"
                                            >
                                                {secondProduct.name}
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-700">{secondProduct.sale}$</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    Authentic Jerseys
                </h2>
                <p className="max-w-md mt-4 text-gray-500">
                    No te pierdas esta oportunidad única de comprar tu jersey y sentirte como un pro
                    ¡Aprovecha nuestros descuentos!
                </p>
            </header>
            <Store jerseys={data} />
        </main>
    )
}
