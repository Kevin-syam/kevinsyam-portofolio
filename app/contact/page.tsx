import { Metadata } from 'next'

import React from 'react'

import Container from '@/common/components/elements/Container'
import PageHeading from '@/common/components/elements/PageHeading'
import { METADATA } from '@/common/constant/metadata'

import Contact from '@/modules/contact'

export const metadata: Metadata = {
  title: `Contact ${METADATA.exTitle}`,
  description: 'Contact kevinsyam.my.id, contact Kevin Syam Harira',
  keywords: 'frontend developer, PHP developer, react js, javascript, typescript, contact',
  alternates: {
    canonical: `${process.env.DOMAIN}/contact`
  }
}

const PAGE_TITLE = 'Contact'
const PAGE_DESCRIPTION = 'Let`s get in touch'

export default function ContactPage() {
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Contact />
      </Container>
    </>
  )
}
