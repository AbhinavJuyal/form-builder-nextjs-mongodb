import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex items-center text-white">
        <main className="flex flex-col mx-auto">
          <div className="w-full max-w-sm text-center mb-4">
            <h1 className="text-4xl font-bold mb-4">Form Builder App</h1>
            <p>You need to login or Register first to use this app....</p>
          </div>
          <div className="w-full flex">
            <div className="mx-auto">
              <Link href="/login">
                <span className="dui-btn dui-btn-primary mx-2">Login</span>
              </Link>
              <Link href="/register">
                <span className="dui-btn dui-btn-primary mx-2">Register</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
