import { render } from '@testing-library/react';

import ImagePreview from './image-preview';

describe('ImagePreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImagePreview />);
    expect(baseElement).toBeTruthy();
  });
});
