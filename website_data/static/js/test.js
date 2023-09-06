


const renderer = new marked.Renderer()

function App() {
    const [text, setText] = React.useState("")

    fetch("../static/md/test.md")
    .then(res => res.text())
    .then(text => setText(text))
    
    return (
        <div dangerouslySetInnerHTML={{ __html: marked(text, {renderer: renderer} )}}></div>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
    <App />
)

