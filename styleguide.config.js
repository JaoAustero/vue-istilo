/**
 * @file A configuration for `vue-styleguidist` to enable some features and set
 * our preferences in generating of component documents.
 * 
 * @author Jerald Austero <jerald.austero0229@gmail.com>
 * @copyright Jerald Austero 2020
 */

const path = require('path');


module.exports = {
    /**
     * All paths are relative to config folder
     * 
     * @type {String|Function|Array}
     * @default [src/components/**\/*.vue]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#components}
     */
    components: 'src/components/**/i-[a-z]*.js',

    /**
     * Adds a little button on the top right hand corner of the editor to copy
     * the editor in to the clipboard
     * 
     * @type {Boolean}
     * @default [false]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#copycodebutton}
     */
    copyCodeButton: true,

    /**
     * Defines the initial state of the example code tab
     * 
     * @type {String}
     * @default [collapse]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#examplemode}
     */
    exampleMode: 'expand',

    /**
     * Ignore sub-components
     *
     * @type {String}
     *
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#ignore}
     */
    ignore: ['src/components/**/i-*-*.js'],

    /**
     * Do your components contain JSX syntax? Since some TypeScript syntax can
     * sometimes conflict with JSX, it ca be useful to disble it when needed.
     * The following TypeScript code would fail parsing if this flag is not
     * set to false.
     * 
     * @type {Boolean}
     * @default [true]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#jsxincomponents}
     */
    jsxInComponents: true,

    /**
     * If your example are written in JSX, you will need this flag on
     * 
     * @type {Boolean}
     * @default [false]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#jsxinexamples}
     */
    jsxInExamples: false,

    /**
     * Render one section or component per page, if true each section will be
     * a single page
     * 
     * @type {Boolean}
     * @default [false]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#pagepersection}
     */
    pagePerSection: true,

    /**
     * Modules that are required for your style guide. Useful for third-party
     * styles or polyfills.
     * 
     * @type {String}
     * @default [null]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#require}
     */
    require: [
        // To apply the Style of the Vui-Supply
        path.join(__dirname, 'src/scss/app.scss'),

        // To apply the directives
        path.join(__dirname, 'src/directives/index.js'),

        // To have interactive or playground of components
        path.join(__dirname, 'src/components/index.js'),
    ],

    /**
     * Shows 'Fork Me' ribbon in the top-right corner. If ribbon key is present,
     * then it's required to add url property; text property is optional.
     * If you want to change styling of the ribbon, please, refer to the
     * 
     * @type {Object}
     * @default [null]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#ribbon}
     */
    ribbon: {
        text: 'Alpha 0.0.1',
        url: 'https://github.com/JaoAustero/',
    },

    /**
     * Dev server name
     * 
     * @type {String}
     * @default [0.0.0.0]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#serverhost}
     */
    serverHost: 'vue-istilo.loc',

    /**
     * Dev server port
     * Note: We use :81 port as default for style guide, port :80 is currently
     * using by the vue project development.
     * @type {Number}
     * @default [6060]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#serverport}
     */
    serverPort: 81,

    /**
     * Toggle sidebar visibility. Sidebar will be hidden when opening
     * components or examples in isolation mode even if this value is set to
     * true. When set to false, sidebar will always be hidden.
     * 
     * @type {Boolean}
     * @default [true]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#showsidebar}
     */
    showSidebar: true,

    /**
     * Avoid loading CodeMirror and reduce bundle size significantly, use
     * prism.js for code highlighting. Warning: editor options will not be
     * mapped over.
     * 
     * @type {Boolean}
     * @default [false]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#simpleeditor}
     */
    simpleEditor: true,

    /**
     * Folder for static HTML style guide generated with `styleguidist build`
     * command
     * 
     * @type {String}
     * @default [styleguide]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#styleguidedir}
     */
    styleguideDir: 'docs',

    /**
     * Customize style guide UI fonts, colors, etc. using a theme object or
     * the path to a file exporting such object.
     * 
     * @type {Object|String}
     * @default [null]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#theme}
     */
    theme:
    {
        color:
        {
            ribbonBackground: '#EB4960',
            ribbonText: '#FFFFFF',
        }
    },

    /**
     * Style guide title
     * 
     * @type {String}
     * @default [app name from package.json]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#title}
     */
    title: 'Vue Istilo Css',

    /**
     * Defines if the table of contents sections will behave like an accordion
     * 
     * @type {String}
     * @default [expand]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#tocmode}
     */
    tocMode: 'expand',

    /**
     * Defines the initial state of the props and methods tab
     * 
     * @type {String}
     * @default [collapse]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#usagemode}
     */
    usageMode: 'expand',

    /**
     * Style guide version, displayed under the title in the sidebar
     * 
     * @type {String}
     * @default [null]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#version}
     */
    version: '0.0.1',

    /**
     * Custom webpack config options: loaders, extensions, plugins, etc.
     * required for your project
     * 
     * @type {Object|Function}
     * @default [null]
     * 
     * @see {@link https://vue-styleguidist.github.io/Configuration.html#webpackconfig}
     */
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.(jsx|js)$/,
                    exclude: /node_modules|packages/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['transform-vue-jsx']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
    },
}
