import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to motchi",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
