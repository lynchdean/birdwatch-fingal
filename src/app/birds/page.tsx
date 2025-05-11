import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirecting to Terns...',
};

export default function BirdsRedirect() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Terns...</h1>
        <p>If you are not redirected automatically, <a href="/terns" className="text-blue-500 hover:underline">click here</a>.</p>
      </div>
    </div>
  );
} 