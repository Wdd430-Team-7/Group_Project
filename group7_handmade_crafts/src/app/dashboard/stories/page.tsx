import Story from "@/app/ui/dashboard/story";
export default function Page() {
    return (
        <div className="flex flex-col gap-4">
            <h2>Stories</h2>
            <form action="" className="bg-amber-100 p-4 flex flex-col gap-4 rounded-md">
                <p className="font-bold">Share a new story:</p>
                <label htmlFor="story_content">
                    <textarea name="story_content" id="content_id" rows={3} className="w-full rounded-md"></textarea>
                </label>
                <input type="submit" value="Post" className="px-4 py-2 bg-amber-500 rounded-md w-fit self-center"/>
            </form>
            <p>display a list of stories here like an X feed from most recent to oldest</p>
            <div className="flex flex-col gap-2 bg-amber-100 p-4">
                <h2 className="font-bold text-center">My Stories</h2>
                <Story text="If you could hie to Kolob." date="2024-01-01"/>
                <Story text="If you could hie to Kolob." date="2024-01-01"/>
                <Story text="If you could hie to Kolob." date="2024-01-01"/>
                <Story text="If you could hie to Kolob." date="2024-01-01"/>
            </div>
           
        </div>
    );
}