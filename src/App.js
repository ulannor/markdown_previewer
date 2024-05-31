import "./App.css";
import { useState } from "react";
import { marked } from "marked";

const sampleMarkdown = `
# This is a Header (H1 size)

## This is a Sub Header (H2 size)

[This is a link](https://www.example.com)

This is \`inline code\`.

\`\`\`
This is a code block.
print("Hello, World!")
\`\`\`

- This is a list item.

> This is a blockquote.

![This is an image](https://www.example.com/image.jpg)

**This is bolded text.**`;

function App() {
  const [text, setText] = useState(sampleMarkdown);
  return (
    <div className="container pt-3 pb-3">
      <textarea
        id="editor"
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
        className="form-control m-2"
        rows="8"
      ></textarea>
      <div
        id="preview"
        className="form-control m-2"
        dangerouslySetInnerHTML={{ __html: marked(text, { breaks: true }) }}
      ></div>
    </div>
  );
}

export default App;
