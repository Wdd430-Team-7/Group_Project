import Story from "@/app/ui/dashboard/stories/story";
import CreateStoryForm from "@/app/ui/dashboard/stories/create-story-form";
import Stories from "@/app/ui/dashboard/stories/stories";
import AllStories from "@/app/ui/dashboard/stories/all-stories";

export default function Page() {
  // Jane smith
  // const artist_id = '1aa97dfd-5aa0-4f80-afce-8cef34880226'; // change this when auth is ready
  //John Cenamics
  const artist_id = "b222d544-c5aa-4558-b4a6-74cd8e088afd";
  return (
    <div className="flex flex-col gap-4">
      <h2 className="mb-4 text-xl md:text-2xl dark:text-amber-500 font-bold text-center">
        Stories
      </h2>
      <CreateStoryForm artist_id={artist_id} />
      <div className="flex flex-col gap-2 p-4">
        <h2 className="font-bold text-center p-2 dark:text-amber-500 rounded-md mb-4 w-fit">
          MY STORIES
        </h2>
        <AllStories id={artist_id} />
      </div>
    </div>
  );
}
