
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
        collapsed: false,
        items: [
          { text: 'Cara Menambah Catatan', link: '/guides/how-to-add-notes' },
        ]
      },
      {
        text: 'Git & Version Control',
        collapsed: false,
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
        collapsed: false,
        items: [
          { text: 'HTTP Requests', link: '/web-concepts/http-requests' },
          { text: 'APIs', link: '/web-concepts/apis' }
        ]
      },
      {
        text: 'Markdown',
        collapsed: false,
        items: [
          { text: 'Syntax Guide', link: '/markdown-examples' }
        ]
      }
    ]
  }
}
