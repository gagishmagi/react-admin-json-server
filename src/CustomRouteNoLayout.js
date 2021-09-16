import * as React from "react";
import { useGetList, useAuthenticated, Title } from "react-admin";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  title: {
    color: theme.palette.secondary.main, // Should be orange with our theme
  },
}));

const CustomRouteLayout = () => {
  useAuthenticated();
  const { ids, data, total, loaded } = useGetList(
    "posts",
    { page: 1, perPage: 10 },
    { field: "published_at", order: "DESC" }
  );

  const classes = useStyles()

  return loaded ? (
    <div>
      <Title title="Example Admin" />
      <h1 className={classes.title}>Posts</h1>
      <p>
        Found <span className="total">{total}</span> posts !
      </p>
      <ul>
        {ids.map((id) => (
          <li key={id}>{data[id].title}</li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default CustomRouteLayout;
