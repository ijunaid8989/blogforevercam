export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5db0626d83d7d70199fa30d5',
                  title: 'Sanity Studio',
                  name: 'blogforevercam-studio',
                  apiId: '60e1b1b8-448c-4e0d-a65e-8d18d1b6ed80'
                },
                {
                  buildHookId: '5db0626dcc877c01898b4e87',
                  title: 'Blog Website',
                  name: 'blogforevercam',
                  apiId: '54a7197e-63c7-4465-8f6c-1b977dca8231'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ijunaid8989/blogforevercam',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://blogforevercam.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
