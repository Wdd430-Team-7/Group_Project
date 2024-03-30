import Story from "@/app/ui/dashboard/story";
export default function Page() {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="mb-4 text-xl md:text-2xl dark:text-amber-500 font-bold text-center">Stories</h2>
            <form action="" className="p-4 flex flex-col gap-4 rounded-md">
                <p className="font-bold">Share a new story:</p>
                <label htmlFor="story_content">
                    <textarea name="story_content" id="content_id" rows={3} className="w-full rounded-md p-2" placeholder="What's on your mind?"></textarea>
                </label>
                <input type="submit" value="Post" className="text-black px-4 py-2 bg-amber-500 hover:bg-green-500 rounded-md w-fit self-center"/>
            </form>
            <div className="flex flex-col gap-2 p-4">
                <h2 className="font-bold text-center bg-amber-500 p-2 text-black rounded-md mb-4">My Stories</h2>
                <Story text="If you could hie to Kolob." date="2024-01-01"/>
                <Story text="If you could hie to Kolob." date="2024-01-01"/>
                <Story text="If you could hie to Kolob." date="2024-01-01"/>
                <Story text="If you could hie to Kolob." date="2024-01-01"/>
            </div>
           
        </div>
    );
}