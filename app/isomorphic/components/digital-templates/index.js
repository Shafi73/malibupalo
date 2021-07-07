import { wrapCollectionLayout, EagerLoadImages } from "@quintype/components";
import { TwoColGrid } from "./two-col-grid"
import React from "react";


export default {
  TwoColGrid: wrapCollectionLayout(TwoColGrid),
  defaultTemplate: wrapCollectionLayout(TwoColGrid)
};
