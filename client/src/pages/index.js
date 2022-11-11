import { Router } from "@reach/router";
import React, { Fragment } from "react";
/** importing our pages */
import Track from "./track";
import Tracks from "./tracks";
import Module from "./module";

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
      <Track path="/track/:trackId" />
      <Module path="/track/:trackId/module/:moduleId" />
    </Router>
  );
}
