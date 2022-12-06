const App = () => {
  const [valueTextarea, setValueTextarea] = React.useState(placeholder);

  const handleChange = (event) => {
    setValueTextarea(event.target.value);
  }
  
  marked.setOptions({
  breaks: true,
});
  
 const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };
  
  return (
    <div className="row container-sm mx-auto shadow-lg bg-light">
      <div id="editorContainer" className="col form-floating m-sm-1">
        <h1 className="text-center">Editor</h1>
        <textarea id="editor" className="form-control" value={valueTextarea} onChange={handleChange}>
        </textarea>
      </div>
      <div className="col m-sm-1">
        <h1 className="text-center">Preview</h1>
        <div id="preview" dangerouslySetInnerHTML={{
        __html: marked(valueTextarea, { renderer: renderer })
      }}>
        </div>
      </div>
    </div>
  );
}

const placeholder = `# This is Markdown Previewer!
## You can change code in Editor field end see changes in Preview field
### You can use HTML or usual text

Heres some code, \`<code></code>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

If you dont know what is **HTML** wisit to 
[developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML) 

> Below you can see some list example
- discs.
  - circls.
     - squares.

And you also can change imeges just replace link below

![freeCodeCamp Logo](https://cdn-icons-png.flaticon.com/128/6415/6415824.png)
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
