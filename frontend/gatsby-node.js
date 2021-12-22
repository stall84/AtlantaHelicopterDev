const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { isFuture } = require('date-fns');
const { format } = require('date-fns');
const fetch = require(`node-fetch`);

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

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
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
        sort: { fields: publishedAt, order: DESC }
      ) {
        edges {
          node {
            id
            title
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
      const path = `/blog/${slug.current}/`;
      // const fullSlug = path;

      createPage({
        path,
        component: require.resolve('./src/templates/BlogPost/index.tsx'),
        context: {
          fullSlug: `${edge.node.slug.current}`,
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

exports.sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {
  try {
    const result = await fetch(`https://xola.com/api/experiences?seller=5d2d2aabde7c4b0eb96866bd`, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-VERSION': '2017-06-10',
        'X-API-KEY': `${process.env.GATSBY_XOLA_SELLER_API_KEY}`
      }
    });
    const resultData = await result.json();
    console.log('RESULT DATA:  ', resultData);
    resultData.data.forEach((item) => {
      item.visible
        ? createNode({
            parent: null,
            children: [],
            internal: {
              type: item.object,
              contentDigest: createContentDigest(resultData)
            },
            id: item.id,
            name: item.name,
            description: item.desc,
            duration: item.duration,
            price: item.price,
            priceType: item.priceType,
            photoLink: item.photo.id
          })
        : console.log('Item skipped.. ');
    });
  } catch (error) {
    console.warn('Error retrieving Xola at build time:  ', error);
  }
};
