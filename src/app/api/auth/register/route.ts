import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { email, password, name } = body ?? {};

  if (!email || !password) {
    return NextResponse.json({ message: 'Email and password required' }, { status: 400 });
  }

  const res = await fetch(`${process.env.BACKEND_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      cookie: req.headers.get('cookie') ?? '',
    },
    body: JSON.stringify({ email, password, name }),
  });

  const text = await res.text();
  const data = text ? JSON.parse(text) : {};

  const resp = NextResponse.json(data, { status: res.status });

  // Пробрасываем куку, которую ставит бэкенд (/auth/register)
  const setCookie = res.headers.get('set-cookie');
  if (setCookie) {
    resp.headers.set('set-cookie', setCookie);
  }

  return resp;
}
