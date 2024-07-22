import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Providers } from '../providers';

function customRender(ui: React.ReactElement, options?: RenderOptions) {
  return render(ui, {
    wrapper: ({ children }) => <Providers>{children}</Providers>,
    ...options,
  });
}

export * from '@testing-library/react';

export { customRender as render };
