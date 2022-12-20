/* eslint-disable */

import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'
import bookIcon from '../../../static/img/book-icon.png'
import lightningIcon from '../../../static/img/lightning-icon.png'
import communityIcon from '../../../static/img/community-icon.png'

const FeatureList = [
  {
    title: 'Documentation',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    img: bookIcon,
    description: (
      <>
        <p>
          Learn how to install and configure your own instance of the P2WDB.
        </p>
        <div>
          <Link
            className='button button--secondary button--lg'
            to='/docs/intro'
          >
            Read Docs
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'Get Started',
    // Svg: bookIcon,
    img: lightningIcon,
    description: (
      <>
        <p>
          JavaScript code examples are available to get you started quickly,
          reading and writing to the P2WDB.
        </p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/get-started'
          >
            Get Started!
          </Link>
        </div>
      </>
    )
  },
  {
    title: 'Community',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    img: communityIcon,
    description: (
      <>
        <p>
          Join our Telegram and Gitter channels to get community-driven technical support.
        </p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='https://t.me/bch_js_toolkit' target='_blank'
          >
            Telegram
          </Link>
        </div>
        <br />
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='https://gitter.im/Permissionless-Software-Foundation/bch-js' target='_blank'
          >
            Gitter
          </Link>
        </div>
      </>
    )
  }
]

function Feature ({ img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <img src={img} />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default function HomepageFeatures () {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
