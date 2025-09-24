import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        <meta name="description" content="智能AI编程助手，提升开发效率，拥抱编程未来" />
        <meta name="keywords" content="AI编程,人工智能,代码生成,编程助手" />
        <meta name="author" content="AI编程团队" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* 微信分享优化 */}
        <meta property="og:title" content="AI编程 - 未来已来" />
        <meta property="og:description" content="智能AI编程助手，提升开发效率，拥抱编程未来" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />

        {/* 安全相关 */}
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />

        <title>AI编程 - 未来已来</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}