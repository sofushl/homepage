interface LinkElProps {
    text: string;
    href: string;
    className?: string;
    newtab?: boolean;
};

export default function LinkEl({
    text,
    href,
    className = "",
    newtab = true,
}: LinkElProps) {
    return (
        <a
            href={href}
            className={`block ${className}`}
            {...(newtab && {
                target: "_blank", rel: "noreferrer",
            })
            }
        >
            {text}
        </a >
    );
}
