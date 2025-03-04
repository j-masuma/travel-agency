
import {Poppins} from 'next/font/google';
import "./globals.css";
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';


const font = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ["latin"],
})

export const metadata = {
  title: "Travel For You",
  description: "Travel landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
