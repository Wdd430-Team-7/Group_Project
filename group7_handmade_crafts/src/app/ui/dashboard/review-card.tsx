export default function ReviewCard({
  value,
  title,
  review_text,
  product_id,
}: {
  value: number;
  title: string;
  review_text: string;
  product_id: string;
}) {
    return (
        <div className="border-t-2 border-amber-500 p-2 shadow-md">
            <p className="text-amber-700 font-bold">{value} stars</p>
            <p className="font-bold">{title}</p>
            <p>{review_text}</p>
            <p className="italic">Rating for: {product_id}</p>
        </div>
    );
}
