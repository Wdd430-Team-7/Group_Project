import Story from "@/app/ui/dashboard/stories/story";
import CreateStoryForm from "@/app/ui/dashboard/stories/create-story-form";
import Stories from "@/app/ui/dashboard/stories/stories";
import AllStories from "@/app/ui/dashboard/stories/all-stories";
import { auth } from "@/../auth";
import AccessDenied from "@/app/ui/dashboard/access-denied";
import { fetchAccountByEmail } from "@/app/lib/online-data";

export default async function Page() {
    const session = await auth();
    const email = session?.user?.email
    const account = await fetchAccountByEmail(email)

    if (account) {
        const artist_id = account.account_id
        return (
            <div className="flex flex-col gap-4">
                <h2 className="mb-4 text-xl md:text-2xl dark:text-amber-500 font-bold text-center">Stories</h2>
                <CreateStoryForm artist_id={artist_id}/>
                <div className="flex flex-col gap-2 p-4">
                    <h2 className="font-bold text-center p-2 dark:text-amber-500 rounded-md mb-4 w-fit">MY STORIES</h2>
                    <AllStories id={artist_id}/>
                </div>
               
            </div>
        );    
    } else {
        return (
            <>
                <AccessDenied />
            </>
        );
    }
}