export default function AccessDenied() {
    return (
        <div>
          <p>You are not allowed access. Please login with authorized credentials.</p>
          <a href="/login" className="px-4 py-2 text-sm bg-gray-50">Login</a>
        </div>
      );
}