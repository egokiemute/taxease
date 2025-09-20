import Container from "@/components/commons/Container";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Container>{children}</Container>
    </section>
  );
}
