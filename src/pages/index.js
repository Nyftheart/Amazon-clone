import Head from "next/head";
import Header from "../components/Header";
import Scroller from "../components/Scroller";
import ProductFeed from "../components/ProductFeed";
import Footer from "../components/Footer";

export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>

      {/* ---- Header ---- */}
      <Header></Header>
      {/* ---- Main ---- */}
        <main className="max-w-screen-2xl mx-auto">
            <Scroller></Scroller>
            <ProductFeed products={products}></ProductFeed>
        </main>
        <Footer></Footer>
    </div>
  );
}

export async function getServerSideProps(context){
    const products = await fetch("https://fakestoreapi.com/products").then((res) => res.json());
    return{props:{products}}
}
