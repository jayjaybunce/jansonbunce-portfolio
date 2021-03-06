module.exports = () => ({
    plugins: [
        'emotion',
        [
            'module-resolver',
            {
                alias: {
                    '@blink/components': '@blink/components/src',
                    '@blink/theme': '@blink/theme/src',
                },
            },
        ],
        '@babel/plugin-proposal-class-properties',

        // export * as ns from 'module/path'
        '@babel/plugin-proposal-export-namespace-from',

        // export default from 'module/path'
        '@babel/plugin-proposal-export-default-from',

        // required for production minification with Uglify or Terser
        '@babel/plugin-proposal-object-rest-spread',
    ],
    presets: [
        ['@babel/preset-env', { useBuiltIns: 'usage' }],
        '@babel/preset-react',
    ],
})
