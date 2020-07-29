## Why did I make this

* Heavily inspired by this page: https://wepresent.wetransfer.com/story/emma-larsson/
* Have been wanting to make a content-oriented website for a while (and to learn a little about CMS, static-site generation, React)
* thought it'd be cool to get people who are not professional artists (yet) to talk about their philosophy in art & to make these thoughts look professional somewhere on the internet


## Idiosyncrasies to format of files in CMS & repo

### CMS

* every article has colors specific to each article & passed into the components. the order of the colors is so:
[0] Page Background Color, [1] Background Color for Header Video/Image, [2] Background Color for Header Quote, [3] Text Color of Header Quote, [4] Color of Quotes in Article Body, [5] Color of Text in Article Body

* unfortunately, I didn't want to figure out how to render the rich text images from Contentful (though there seems to be a lot of hacks) into Gatsby Images, so instead, the images are stored in an array and when parsing the rich text blog post (Article), every Heading-3 node indicates where a picture should be. The pictures should be saved IN order

* for example, json for article content may look like
```
{[{nodeType: "paragraph", // regular text
  value:"blah blah"},
  {nodeType: "heading-2", // text to be formatted as a quote
  value:"some quote"},
  {nodeType: "heading-3", // to be rendered as 1 image
  value:"1"},
  {nodeType: "heading-3", // to be rendered as a group of 2 images
  value:"2"}]}
```

and images are an array of 3 images

### Repo
* every slug for an article is unique. when using map, must use unique keys for React, so the keys often look like `{${slug}${i}}`, and if there is more nesting, each layer is separated by - e.g. `{${slug}${i}-${j}-${k}}`

## Crucial Commands

### `npm run dev`

Run the project locally with live reload in development mode.

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run serve`

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.

### `gatsby clean`

If localhost:8000 is not loading, then clean the cache using this command.

## Deployment

See the [official Contentful getting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/).
