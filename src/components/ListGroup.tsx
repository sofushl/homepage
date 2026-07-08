import LinkEl from "./LinkEl";

interface ListGroupProps {
    items: { text: string, href: string, }[];
    heading: string;
}

export default function ListGroup({ items, heading }: ListGroupProps) {

    return (
        <>
            <h1 className="text-2xl font-bold pb-4">{heading}</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className="flex flex-col">
                {items.map((item) => (
                    <div key={item.text} className="p-1" >
                        <LinkEl
                            text={item.text}
                            href={item.href}
                        />

                    </div>
                ))}
            </ul >
        </>
    );
}

