import ReviewCard from "./review-card";

export default function Reviews() {
  return (
    <div className="w-full flex flex-col gap-2 rounded-md bg-amber-100 shadow-md p-4">
      <h2 className="font-bold self-center">Recent Reviews</h2>
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
      <ReviewCard
        value={4}
        title="Awesome product!"
        review_text="This is the best I have seen."
        product_id="234141-123123-123123"
      />
    </div>
  );
}
