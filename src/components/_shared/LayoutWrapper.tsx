"use client";

import { usePathname } from "next/navigation";

export default function LayoutWrapper({
  children,
  header: Header,
  footer: Footer,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHidden = pathname.startsWith("/admin") || pathname.startsWith("/login");

  return (
    <>
      {!isHidden && Header}
      <main className="flex-1 flex flex-col w-full">{children}</main>
      {!isHidden && Footer}
    </>
  );
}
