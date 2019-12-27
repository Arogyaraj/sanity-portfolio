export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd992ebcdb568642084e5c4',
                  title: 'Sanity Studio',
                  name: 'sanity-portfolio-studio-ay6wtcvt',
                  apiId: '0787d9b3-b467-4034-b9ba-1fa9651bffac'
                },
                {
                  buildHookId: '5dd992eb92e2f87743284281',
                  title: 'Portfolio Website',
                  name: 'sanity-portfolio-web-gmm39m6h',
                  apiId: '59c4b6de-b92e-4816-be1e-0576c1307c0a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Arogyaraj/sanity-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://terrible-regret.tk',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
