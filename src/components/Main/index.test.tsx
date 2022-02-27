import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main/>', () => {
  it('should render the header', () => {
    const { container } = render(<Main />);

    const heading = screen.getByRole('heading', {
      name: /react next boilerplate/i,
    });
    expect(heading).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
