export default function Story({text, date} : { text: string; date: string }) {
    return (
        <div className="border-l-2 border-amber-500 p-2 w-full shadow-md">
            <p className="italic font-bold dark:text-amber-500">{date}</p>
            <p>{text}</p>
        </div>
    );
}