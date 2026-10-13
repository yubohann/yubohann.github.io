import Image from 'next/image';

import type { Project } from '@/data/projects';
import { PROJECT_IMAGE } from '@/lib/utils';

import DateRange from './DateRange';
import { externalLinkProps, NoLinkNote } from './shared';

interface EntryProps {
  data: Project;
}

/**
 * One row of the shipped register.
 *
 * Entries with a screenshot lead with it; the rest hold on display type and a
 * hairline, so an entry never wants invented art. Dates and role sit on one
 * meta line above the title — the same reading order as an archive card, so
 * the two lists on the site read as one system.
 */
export default function Entry({ data }: EntryProps) {
  const { title, subtitle, link, image, date, endDate, ongoing, desc, tech } =
    data;

  const className = [
    'project-entry',
    link ? 'project-entry--linked' : 'project-entry--static',
    image ? 'project-entry--with-image' : '',
    // Live work leads the register, so it carries a size step. Derived from
    // the data rather than from a per-entry flag.
    ongoing ? 'project-entry--live' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const body = (
    <>
      {image && (
        <div className="project-entry-figure">
          <Image
            src={image}
            alt=""
            width={PROJECT_IMAGE.width}
            height={PROJECT_IMAGE.height}
            sizes="(max-width: 640px) 100vw, 260px"
          />
        </div>
      )}

      <div className="project-entry-body">
        <div className="project-entry-meta">
          <DateRange date={date} endDate={endDate} ongoing={ongoing} />
          {subtitle && <span className="project-entry-role">{subtitle}</span>}
        </div>

        <h3 className="project-entry-title">
          {title}
          {link && (
            <span className="project-entry-external" aria-hidden="true">
              ↗
            </span>
          )}
        </h3>
        <p className="project-entry-desc">{desc}</p>

        {tech && tech.length > 0 && (
          <div className="project-entry-tech">
            {tech.map((item) => (
              <span key={item} className="tech-tag">
                {item}
              </span>
            ))}
          </div>
        )}

        {!link && <NoLinkNote />}
      </div>
    </>
  );

  if (!link) {
    return <div className={className}>{body}</div>;
  }

  return (
    <a className={className} {...externalLinkProps(link, title)}>
      {body}
    </a>
  );
}
