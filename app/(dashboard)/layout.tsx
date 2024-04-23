import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;