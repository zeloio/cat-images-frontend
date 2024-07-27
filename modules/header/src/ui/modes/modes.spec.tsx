import { render } from '@testing-library/react';

import Modes from './modes';

describe('Modes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Modes />);
    expect(baseElement).toBeTruthy();
  });
});
