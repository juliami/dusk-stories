import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StoryListItem from './StoryListItem';

describe('StoryListItem', () => {
  const defaultProps = {
    id: 'xyz',
    title: 'Lies and Lilies',
    author: 'Bram Stoker',
    publicationYear: 1881,
    rating: 3,
    slug: 'lies-and-lilies',
  };

  it('renders the title in a heading', () => {
    render(<StoryListItem {...defaultProps} />);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent(defaultProps.title);
  });

  it('renders the author', () => {
    render(<StoryListItem {...defaultProps} />);
    expect(screen.getByText(defaultProps.author)).toBeInTheDocument();
  });

  it('renders the publication year', () => {
    render(<StoryListItem {...defaultProps} />);
    expect(
      screen.getByText(defaultProps.publicationYear.toString()),
    ).toBeInTheDocument();
  });

  it('renders the rating', () => {
    render(<StoryListItem {...defaultProps} />);
    expect(screen.getByText(`${defaultProps.rating}/5`)).toBeInTheDocument();
  });

  it('renders a dash if optional props are missing', () => {
    render(<StoryListItem id='aa' title='No Extras' />);
    const dashes = screen.getAllByText('—');
    expect(dashes).toHaveLength(3);
  });

  it('renders the link with correct href', () => {
    render(<StoryListItem {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/stories/${defaultProps.slug}`);
  });

  it('renders the synopsis (short text)', () => {
    const synopsis = 'This is a short synopsis.';

    render(<StoryListItem {...defaultProps} synopsis={synopsis} />);
    expect(screen.getByText('This is a short synopsis.')).toBeInTheDocument();
  });

  it('truncates long synopsis', () => {
    const synopsis = 'a'.repeat(300);
    render(<StoryListItem {...defaultProps} synopsis={synopsis} />);
    const displayed = screen.getByText(/…$/); // ends with ellipsis
    expect(displayed.textContent?.length).toBe(251); // 250 chars + …
  });
});
