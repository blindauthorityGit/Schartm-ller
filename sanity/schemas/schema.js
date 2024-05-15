// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import home from "./components/home";
import newsEintrag from "./components/newsEintrag";
import work from "./components/work";
import images from "./components/images";
import about from "./components/about";
import kontakt from "./components/kontakt";
import impressum from "./components/imprint";
import datenschutz from "./components/datenschutz";
import links from "./components/links";
import video from "./components/objects/video";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        home,
        newsEintrag,
        work,
        images,
        about,
        kontakt,
        links,
        video,
        impressum,
        datenschutz,
        /* Your types here! */
    ]),
});
