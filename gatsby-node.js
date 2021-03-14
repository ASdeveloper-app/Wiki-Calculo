const path = require('path');

exports.createPages = async ({graphql, actions}) => {

    const result = await graphql (`
        {
            allTopicsJson {
                edges {
                    node {
                    slug
                    }
                }
            }
        }
    `) 

    result.data.allTopicsJson.edges.forEach(element => {
        const { node } = element
        actions.createPage({
            path: node.slug,
            component: path.resolve('./src/templates/publication.js'),
            context: {
                slug: node.slug
            }
        })

    });
    
}