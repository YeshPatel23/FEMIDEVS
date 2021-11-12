import Link from "next/link";
import Layout from "../components/Layout";

export default function NotFoundPage() {
  return (
    <div>
      <Layout>
        <div>
          <h1>404</h1>
          <h3>Sorry,there is nothing here.</h3>
          <Link href="/">Go to home page </Link>
        </div>
      </Layout>
    </div>
  );
}
