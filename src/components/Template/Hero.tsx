import Link from 'next/link';

import profile from '@/data/profile.json';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <p className="hero-kicker">Robotics &amp; embodied AI</p>
          <h1 className="hero-title">
            <span className="hero-name">{profile.name}</span>
          </h1>
          <p className="hero-tagline">
            I&apos;m a {profile.role} at{' '}
            <a href="https://www.hbut.edu.cn" className="hero-highlight">
              {profile.employer}
            </a>
            , building multi-agent robot systems and a{' '}
            <a
              href="https://github.com/yubohann/AerialSoftArm"
              className="hero-highlight"
            >
              rigid-soft aerial manipulator
            </a>
            .
          </p>

          <p className="hero-summary">
            My work spans physics-grounded search benchmarks, robot learning and
            VLM navigation baselines, and a rigid-soft aerial arm that grasps by
            bending — with two first-author manuscripts in submission. I&apos;m
            seeking internship and research roles in robotics and embodied AI.
          </p>

          <div className="hero-cta">
            <Link href="/about" className="button">
              About me <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/resume" className="hero-resume-link">
              View resume
            </Link>
            <a
              href="https://github.com/yubohann"
              className="hero-resume-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <figure className="hero-portrait">
          <ThemePortrait width={320} height={320} priority />
          <figcaption>{profile.currentCity}</figcaption>
        </figure>
      </div>
    </section>
  );
}
