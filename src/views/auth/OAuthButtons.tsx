'use client';

import { Button } from 'antd';

export default function OAuthButtons() {
  return (
    <div className="grid gap-2">
      <Button block onClick={() => (window.location.href = '/api/auth/oauth/google')}>
        Continue with Google
      </Button>
      <Button block onClick={() => (window.location.href = '/api/auth/oauth/github')}>
        Continue with GitHub
      </Button>
    </div>
  );
}
