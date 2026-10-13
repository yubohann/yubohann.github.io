import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { SchemaGraph } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';
import { featured } from '@/data/projects';
import { HOME_URL, profilePageNode } from '@/lib/schema';
import {
  AUTHOR_NAME,
  formatDate,
  PROJECT_IMAGE,
  SITE_DESCRIPTION,
  SITE_URL,
} from '@/lib/utils';
import { getWritingItems } from '@/lib/writing';

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  // The homepage builds its openGraph in the root layout, so it only needs
  // the canonical here. `trailingSlash: true` makes `/` the canonical form.
  alternates: { canonical: `${SITE_URL}/` },
};

export default function HomePage() {
  const recentWriting = getWritingItems()
    .filter((item) => item.date)
    .slice(0, 3);

  return (
    <PageWrapper mainClassName="page-main--hero">
      <SchemaGraph
        nodes={[profilePageNode({ url: HOME_URL, name: AUTHOR_NAME })]}
      />
      <Hero />
      <section className="home-projects" aria-labelledby="home-projects-title">
        <div className="home-projects-header">
          <h2 id="home-projects-title">Selected work</h2>
          <Link href="/projects/" className="home-projects-all">
            All projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="home-projects-grid">
          {featured.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="home-project-card"
            >
              <span className="home-project-figure">
                <Image
                  src={project.image as string}
                  alt=""
                  width={PROJECT_IMAGE.width}
                  height={PROJECT_IMAGE.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 240px"
                />
              </span>
              <h3 className="home-project-title">{project.title}</h3>
              <p className="home-project-sub">{project.subtitle}</p>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      </section>
      <section className="home-writing" aria-labelledby="home-writing-title">
        <div className="home-writing-header">
          <h2 id="home-writing-title">Notes &amp; essays</h2>
          <Link href="/writing/" className="home-writing-all">
            All writing <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="home-writing-list">
          {recentWriting.map((item) => {
            const content = (
              <>
                <span className="home-writing-meta">
                  {formatDate(item.date)} · {item.source}
                </span>
                <div className="home-writing-copy">
                  <h3>{item.title}</h3>
                </div>
                <span className="home-writing-arrow" aria-hidden="true">
                  ↗
                </span>
              </>
            );

            return item.isExternal ? (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="home-writing-item"
              >
                {content}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <Link
                key={item.url}
                href={item.url}
                className="home-writing-item"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </section>
    </PageWrapper>
  );
}
