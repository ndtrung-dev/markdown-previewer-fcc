# markdown-previewer-fcc

This is a project to fulfiled _Front End Development Libraries_ Course provided by freeCodeCamp.

Goals: Create a random quote generator similar to this: https://markdown-previewer.freecodecamp.rocks/.

In this project, the tech stack was used ReactJS and SCSS. <br>
Check out the live demo [here](https://ndtrung-dev.github.io/markdown-previewer-fcc)

## Requirements:

### Tech stacks:

> Using any mix of HTML, Javascript, CSS, Bootstrap, SASS, React, Redux, and jQuery.<br>
> Andditional tech unlisted are not recommended.

### User story:

> 1. I can see a textarea element with a corresponding _id="editor"_.
>
> 1. I can see an element with a corresponding _id="preview"_.
>
> 1. When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.
>
> 1. When I enter GitHub flavored markdown into the _#editor_ element, the text is rendered as HTML in the _#preview_ element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).
>
> 1. When my markdown previewer first loads, the default text in the _#editor_ field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
>
> 1. When my markdown previewer first loads, the default markdown in the _#editor_ field should be rendered as HTML in the _#preview_ element.
>
> 1. My markdown previewer interprets carriage returns and renders them as _br_ (line break) elements.

### Testing tools

<em>FCC Testing CDN</em> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js) is provided by freeCodeCamp

## Result

All checkpoint passed!

<b>Note:</b><br> - <code>defaultInput</code> is retrieved from provided example. <br> - <code>marked</code> library is added via CDN query and implemented through <code>window.marked.parse()</code>.

Source code uploaded to [github](https://github.com/ndtrung-dev/markdown-previewer-fcc).

[Live demo](https://ndtrung-dev.github.io/markdown-previewer-fcc) is uploaded to github using <code>gh-pages</code>. <em>FCC Testing CDN</em> was embedded. Select <code>markdown-previewer</code> option from dropdown menu to verify the result.
