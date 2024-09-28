// pages/index.tsx
import Head from "next/head";
import DynamicTable from "./components/DynamicTable";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dynamic Table</title>
        <meta name="description" content="Dynamic Table with Pagination, Filter, and Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center text-2xl font-bold my-4">Universities List</h1>
        <DynamicTable />
      </main>
    </div>
  );
}
