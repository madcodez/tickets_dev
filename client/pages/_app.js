import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";
import Header from "../components/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          pauseOnVisibilityChange
          closeOnClick
          pauseOnHover
        />
      </div>
    </div>
  );
};
AppComponent.getInitialProps = async (context) => {
  const client = buildClient(context.ctx);
  const { data } = await client.get("/api/users/currentuser");
  let pageProps = "";
  if (context.Component.getInitialProps)
    pageProps = await context.Component.getInitialProps(
      context.ctx,
      client,
      data.currentUser
    );

  return { ...data, pageProps };
};

export default AppComponent;
