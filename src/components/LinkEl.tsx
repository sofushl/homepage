interface LinkElProps {
    text: string;
    href: string;
    className?: string;
    newtab?: boolean;
    button?: boolean;
    size?: string;
};

export default function LinkEl({
    text,
    href,
    className = "",
    newtab = true,
    button = true,
    size = "3",
}: LinkElProps) {
    return (
        <a
            href={href}
            className={`block ${className} ${button ? `p-${size} rounded-lg cursor-pointer hover:bg-blue-200 bg-blue-100 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-black border-black` : ""}`}
            {...(newtab && {
                target: "_blank", rel: "noreferrer",
            })
            }
        >
            {text}
        </a >
    );
}
