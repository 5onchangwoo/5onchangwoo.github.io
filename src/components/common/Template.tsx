import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/common/GlobalStyle'
import Footer from 'components/common/Footer'
import { Helmet } from 'react-helmet'
import ThemeButton from './ThemeButton'
import ThemeProvider from './CustomThemeProvider'

type TemplateProps = {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@5onchangwoo" />
        <meta name="twitter:creator" content="@5onchangwoo" />

        <meta
          name="naver-site-verification"
          content="2fcd51b0a26aabd80ff725901900a2be6a94cb6f"
        />
        <meta
          name="google-site-verification"
          content="IAIWAUkfyflQh1SHEkbb1zSRlQ-gakO2rvLCOTLpUso"
        />
        <html lang="ko" />
      </Helmet>
      <GlobalStyle />
      <ThemeProvider>
        {children}
        <Footer />
        <ThemeButton />
      </ThemeProvider>
    </Container>
  )
}

export default Template
