import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { featured } from '@/data/projects';

import HomePage from '../page';

describe('homepage selected-work preview', () => {
  it('previews the featured entries with their screenshots', () => {
    render(<HomePage />);

    const section = screen.getByRole('region', { name: 'Selected work' });
    const cards = section.querySelectorAll('.home-project-card');

    expect(cards).toHaveLength(featured.length);
    expect(
      [...cards].map((card) => card.querySelector('h3')?.textContent),
    ).toEqual(featured.map((project) => project.title));

    for (const card of cards) {
      expect(card.querySelector('img')).toBeInTheDocument();
    }
  });

  it('links every card to its public destination and the index', () => {
    render(<HomePage />);

    const section = screen.getByRole('region', { name: 'Selected work' });

    for (const project of featured) {
      const link = within(section).getByRole('link', {
        name: new RegExp(project.title, 'i'),
      });
      expect(link).toHaveAttribute('href', project.link);
      expect(link).toHaveAttribute('target', '_blank');
    }

    const allProjects = within(section).getByRole('link', {
      name: /all projects/i,
    });
    expect(allProjects.getAttribute('href')?.replace(/\/$/, '')).toBe(
      '/projects',
    );
  });
});
