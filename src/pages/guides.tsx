import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';

import {CardGrid} from '@site/src/components/CardGrid';
import {guideCards} from '@site/src/content/siteContent';

import styles from './guides.module.css';

export default function GuidesPage(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Guides | ${siteConfig.title}`}
      description="Browse the available modeling guides in a card view.">
      <main className={styles.page}>
        <header className={styles.hero}>
          <div className={clsx('container', styles.heroContent)}>
            <p className={styles.eyebrow}>Guide library</p>
            <Heading as="h1" className={styles.title}>
              Browse the guides
            </Heading>
            <p className={styles.description}>
                Open Modeling Guide translates complex standards into clear, structured understanding for modern system builders.
            </p>
          </div>
        </header>

        <section className={styles.section}>
          <div className="container">
            <CardGrid cards={guideCards} />
          </div>
        </section>
      </main>
    </Layout>
  );
}