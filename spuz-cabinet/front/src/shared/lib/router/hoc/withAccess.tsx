import React from 'react';

import { useUser } from '~entities/shared/user';
import { NotFoundPage } from '~pages/shared/not-found';

export const withAccess =
  () =>
  <P extends Record<string, unknown>>(WrappedComponent: React.ComponentType<P>) => {
    const WithRole: React.FC<P> = (props) => {
      const user = useUser();

      if (!user) {
        return <NotFoundPage />;
      }

      return <WrappedComponent {...props} />;
    };

    return WithRole;
  };
