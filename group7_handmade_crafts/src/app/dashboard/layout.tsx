import DashNav from "../ui/dashboard/dash-nav";

export default function Layout( { children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            <div className="w-full flex-none md:w-64">
                <DashNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}