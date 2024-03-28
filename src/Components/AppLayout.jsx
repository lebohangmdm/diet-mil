import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import Loading from "./Loading";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <main>{isLoading ? <Loading /> : <Outlet />}</main>
    </>
  );
};

export default AppLayout;
