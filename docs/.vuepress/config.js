module.exports = {
    /**
     * The base URL the site will be deployed at.
     *
     * @type {String}
     * @default ['/']
     *
     * @see {@link https://vuepress.vuejs.org/config/#base}
     */
    base: '/vue-istilo/',

    /**
     * VuePress uses cache-loader by default to greatly speed up the compilation of webpack.
     *
     * @type {Boolean|String}
     * @default [true]
     *
     * @see {@link https://vuepress.vuejs.org/config/#cache}
     */
    cache: true,

    /**
     * Description for the site.
     *
     * @type {String}
     * @default [undefined]
     *
     * @see {@link https://vuepress.vuejs.org/config/#description}
     */
    description: 'A lightweight Vue component framework for website interface.',

    /**
     * Specify the output directory for vuepress build.
     *
     * @type {String},
     * @default ['.vuepress/dist']
     *
     * @see {@link https://vuepress.vuejs.org/config/#dest}
     */
    dest: 'docs/dist',

    /**
     * Specify extra files to watch.
     *
     * @type {Array}
     * @default []
     *
     * @see {@link https://vuepress.vuejs.org/config/#extrawatchfiles}
     */
    extraWatchFiles: [],

    /**
     * Extra tags to inject into the page HTML <head>.
     *
     * @type {Array}
     * @default [[]]
     *
     * @see {@link https://vuepress.vuejs.org/config/#head}
     */
    head:
    [
        ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        ['meta', { charset: 'utf-8' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        ['meta', { name: 'title', content: 'Oruga UI - Vue Js' }],
        ['meta', { name: 'og:locale', content: 'en_US' }],
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'og:url', content: 'https://istilo.github.io/vue-istilo/' }],
        ['meta', { name: 'og:title', content: 'UI components for Vue.js and CSS framework agnostic' }],
        ['meta', { name: 'og:site_name', content: 'Oruga' }],
        ['meta', { name: 'og:description', content: "Oruga UI is like a caterpillar, minimal and yet functional. It's in your hands turning it into a butterfly" }],
        ['meta', { name: 'og:image', content: 'https://istilo.github.io/vue-istilo/logo-logo.png' }],
        ['meta', { name: 'og:image:type', content: 'image/png' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:site', content: '@jaoaustero' }],
        ['meta', { name: 'twitter:title', content: 'A lightweight Vue CSS framework for website interface.' }],
        ['meta', { name: 'twitter:description', content: "Oruga UI is like a caterpillar, minimal and yet functional. It's in your hands turning it into a butterfly" }],
        ['meta', { name: 'twitter:image', content: 'https://istilo.github.io/vue-istilo/logo-banner.png' }]
    ],

    /**
     * Specify the host to use for the dev server.
     *
     * @type {String}
     * @default ['0.0.0.0']
     *
     * @see {@link https://vuepress.vuejs.org/config/#host}
     */
    host: 'docs.vue-istilo.loc',

    /**
     * Specify locales for i18n support. For more details, see the guide on Internationalization.
     *
     * @type {[path: string]: Object}
     * @default [undefined]
     *
     * @see {@link https://vuepress.vuejs.org/config/#locales}
     */
    locales: undefined,

    /**
     * Specify which pattern of files you want to be resolved.
     *
     * @type {Array}
     *
     * @see {@link https://vuepress.vuejs.org/config/#patterns}
     */
    patterns: ['**/*.md', '**/*.vue'],

    /**
     * Specify the port to use for the dev server.
     *
     * @type {Number}
     * @default [8080]
     *
     * @see {@link https://vuepress.vuejs.org/config/#port}
     */
    port: 81,

    /**
     * A function to control what files should have <link rel="prefetch"> resource hints generated
     *
     * @type {Function}
     * @default [()=>true]
     *
     * @see {@link https://vuepress.vuejs.org/config/#shouldprefetch}
     */
    shouldPrefetch: () => true,

    /**
     * Specify the temporary directory for client.
     *
     * @type {String}
     * @default ['/path/to/@vuepress/core/.temp']
     *
     * @see {@link https://vuepress.vuejs.org/config/#temp}
     */
    temp: '/path/to/@vuepress/core/.temp',

    /**
     * Title for the site.
     *
     * @type {String}
     * @default ['undefined']
     *
     * @see {@link https://vuepress.vuejs.org/config/#title}
     */
    title: 'Istilo UI',

    /**
     * Theme
     */
    themeConfig:
    {
        activeHeaderLinks: true,
        displayAllHeaders: true,
        logo: '/istilo-logo.svg',
        nav:
        [
            {
                text: 'Github',
                link: 'https://github.com/istilo/vue-istilo',
            },
            {
                text: 'Patreon',
                link: 'https://www.patreon.com/jaoaustero',
            },
        ],
        sidebar:
        [
            {
                title: 'Getting Started',
                collapsable: false,
                children:
                [
                    {
                        title: 'Installation',
                        path: '/getting-started/installation',
                    },
                    {
                        title: 'Release',
                        path: '/getting-started/release-notes',
                    },
                    {
                        title: 'Using with Preprocessors',
                        path: '/getting-started/using-with-preprocessors',
                    },
                    {
                        title: 'Browser Support',
                        path: '/getting-started/browser-support',
                    },
                ],
            },
            {
                title: 'Core Architecture',
                collapsable: false,
                children:
                [
                    {
                        title: 'Responsive Design',
                        path: '/core-architecture/responsive-design',
                    },
                    {
                        title: 'Psuedo-Class Modifiers',
                        path: '/core-architecture/psuedo-class-modifiers',
                    },
                    {
                        title: 'Adding Base Styles',
                        path: '/core-architecture/adding-base-styles',
                    },
                    {
                        title: 'Functions and Mixins',
                        path: '/core-architecture/functions-and-mixins',
                    },
                ],
            },
            {
                title: 'Style Guide',
                collapsable: false,
                children:
                [
                    {
                        title: 'Configuration',
                        path: '/style-guide/configuration',
                    },
                    {
                        title: 'Theme',
                        path: '/style-guide/theme',
                    },
                    {
                        title: 'Breakpoints',
                        path: '/style-guide/breakpoints',
                    },
                    {
                        title: 'Typography',
                        path: '/style-guide/typography',
                    },
                    {
                        title: 'Colors',
                        path: '/style-guide/colors',
                    },
                    {
                        title: 'YIQ Contrast',
                        path: '/style-guide/yiq-contrast',
                    },
                    {
                        title: 'Border',
                        path: '/style-guide/border',
                    },
                ],
            },
            {
                title: 'Components',
                collapsable: false,
                children:
                [
                    {
                        title: 'Button',
                        path: '/components/button',
                    },
                ],
            },
        ],
    },

    /**
     * Markdown
     */
    markdown:
    {
        /**
         * Whether to show line numbers to the left of each code blocks.
         *
         * @type {Boolean}
         * @default [undefined]
         *
         * @see {@link https://vuepress.vuejs.org/config/#markdown-linenumbers}
         */
        lineNumbers: false,
    },
};
