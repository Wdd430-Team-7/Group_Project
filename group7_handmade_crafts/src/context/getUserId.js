import { auth } from "../../auth";
import { fetchAccountById, fetchAccountByEmail } from "../app/lib/online-data";

const session = await auth();
const email = session?.user?.email;
const account = await fetchAccountByEmail(email);

export const accountId = account?.account_id || "";
