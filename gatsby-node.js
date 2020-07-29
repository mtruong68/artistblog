const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {

    const article = path.resolve('./src/templates/single-article.js')
    resolve(
      graphql(
        `
          {
            allContentfulArticle {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulArticle.edges
        posts.forEach(post => {
          createPage({
            path: `/art/${post.node.slug}/`,
            component: article,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}
