const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { isFuture } = require('date-fns');
const { format } = require('date-fns');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: require.resolve('path-browserify')
      },
      modules: [path.resolve(__dirname, `src`), `node_modules`]
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges
    .filter((edge) => !isFuture(new Date(edge.node.publishedAt))) // Utilize date-fns helper function to filter the posts by their published date (specifically those NOT in the future, or already)
    .forEach((edge, index) => {
      const previous = index === postEdges.length - 1 ? null : postEdges[index + 1].node;
      const next = index === 0 ? null : postEdges[index - 1].node;
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(new Date(publishedAt), 'yyyy/MM');
      const path = `/blog/${dateSegment}/${slug.current}/`;
      const fullSlug = path;

      createPage({
        path,
        component: require.resolve('./src/templates/BlogPost/index.tsx'),
        context: {
          fullSlug,
          id,
          previous,
          next
        }
      });
    });
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions);
};

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const blogPostTemplate = path.resolve(`src/templates/BlogPost/index.tsx`);

//   const res = await graphql(`
//     query {
//       allMarkdownRemark(
//         filter: { frontmatter: { category: { eq: "blog" } } }
//         sort: { fields: frontmatter___date, order: DESC }
//       ) {
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//             }
//           }
//         }
//       }
//     }
//   `);

//   const posts = res.data.allMarkdownRemark.edges;

//   posts.forEach((post, index) => {
//     const previous = index === posts.length - 1 ? null : posts[index + 1].node;
//     const next = index === 0 ? null : posts[index - 1].node;

//     createPage({
//       path: `${post.node.fields.slug}`,
//       component: blogPostTemplate,
//       context: {
//         slug: `${post.node.fields.slug}`,
//         previous,
//         next
//       }
//     });
//   });
// };
