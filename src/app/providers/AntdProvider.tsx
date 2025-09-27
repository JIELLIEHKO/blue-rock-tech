// app/dashboard/providers/AntdProvider.tsx
'use client';

import { ConfigProvider, theme as antdTheme } from "antd";
import { useTheme } from "@/app/providers/ThemeProvider";

export function AntdProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <ConfigProvider
      theme={{
        algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: "var(--color-primary)",
          colorBgBase: "var(--color-background)",
          colorTextBase: "var(--color-foreground)",
          borderRadius: 10,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
