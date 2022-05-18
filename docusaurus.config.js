// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const filecoin = require('./static/filecoin.json')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CashStack',
  tagline: 'A JavaScript Framework for Sovereign Money and Data',
  url: 'https://permissionless-software-foundation.github.io',
  baseUrl: '/cashstack.info/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'permissionless-software-foundation', // Usually your GitHub org/user name.
  projectName: 'cashstack.info', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Permissionless-Software-Foundation/cashstack.info/tree/main'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Permissionless-Software-Foundation/cashstack.info/tree/main'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CashStack',
        logo: {
          alt: 'CashStack',
          src: 'img/logo.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs'
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Permissionless-Software-Foundation/cashstack.info',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'CashStack',
                to: '/docs/intro'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/bch_js_toolkit'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/PSF_DAO'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Filecoin',
                to: `https://${filecoin.cid}.ipfs.dweb.link`
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Permissionless-Software-Foundation/cashstack.info'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} released under MIT License.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
