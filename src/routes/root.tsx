import Slider from "../components/ui/Slider.tsx/Slider";
import Layout from "../Layouts/Layout";

const Root = () => {
  return (
    <Layout
      pageDescription="This is the description"
      title="Este es el título de la página"
    >
      <Slider />
    </Layout>
  );
};

export default Root;
