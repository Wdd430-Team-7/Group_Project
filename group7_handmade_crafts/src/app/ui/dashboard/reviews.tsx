import ReviewCard from "./review-card";

export default function Reviews() {
  return (
    <div className="flex flex-col rounded-md p-4 gap-2 w-full">
      <h2 className="font-bold text-left p-2 dark:text-amber-500 rounded-md mb-4">RECENT REVIEWS</h2>
      <ReviewCard
        value={4}
        title="Awesome product!"
        review_text="This is the best I have seen."
        product_id="234141-123123-123123"
      />
      <ReviewCard
        value={4}
        title="Awesome product!"
        review_text="This is the best I have seen."
        product_id="234141-123123-123123"
      />
    </div>
  );
}
