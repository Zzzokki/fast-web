import "../styles/globals.css";
import { useRouter } from "next/router";
import Sidebar from "../components/sidebar";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <div className="container">
      <div className="h100">
        <Sidebar />
      </div>
      <div className="h100">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
