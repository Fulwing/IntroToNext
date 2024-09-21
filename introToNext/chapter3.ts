// /app/ui/fonts.ts
import { Inter } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

// /app/layout.tsx
<body className={`${inter.className} antialiased`}>{children}</body>


// lusitana
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });


// /app/page.tsx
<Image
src="/hero-desktop.png"
width={1000}
height={760}
className="hidden md:block"
alt="Screenshots of the dashboard project showing desktop version"
/>


<Image
        src="/hero-mobile.png"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />