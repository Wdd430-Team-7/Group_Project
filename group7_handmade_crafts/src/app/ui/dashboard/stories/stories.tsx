import Story from "./story";
import Link from "next/link";
import { fetchStoriesById } from "@/app/lib/dashboard-data";


export default async function Stories({ id } : { id: string }) {
    const stories = await fetchStoriesById(id);
    return (
        <div className="flex flex-col rounded-md p-4 gap-2 w-full">
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
        </div>       
    );
}