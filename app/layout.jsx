import '@styles/globals.css';
import { Children } from 'react';

export const metadata = {
    title: "hOTELLO",
    description: "Prenota una vacanza da sogno"
}

const Root = ({Children}) => {
  return (
    <html lang="it">
        <body>
            <div className = "main">
                <div className="gradient"></div>
            </div>

            <main className="app">
                {Children}
            </main>
        </body>
    </html>
  )
}

export default Root