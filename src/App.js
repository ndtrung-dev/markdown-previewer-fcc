import "./App.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const defaultInput = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
const defaultOutput = "";

function App() {
  const [input, setInput] = useState(defaultInput);
  const [output, setOutput] = useState(defaultOutput);
  const [loadedScript, setLoadedScript] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("crossorigin", "anonymous");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/marked/13.0.1/marked.min.js";
    script.integrity =
      "sha512-aQeokRCySoYEf2Ii3HlYvRHZ7qCfL/9M4EhawTlxYr3OKhZHUA7WxyVBPVHypYEdO33CjD8UhwxzP2tQsI7yrw==";
    script.setAttribute("referrerpolicy", "no-referrer");
    script.addEventListener("load", () => {
      setLoadedScript(true);
    });
    document.head.appendChild(script);

    convert(input);
    return () => {
      document.head.removeChild(script);
    };
  }, [loadedScript]);

  function convert(input) {
    loadedScript &&
      window.marked.use({ breaks: true, gfm: true }) &&
      setOutput(window.marked.parse(input));
  }

  function handleOnChange(event) {
    setInput(() => event.target.value);
    convert(event.target.value);
  }

  return (
    <div className="App container">
      <div className="container wrapper" id="editor-wrapper">
        <div id="editor-header-container" className="container container_h">
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <h2 id="preview-header">Edtior</h2>
        </div>
        <textarea
          id="editor"
          onChange={handleOnChange}
          value={input}
        ></textarea>
      </div>
      <div id="preview-wrapper" className="container wrapper">
        <div id="preview-header-wrapper" className="container container_h">
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <h2 id="preview-header">Preview</h2>
        </div>
        <div
          id="preview"
          className="container"
          dangerouslySetInnerHTML={{ __html: output }}
        ></div>
      </div>
    </div>
  );
}

export default App;
