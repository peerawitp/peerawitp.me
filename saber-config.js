module.exports = {
  siteConfig: {
    url: 'https://peerawitp.me/'
  },
  theme: 'portfolio',
  themeConfig: {
    style: 'dark',
    github: 'peerawitp',
    twitter: 'feelingzexe',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about'
      }
    ],
    skills: [
      {
        topic: 'nodejs',
        description: `NodeJS`
      },
      {
        topic: 'javascript',
        description: `JavaScript`
      },
      {
        topic: 'typescript',
        description: `TypeScript`
      },
      {
        topic: 'flutter',
        description: `Flutter`
      },
      {
        topic: 'firebase',
        description: `Firebase`
      },
      {
        topic: 'mysql',
        description: `MySQL`
      }
    ]
  },

  permalinks: {
    page: '/:slug'
  },

  plugins: [
    {
      resolve: 'saber-plugin-query-posts'
    },
    {
      resolve: 'saber-plugin-feed',
      options: {
        atomFeed: true
      }
    }
  ]
}
