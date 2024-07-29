import { render } from '@testing-library/react';

import GeneratedLink from './generated-link';

describe('GeneratedLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GeneratedLink />);
    expect(baseElement).toBeTruthy();
  });
});
