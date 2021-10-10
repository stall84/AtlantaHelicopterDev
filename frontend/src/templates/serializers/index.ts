import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";

interface Props {
    node: {
        asset: {
            _id: string;
            
        }
    }
}
// Figure out deserializing 'mainImage' from within a _rawBody post field

// const Figure: React.FC<Props> = ({ node }) => {
//   if (!node || !node.asset || !node.asset._id) {
//     return null;
//   }
//   const gatsbyImageData = getGatsbyImageData(
//     node,
//     { maxWidth: 675 },
//     clientConfig.sanity
//   );
//   return (
//     <figure>
//       <GatsbyImage image={gatsbyImageData} alt={node.alt} />
//       <figcaption>{node.caption}</figcaption>
//     </figure>
//   );
// };

// const serializers = {
//     types: {
//       /* eslint-disable-next-line react/display-name */
//       authorReference: ({ node }) => <span>{node.author.name}</span>,
//       mainImage: Figure,
//     },
//   };
  
//   export default serializers;
