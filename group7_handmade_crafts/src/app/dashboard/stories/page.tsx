import Story from "@/app/ui/dashboard/stories/story";
import CreateStoryForm from "@/app/ui/dashboard/stories/create-story-form";
import Stories from "@/app/ui/dashboard/stories/stories";

export default function Page() {
    const artist_id = '1aa97dfd-5aa0-4f80-afce-8cef34880226'; // change this when auth is ready
    return (
        <div className="flex flex-col gap-4">
            <h2 className="mb-4 text-xl md:text-2xl dark:text-amber-500 font-bold text-center">Stories</h2>
            <CreateStoryForm artist_id={artist_id}/>
            <div className="flex flex-col gap-2 p-4">
                <h2 className="font-bold text-center p-2 dark:text-amber-500 rounded-md mb-4 w-fit">MY STORIES</h2>
                <Stories id={artist_id}/>
            </div>
           
        </div>
    );
}