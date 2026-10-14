import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const heroSection = document.querySelector('.hero');
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the name as heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Bohan Yu');
  });

  it('describes the current work and links the aerial manipulator', () => {
    const { container } = render(<Hero />);

    const universityLink = screen.getByRole('link', {
      name: /hubei university of technology/i,
    });
    expect(universityLink).toHaveAttribute('href', 'https://www.hbut.edu.cn');
    expect(universityLink).toHaveClass('hero-highlight');

    const armLink = screen.getByRole('link', {
      name: /rigid-soft aerial manipulator/i,
    });
    expect(armLink).toHaveAttribute(
      'href',
      'https://github.com/yubohann/AerialSoftArm',
    );
    expect(armLink).toHaveClass('hero-highlight');

    expect(container.querySelector('.hero-tagline')).toHaveTextContent(
      "I'm a Computer Science undergraduate at Hubei University of Technology, building multi-agent robot systems and a rigid-soft aerial manipulator.",
    );
    expect(container.querySelector('.hero-summary')).toHaveTextContent(
      'My work spans physics-grounded search benchmarks, robot learning',
    );
  });

  it('keeps personal stats and incomplete credential lists off the homepage', () => {
    const { container } = render(<Hero />);

    expect(container.querySelector('.telemetry')).not.toBeInTheDocument();
    expect(container.querySelector('.hero-chips')).not.toBeInTheDocument();
    expect(screen.queryByText('Countries visited')).not.toBeInTheDocument();
    expect(screen.queryByText('Computing since')).not.toBeInTheDocument();
    expect(screen.queryByText('Based in')).not.toBeInTheDocument();
    expect(screen.queryByText('YC Alum')).not.toBeInTheDocument();
  });

  it('renders one primary CTA and one quieter resume link', () => {
    render(<Hero />);

    const aboutButton = screen.getByRole('link', { name: /about me/i });
    expect(aboutButton).toHaveAttribute('href', '/about');
    expect(aboutButton).toHaveClass('button');

    const resumeButton = screen.getByRole('link', { name: /view resume/i });
    expect(resumeButton).toHaveAttribute('href', '/resume');
    expect(resumeButton).toHaveClass('hero-resume-link');
    expect(resumeButton).not.toHaveClass('button');
  });
});
