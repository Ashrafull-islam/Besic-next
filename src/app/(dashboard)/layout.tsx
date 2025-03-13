import React from 'react'
import "../global/globals.css";
export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <html lang='en'>
        <body>
            <h2>dashboard header</h2>
            {children}
            <h2>Dashboard footer</h2>
        </body>
      </html>
    </div>
  )
}
