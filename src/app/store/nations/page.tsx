import { Store } from "@/components/client/Store";
import { JerseyModel } from "@/models/jersey.model";
import Link from "next/link";
import JerseysData from '../../../jerseysData.json';

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
    const NationsData = sortedData.filter((item) => !item.club);
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
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </li>

                    <li>
                        <Link href="/store" className="block transition hover:text-gray-700"> Tienda </Link>
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
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </li>

                    <li>
                        <Link href="/store/nations" className="block transition hover:text-gray-700"> Naciones </Link>
                    </li>
                </ol>
            </nav>
            <Store jerseys={NationsData} />
        </main>
    )
}
