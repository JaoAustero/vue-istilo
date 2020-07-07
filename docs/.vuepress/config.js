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
        lineNumbers: true,
    },
};