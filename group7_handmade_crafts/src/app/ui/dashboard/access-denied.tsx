export default function AccessDenied() {
    return (
        <div className="flex flex-col items-center gap-4">
          <p>You are not allowed access. Please login with authorized credentials.</p>
          <a href="/login" className="px-4 py-2 text-sm bg-gray-50 border-2 border-amber-500 hover:bg-amber-500 hover:text-black rounded-md dark:bg-transparent">Login</a>
        </div>
      );
}