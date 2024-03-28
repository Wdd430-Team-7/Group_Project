export default function Story({title, text, date} : { title: string; text: string; date: string }) {
    return (
        <div className="bg-white p-2 rounded-md w-full">
            <h4 className="font-bold">{title}</h4>
            <p className="italic">{date}</p>
            <p>{text}</p>
        </div>
    );
}