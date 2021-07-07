import { Collection } from "@quintype/framework/server/api-client";
import { getStoryLimits, getNestedCollectionLimit } from "../../isomorphic/components/get-collection-template";

export async function DigitalPageData(client, config, slug = "digital") {
  const collection = await Collection.getCollectionBySlug(
    client,
    slug,
    { "item-type": "collection" },
    {
      depth: 2,
      storyLimits: getStoryLimits(),
      nestedCollectionLimit: getNestedCollectionLimit(),
      defaultNestedLimit: 5
    }
  );

  return {
    collection: collection.asJson(),
    cacheKeys: collection.cacheKeys(config["publisher-id"])
  };
}
