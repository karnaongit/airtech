import "./styles/globals.css";
import Header from '@/Components/Header'
import Cursor from '@/Components/Cursor'
import Footer from '@/Components/Footer'
import PageWrapper from "@/Components/Wrapper";
import Loader from "@/Components/Loader";
import WhatsAppButton from "@/Components/Whatsapp";
import ScrollToTopButton from "@/Components/scroll";
export const metadata = {
  title: "Airtech Engineers",
  description: "Sailon",
  image:"/logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">     
        <Cursor/>
        <Header/>
        <Loader/>
        <PageWrapper><main className="flex-grow">{children}</main>
          <WhatsAppButton/>
          <ScrollToTopButton />
        </PageWrapper>
        <Footer/>
      </body>
    </html>
  );
}
