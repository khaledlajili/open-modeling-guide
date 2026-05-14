import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Open Modeling Guide',
    tagline: 'Think in models. Build with confidence.',
    favicon: 'img/logo.svg',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    url: 'https://khaledlajili.github.io',
    baseUrl: '/open-modeling-guide/',

    trailingSlash: true,

    organizationName: 'khaledlajili',
    projectName: 'open-modeling-guide',

    onBrokenLinks: 'throw',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    // DEFAULT docs instance = MDA
                    path: 'docs/mda',
                    routeBasePath: 'mda',
                    sidebarPath: require.resolve('./sidebarsMda.ts'),
                    editUrl: 'https://github.com/khaledlajili/open-modeling-guide/tree/main/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    plugins: [
        // Additional guides (UML, BPMN, etc.) can be enabled as separate
        // `@docusaurus/plugin-content-docs` instances. They are intentionally
        // disabled for a minimal site now. To re-enable, uncomment and adjust
        // the blocks below.

        // Example placeholder for adding an extra docs plugin:
        // [
        //   '@docusaurus/plugin-content-docs',
        //   {
        //     id: 'uml',
        //     path: 'docs/uml',
        //     routeBasePath: 'uml',
        //     sidebarPath: require.resolve('./sidebarsUml.ts'),
        //     editUrl: 'https://github.com/khaledlajili/open-modeling-guide/tree/main/',
        //   },
        // ],

        // [
        //   '@docusaurus/plugin-content-docs',
        //   {
        //     id: 'bpmn',
        //     path: 'docs/bpmn',
        //     routeBasePath: 'bpmn',
        //     sidebarPath: require.resolve('./sidebarsBpmn.ts'),
        //     editUrl: 'https://github.com/khaledlajili/open-modeling-guide/tree/main/',
        //   },
        // ],
    ],


    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'Open Modeling Guide',
            logo: {
                alt: 'Open Modeling Guide Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    to: '/guides',
                    label: 'Guides',
                    position: 'left',
                },
                {
                    to: '/blog',
                    label: 'Blog',
                    position: 'left',
                },
                {
                    href: 'https://github.com/khaledlajili/open-modeling-guide',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            copyright: `Copyright © ${new Date().getFullYear()} Open Modeling Guide.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig
};

export default config;
