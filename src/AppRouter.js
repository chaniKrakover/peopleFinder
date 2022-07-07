import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import Favorite from "pages/Favorite";
import { usePeopleFetch } from "hooks";
import store from "components/redux/store";
import { Provider } from "react-redux";

const AppRouter = () => {
  const { users, isLoading,setPage,page } = usePeopleFetch();

  return (
    <ThemeProvider>
      <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={(props)=><Home {...props} users={users} setPage={setPage} page={page} isLoading={isLoading}/>} />
          <Route exact path="/favorite" component={(props)=><Favorite {...props} users={users} isLoading={isLoading}/>}  />
        </Switch>
      </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default AppRouter;
