'use client';

import { Form, Input, Checkbox, Button, Alert, message } from "antd";
import { useState } from 'react';
import AuthCard from '@/views/auth/AuthCard';
import OAuthButtons from '@/views/auth/OAuthButtons';
import { useParams, useRouter, useSearchParams } from "next/navigation";


type Values = { email: string; password: string; remember?: boolean };

export default function LoginPage() {
  const router = useRouter();
  const { locale } = useParams<{ locale: string }>();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onFinish = async (values: Values) => {
    setErr(null);
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // same-origin, поэтому credentials можно не указывать
        body: JSON.stringify({ email: values.email, password: values.password }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg = (data?.message as string) || 'Login failed';
        setErr(msg);
        message.error(msg);
        return;
      }

      message.success('Добро пожаловать!');
      router.replace(`/${locale}/auth/profile`);
    } catch (e: any) {
      const msg = e?.message ?? 'Network error';
      setErr(msg);
      message.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
      <AuthCard title="Log in" subtitle="Welcome back!">
        {err ? <Alert type="error" showIcon message={err} className="mb-4" /> : null}

        <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Enter a valid email' },
            ]}
          >
            <Input placeholder="you@example.com" autoComplete="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password placeholder="Your password" autoComplete="current-password" />
          </Form.Item>

          <div className="mb-4 flex items-center justify-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="/auth/forgot" className="text-sm">Forgot password?</a>
          </div>

          <Button block type="primary" htmlType="submit" loading={loading}>
            Log in
          </Button>
        </Form>

        <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <OAuthButtons />

        <p className="mt-4 text-sm text-muted-foreground">
          Don’t have an account? <a href="/auth/register" className="underline">Sign up</a>
        </p>
      </AuthCard>
    </div>
  );
}
