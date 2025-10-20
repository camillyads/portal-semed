import type { ReactNode, FC } from 'react';

type LayoutProps = {
  header?: ReactNode;
  body?: ReactNode;
};
const Layout: FC<LayoutProps> = ({ header, body }) => {
  return (
    <div className="container">
      {header}
      {body}
    </div>
  );
};

export default Layout;