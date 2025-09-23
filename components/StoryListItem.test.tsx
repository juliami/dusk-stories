import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StoryListItem from './StoryListItem';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

// Mock Contentful function
jest.mock('@contentful/rich-text-plain-text-renderer', () => ({
  documentToPlainTextString: jest.fn((doc) => doc?.content?.[0]?.value || ''),
}));

describe('StoryListItem', () => {
  const defaultProps = {
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
    expect(screen.getByText(defaultProps.publicationYear.toString())).toBeInTheDocument();
  });

  it('renders the rating', () => {
    render(<StoryListItem {...defaultProps} />);
    expect(screen.getByText(`${defaultProps.rating}/5`)).toBeInTheDocument();
  });

  it('renders a dash if optional props are missing', () => {
    render(<StoryListItem title="No Extras" />);
    const dashes = screen.getAllByText('—');
    expect(dashes).toHaveLength(3);
  });

  it('renders the link with correct href', () => {
    render(<StoryListItem {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/stories/${defaultProps.slug}`);
  });

  it('renders the synopsis (short text)', () => {
    const synopsis = { content: [{ value: 'This is a short synopsis.' }] };
    (documentToPlainTextString as jest.Mock).mockReturnValue('This is a short synopsis.');

    render(<StoryListItem {...defaultProps} synopsis={synopsis} />);
    expect(screen.getByText('This is a short synopsis.')).toBeInTheDocument();
  });

  it('truncates long synopsis', () => {
    const longText = 'a'.repeat(300);
    const synopsis = { content: [{ value: longText }] };
    (documentToPlainTextString as jest.Mock).mockReturnValue(longText);

    render(<StoryListItem {...defaultProps} synopsis={synopsis} />);
    const displayed = screen.getByText(/…$/); // ends with ellipsis
    expect(displayed.textContent?.length).toBe(251); // 250 chars + …
  });
});
