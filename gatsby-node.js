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
                  id
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
        var allArticles = posts.map(p => p.node.id);
        posts.forEach(post => {
          //remove self from list of random articles
          var randArticles = allArticles.filter(p => {
            return p != post.node.id
          });
          //shuffle
          var shuffled = randArticles.slice(0), i = randArticles.length, temp, index;
          while (i--) {
              index = Math.floor((i + 1) * Math.random());
              temp = shuffled[index];
              shuffled[index] = shuffled[i];
              shuffled[i] = temp;
          }
          //get 3 articles
          randArticles = shuffled.slice(0, 4);

          createPage({
            path: `/art/${post.node.slug}/`,
            component: article,
            context: {
              slug: post.node.slug,
              list: randArticles,
            },
          })
        })
      })
    )
  })
}
