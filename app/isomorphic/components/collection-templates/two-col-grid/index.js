// Implement more logic here

import React from "react";
import { Link, ResponsiveImage } from "@quintype/components";
import { array, object } from "prop-types";
// import { StoryGrid } from "../../story-grid";
import './two-col-grid.m.css'


function HorizontalStoryCard({story}) {
  return (
    <Link href={`/${story.slug}`} styleName="horizontal-card">
      <div styleName="card-image">
        <figure className="qt-image-16x9" >
          <ResponsiveImage
            slug={story["hero-image-s3-key"]}
            metadata={story["hero-image-metadata"]}
            aspectRatio={[16, 9]}
            defaultWidth={480}
            widths={[250, 480, 640]}
            sizes="( max-width: 500px ) 98vw, ( max-width: 768px ) 48vw, 23vw"
            // imgParams=
          />
        </figure>
      </div>
      <div styleName="card-content">
        <h2 styleName="section-name">{story.sections[0].name}</h2>
        <h3 styleName="card-title">{story.headline}</h3>
        <p styleName="author-name">{story["author-name"]}</p>
      </div>
    </Link>
  );
}


export function TwoColGrid({ collection, stories, associatedMetadata }) {
  console.log(collection,"collection name")
  return (
    <div>
      <h3 styleName="heading">{collection.name}</h3>
      <div styleName="wrapper">
        {stories.map((story, index) => (
          <HorizontalStoryCard story={story} key={`${index}-${story.id}`}/>
        ))}
      </div>
    </div>
  );
}

//https://bn.prothom-alo.com


TwoColGrid.propTypes = {
  collection: object,
  stories: array
};
