// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
//Import supported languages
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object schemas
import blockContent from './objects/blockContent';
import localeBlockContent from "./objects/localeBlockContent";
import localeString from "./objects/localeString";
import mainImage from "./objects/mainImage";
import poster from "./objects/poster";

// We import document schemas
import category from './category'
import post from './post'
import author from './author'
import siteSettings from "./siteSettings";




// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    //objects
    localeString,
    localeBlockContent,
    poster,
    mainImage,
    blockContent,
    //documents
    siteSettings,
    post,
    author,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
})
