type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-[100dvh] grid place-content-center bg-background">
      {children}
    </div>
  );
};
