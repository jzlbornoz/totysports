export default function Head({ params, }: { params: { id: string } }) {
    return (
        <>
            <title>TOTY Sports | Order {params.id}</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/favicon.ico" />
        </>
    )
}
