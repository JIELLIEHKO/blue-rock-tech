import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }
  // TODO: save user, hash password, set session cookie
  return NextResponse.json({ ok: true });
}
