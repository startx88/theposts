import React from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "./Posts";
import PostEdit from "./PostEdit";
import PostDetail from "./PostDetail";

const Container = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route path={`${match.path}/edit/:postId`} component={PostEdit} />
      <Route path={`${match.path}/add`} component={PostEdit} />
      <Route path={`${match.path}/:postId`} component={PostDetail} />
      <Route path={match.path} exact component={Posts} />
    </Switch>
  );
};

export default Container;
