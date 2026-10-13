import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Education from '../../Resume/Education';
import Degree from '../../Resume/Education/Degree';

const mockDegrees = [
  {
    school: 'Hubei University of Technology',
    degree: 'B.Eng. Computer Science and Technology',
    link: 'https://www.hbut.edu.cn',
    year: 2027,
  },
  {
    school: 'Wuhan University',
    degree: 'Exchange Program',
    link: 'https://www.whu.edu.cn',
    year: 2025,
  },
];

describe('Education', () => {
  it('renders the education section with title', () => {
    render(<Education data={mockDegrees} />);

    expect(
      screen.getByRole('heading', { name: /education/i }),
    ).toBeInTheDocument();
  });

  it('renders all degrees', () => {
    render(<Education data={mockDegrees} />);

    expect(
      screen.getByText('B.Eng. Computer Science and Technology'),
    ).toBeInTheDocument();
    expect(screen.getByText('Exchange Program')).toBeInTheDocument();
  });

  it('renders school links', () => {
    render(<Education data={mockDegrees} />);

    const hbutLink = screen.getByRole('link', { name: /hubei/i });
    expect(hbutLink).toHaveAttribute('href', 'https://www.hbut.edu.cn');

    const wuhanLink = screen.getByRole('link', { name: /wuhan/i });
    expect(wuhanLink).toHaveAttribute('href', 'https://www.whu.edu.cn');
  });
});

describe('Degree', () => {
  const mockDegree = {
    school: 'Hubei University of Technology',
    degree: 'B.Eng. Computer Science and Technology',
    link: 'https://www.hbut.edu.cn',
    year: 2027,
  };

  it('renders degree title', () => {
    render(<Degree data={mockDegree} />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'B.Eng. Computer Science and Technology',
    );
  });

  it('renders school name with link', () => {
    render(<Degree data={mockDegree} />);

    const link = screen.getByRole('link', { name: /hubei/i });
    expect(link).toHaveAttribute('href', 'https://www.hbut.edu.cn');
  });

  it('displays year', () => {
    render(<Degree data={mockDegree} />);

    expect(screen.getByText(/2027/)).toBeInTheDocument();
  });

  it('renders as article element', () => {
    render(<Degree data={mockDegree} />);

    const article = document.querySelector('article.degree-container');
    expect(article).toBeInTheDocument();
  });
});
