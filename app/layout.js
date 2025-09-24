export const metadata = {
  title: 'AI编程 - 未来已来',
  description: '智能AI编程助手，提升开发效率，拥抱编程未来',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}