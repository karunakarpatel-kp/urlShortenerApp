import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@Components/NavigationBar/Navigation";
import Footer from "@Components/Footer/Footer";
import { MdLightMode } from "react-icons/md";
import GlobalProvider from "./GlobalStore/globalProvider";
import Script from "next/script";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
  // const [darkMode, setDarkMode] = useState<boolean>(false);
  // const onDarkModeBtnClickHandler = () => {
  // setDarkMode(!darkMode);
  // };

  return (
    <html lang="en" className={false ? "dark transition-colors duration-100" : "transition-all duration-300"}>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <body className="relative p-0 m-0 bg-white dark:bg-slate-900 dark:prose-invert prose prose-stone min-h-[65vh] max-w-full border-0 border-sky-400  h-full overflow-x-hidden w-full block box-border">
        <GlobalProvider>
          <header className="dark:bg-slate-900">
            <Navigation />
          </header>
          <main className="border-0 border-red-900 grid grid-cols-12">
            <section className="hidden md:invisible md:block md:col-span-1 border-2 border-green-800">One</section>
            <section className="col-span-12 md:col-span-10 border-0 border-red-500 m-auto w-full mb-32">
              <article>{props.children}</article>
            </section>
            <section className="hidden md:col-span-1 md:block md:invisible border border-slate-500">Two</section>
          </main>
        </GlobalProvider>
        <section>
          <div
            className="darkMode fixed bottom-52 left-0 border bg-brandColor text-white border-slate-700 p-2 px-4 cursor-pointer rounded-e-2xl dark:bg-slate-900  dark:text-black shadow-inner z-50"
            // onClick={onDarkModeBtnClickHandler}
          >
            {!false ? <MdLightMode size={25} fill="white" /> : <MdLightMode size={25} fill="white" />}
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
