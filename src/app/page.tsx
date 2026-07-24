export default function RootPage() {
  return (
    <html>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.href = window.location.pathname.includes('/SiliconCove-Portfolio') ? '/SiliconCove-Portfolio/en/' : '/en/';`,
          }}
        />
      </head>
      <body />
    </html>
  );
}
