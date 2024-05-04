import "./globals.css";
import "style/index.scss";
import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import ToastMessage from "@/components/AlertMessage/ToastMessage";
import { Providers } from "@/providers/Provider";
import { StoreProvider } from "@/redux/StoreProvider";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";

const lexend = Lexend_Deca({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "HeyDevs - Developer-focused job platform",
  description:
    "HeyDevs là nền tảng tuyển dụng dành cho lập trình viên, nơi bạn tạo hồ sơ và để các công ty ứng tuyển vào bạn!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="vi">
        <body suppressHydrationWarning={true} className={lexend.className}>
          <TanstackQueryProvider>
            <Providers>{children}</Providers>
          </TanstackQueryProvider>
          <ToastMessage />
        </body>
      </html>
    </StoreProvider>
  );
}
