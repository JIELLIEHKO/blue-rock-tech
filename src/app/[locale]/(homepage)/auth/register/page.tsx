'use client';

import { Form, Input, Checkbox, Button, Alert } from 'antd';
import { useState } from 'react';
import AuthCard from '@/views/auth/AuthCard';
import OAuthButtons from '@/views/auth/OAuthButtons';

type Values = { name: string; email: string; password: string; confirm: string; terms?: boolean };

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onFinish = async (values: Values) => {
    setErr(null);
    setLoading(true);
    try {
      const { confirm, ...payload } = values;
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || 'Registration failed');
      }
      window.location.href = '/';
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
      <AuthCard title="Create account" subtitle="Start your project with us">
        {err ? <Alert type="error" showIcon message={err} className="mb-4" /> : null}

        <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
          <Form.Item
            label="Full name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Your name" autoComplete="name" />
          </Form.Item>

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
            rules={[
              { required: true, message: 'Please enter a password' },
              { min: 8, message: 'Use at least 8 characters' },
            ]}
          >
            <Input.Password placeholder="Create a password" autoComplete="new-password" />
          </Form.Item>

          <Form.Item
            label="Confirm password"
            name="confirm"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) return Promise.resolve();
                  return Promise.reject(new Error('Passwords do not match'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Repeat your password" autoComplete="new-password" />
          </Form.Item>

          <Form.Item name="terms" valuePropName="checked" rules={[
            {
              validator: (_, v) => (v ? Promise.resolve() : Promise.reject(new Error('Please accept the Terms'))),
            },
          ]}>
            <Checkbox>I agree to the <a href="/terms" className="underline">Terms</a></Checkbox>
          </Form.Item>

          <Button block type="primary" htmlType="submit" loading={loading}>
            Create account
          </Button>
        </Form>

        <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <OAuthButtons />

        <p className="mt-4 text-sm text-muted-foreground">
          Already have an account? <a href="/auth/login" className="underline">Log in</a>
        </p>
      </AuthCard>
    </div>
  );
}
