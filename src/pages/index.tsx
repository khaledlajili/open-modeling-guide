import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import {CardGrid} from '@site/src/components/CardGrid';
import {
  featuredBlogPosts,
  guideCards,
} from '@site/src/content/siteContent';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroContent)}>
        <p className={styles.eyebrow}>Democratizing modeling knowledge</p>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <p className={styles.heroBody}>
            Open Modeling Guide translates complex standards into clear,
            structured understanding for modern system builders.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/guides">
            Browse guides
          </Link>
          <Link className="button button--secondary button--lg" to="/blog">
            Read the blog
          </Link>
        </div>
      </div>
    </header>
  );
}

function SectionHeader({
  title,
  description,
  href,
  linkLabel,
}: {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className={styles.sectionHeader}>
      <div>
        <p className={styles.sectionKicker}>{description}</p>
        <Heading as="h2" className={styles.sectionTitle}>
          {title}
        </Heading>
      </div>
      <Link className={styles.sectionLink} to={href}>
        {linkLabel}
      </Link>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="A practical guide library with modeling publications and blog updates.">
      <HomepageHeader />
      <main className={styles.homepageMain}>
        <section className={styles.section}>
          <div className="container">
            <SectionHeader
              title="Latest guides"
              description="Deep dives into modeling, architecture, and structured system thinking."
              href="/guides"
              linkLabel="Browse all guides"
            />
            <CardGrid cards={guideCards.slice(0, 3)} />
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <SectionHeader
              title="Recent blog posts"
              description="Announcements, technical notes, and evolving thoughts around modeling and architecture."
              href="/blog"
              linkLabel="Browse all posts"
            />
            <CardGrid cards={featuredBlogPosts} />
          </div>
        </section>
      </main>
    </Layout>
  );
}
