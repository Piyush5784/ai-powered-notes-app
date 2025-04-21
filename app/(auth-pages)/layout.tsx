export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl h-[90vh]  flex flex-col gap-12 pt-20 items-center">
      {children}
    </div>
  );
}
