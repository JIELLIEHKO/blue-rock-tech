import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Прокинем входящие куки, если нужно
      cookie: req.headers.get('cookie') ?? '',
    },
    body: JSON.stringify({ email, password }),
  });

  // Тело может быть пустым -> сначала как текст
  const text = await res.text();
  const data = text ? JSON.parse(text) : {};

  // Создаём ответ тем же статусом и телом
  const resp = NextResponse.json(data, { status: res.status });

  // === ВАЖНО: пробрасываем Set-Cookie от бэка ===
  const setCookie = res.headers.get('set-cookie');
  if (setCookie) {
    resp.headers.set('set-cookie', setCookie);
  }

  return resp;
}
