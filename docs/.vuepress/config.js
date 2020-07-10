module.exports = {
    /**
     * The base URL the site will be deployed at.
     *
     * @type {String}
     * @default ['/']
     *
     * @see {@link https://vuepress.vuejs.org/config/#base}
     */
    base: '/',

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
    dest: '.vuepress/dist',

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
    head: [],

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
    title: 'Vue Istilo CSS',

    /**
     * Theme
     */
    themeConfig:
    {
        activeHeaderLinks: true,
        displayAllHeaders: true,
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
            '/',
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
