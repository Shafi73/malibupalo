import React from "react";
import { LazyCollection, LazyLoadImages, replaceAllStoriesInCollection, WithPreview } from "@quintype/components";
import { getCollectionTemplate } from "../get-digital-template";



export const DigitalPage = props => {
  return (
    <div className="container">

        <LazyCollection collection={props.data.collection} collectionTemplates={getCollectionTemplate} lazyAfter={2} />

    </div>
  );
};


// export const DigitalPagePreview = WithPreview(DigitalPage, (data, story) =>
//   Object.assign({}, data, {
//     collection: replaceAllStoriesInCollection(data.collection, story)
//   })
// );
