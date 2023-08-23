import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-2 p-5 max-w-xs bg-slate-800 w-full rounded-lg text-white">
        <div className="text-center my-4">
          <h1>Flux</h1>
        </div>
        <div>
          <Link
            className="bg-slate-900 my-4 p-3 rounded-lg block"
            href="/"
          >
            Sign In
          </Link>
        </div>
        <div>
          <Link
            className="bg-slate-900 my-4 p-3 rounded-lg block"
            href="/"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
