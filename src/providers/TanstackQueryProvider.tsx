"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Error = {
  status: number;
  timestamp: string;
  errorCode: string;
};

const queryClient = new QueryClient();

export default function TanstackQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
