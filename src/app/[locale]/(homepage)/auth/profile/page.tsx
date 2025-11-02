// app/profile/page.tsx
import { cookies } from 'next/headers';

export default async function ProfilePage() {
  const cookieHeader = cookies().toString();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
    headers: { Cookie: cookieHeader },
    cache: 'no-store',
  });

  if (res.status === 401) {
    const { redirect } = await import('next/navigation');
    redirect('/login');
  }

  const user = await res.json();
  return (
    <main className="max-w-2xl mx-auto space-y-2">
      <h1 className="text-2xl font-semibold">Profile</h1>
      <div><b>ID:</b> {user.id}</div>
      <div><b>Email:</b> {user.email}</div>
      {user.name && <div><b>Name:</b> {user.name}</div>}
    </main>
  );
}
