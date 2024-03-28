export default function Story({text, date} : { text: string; date: string }) {
    return (
        <div className="bg-white p-2 rounded-md w-full shadow-md">
            <p className="italic font-bold">{date}</p>
            <p>{text}</p>
        </div>
    );
}