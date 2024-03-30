import Story from "./story";
import Link from "next/link";
import { fetchStoriesById } from "@/app/lib/dashboard-data";


export default async function Stories({ id } : { id: string }) {
    const stories = await fetchStoriesById(id);
    return (
        <div className="flex flex-col rounded-md p-4 gap-2 w-full">
            <h3 className="font-bold text-left p-2 dark:text-amber-500 rounded-md mb-4">LATEST STORIES</h3>
            {
                stories.map((story) => {
                    const text = story.story_content;
                    const date = story.story_date.toString().slice(0,15);
                    const story_id = story.story_id;
                    return (
                        <Story key={story_id} text={text} date={date}/>
                    );
                })
            }
            <a href="/dashboard/stories" className="px-4 py-2 rounded-md bg-amber-500 text-black hover:bg-amber-400 self-center">Manage Stories</a>
        </div>       
    );
}