module.exports = {
    title: 'Seed 🌱',
    description: 'A vue-cli 3 template who plants the first seed of your project in order to become a sturdy and flowering tree',
    themeConfig: {
        repo: 'pierrechls/seed',
        docsDir: 'docs',
        docsBranch: 'docs',
        editLinks: true,
        sidebarDepth: 3,
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
        ],
        sidebar: {
            '/guide/': [
                '/guide/',
                '/guide/why',
                '/guide/structure',
                '/guide/installation',
                '/guide/how-to-use'
            ],
        }
    },
}