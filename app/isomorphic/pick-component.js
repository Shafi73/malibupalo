import { PAGE_TYPE } from "./constants";
import { pickComponentHelper } from "@quintype/framework/server/pick-component-helper";

const { pickComponent, getChunkName } = pickComponentHelper(
  {
    [PAGE_TYPE.HOME_PAGE]: { chunk: "home", component: "HomePage" },
    [PAGE_TYPE.SECTION_PAGE]: { chunk: "list", component: "SectionPage" },
    [PAGE_TYPE.COLLECTION_PAGE]: { chunk: "list", component: "CollectionPage" },
    [PAGE_TYPE.TAG_PAGE]: { chunk: "list", component: "TagPage" },
    [PAGE_TYPE.SEARCH_PAGE]: { chunk: "list", component: "SearchPage" },
    [PAGE_TYPE.FORM_PAGE]: { chunk: "list", component: "FormPage" },
    [PAGE_TYPE.STORY_PAGE]: { chunk: "story", component: "StoryPage" },
    [PAGE_TYPE.CATALOG_PAGE]: { chunk: "list", component: "CatalogPage" },
    [PAGE_TYPE.STORY_PREVIEW]: { chunk: "story", component: "StoryPagePreview" },
    [PAGE_TYPE.STORY_PUBLIC_PREVIEW_PAGE]: { chunk: "story", component: "StoryPage" },
    [PAGE_TYPE.AUTHOR_PAGE]: { chunk: "list", component: "AuthorPage" },
    [PAGE_TYPE.HOME_PREVIEW]: { chunk: "home", component: "HomePagePreview" },
    [PAGE_TYPE.DIGITAL_PAGE]: { chunk: "list", component: "DigitalPage" },
    default: { chunk: "list", component: "NotFoundPage" }
  },
  {
    home: () => import(/* webpackChunkName: "home" */ "./component-bundles/home.js"),
    list: () => import(/* webpackChunkName: "list" */ "./component-bundles/list.js"),
    story: () => import(/* webpackChunkName: "story" */ "./component-bundles/story.js")
  }
);

export { pickComponent, getChunkName };
