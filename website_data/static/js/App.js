

axios.get('http://127.0.0.1:8000/api/todos')
.then(res => {
    console.log(res.data)
})

// function App() {
//     return (
//         <div>
//             <h1>Hello</h1>
//         </div>
//     )
// }

class App extends React.Component {
    state = { details: [], }

    componentDidMount() {
        let data
        
        axios.get('http://127.0.0.1:8000/api/todos')
        .then(res => {
            data = res.data
            this.setState({ details: data })
        })
        .catch(err => { console.log(err) })
    }

    render() {
        return (
            <div>
                <header>Data Generated From Django</header>
                <hr></hr>
                {this.state.details.map((output, id) => (
                <div key={id}>
                    <h2>{output.title}</h2>
                    <h3>{output.description}</h3>
                    <h4>{output.completed}</h4>
                </div>
                ))}
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
    <App />
)
