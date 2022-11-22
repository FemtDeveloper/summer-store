import { useRouteError } from "react-router-dom";
import Layout from "../Layouts/Layout";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(typeof error);
  console.error({ error });

  return (
    <Layout pageDescription="This is the eeror page" title="Página de error">
      <div className="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p></p>
      </div>
    </Layout>
  );
}
