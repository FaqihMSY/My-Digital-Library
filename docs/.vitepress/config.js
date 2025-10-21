
export default {
  title: 'Faqih-Digital-Note',
  description: 'Hanya Catatan Faqih',
  base: '/My-Digital-Library/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/FaqihMSY/My-Digital-Library' }
    ],
    sidebar: [
      {
        text: 'Panduan',
        collapsed: true,
        items: [
          { text: 'Cara Menambah Catatan', link: '/guides/how-to-add-notes' },
          { text: 'Syntax Guide', link: '/guides/markdown-examples' }
        ]
      },
      {
        text: 'Git & Version Control',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/git/introduction' },
          {
            text: 'Basic Commands',
            items: [
              { text: 'Overview', link: '/git/basic-commands' },
              { text: 'Staging & Committing', link: '/git/staging-and-committing' }
            ]
          }
        ]
      },
      {
        text: 'Web Concepts',
        collapsed: true,
        items: [
          { text: 'HTTP Requests', link: '/web-concepts/http-requests' },
          { text: 'APIs', link: '/web-concepts/apis' }
        ]
      },
      {
        text: 'System Database',
        collapsed: false,
        items:[
          {text :'Introduction to Database System', link: '/system-database/introduction'},
          {text :'Perfomance Tuning', link: '/system-database/perfomance-tuning'},
          {text :'Storage and File Structure', link: '/system-database/storage-and-file'},
          {text :'Indexing', link: '/system-database/indexing'},
          {text :'Schema and Index Tuning', link: '/system-database/schema-index-tuning'},
          {text :'Query Processing', link: '/system-database/query-processing'},
          {text :'Query Optimization', link: '/system-database/query-optimization'},
          {text :'Performance Tuning', link: '/system-database/performance-tuning'},
          {text :'Transaction', link: '/system-database/transaction'},
        ]
      }
    ]
  }
}
