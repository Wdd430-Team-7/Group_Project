import SellersProfilePage from "@/app/sellers/profile/SellersProfilePage";
import { auth } from "@/../auth";
import { fetchAccountByEmail } from "@/app/lib/online-data";
import AccessDenied from "@/app/ui/dashboard/access-denied";

export default async function Page() {
    const session = await auth()
    const email = session?.user?.email
    const account = await fetchAccountByEmail(email)

    if (account) {
        const artist_id = account.account_id
        return (
            <SellersProfilePage artist_id={artist_id}/>
        );
    } else {
        return (
            <>
                <AccessDenied />
            </>
        );
    
    }
}