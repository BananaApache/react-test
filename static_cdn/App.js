axios.get('http://127.0.0.1:8000/api/todos')
        .then(res => {
            console.log(res.data)
            data = res.data
            this.setState({
                details: data
            })
        })
        .catch(err => { console.log(err) })
        
        function App() {
            return (
                <div>
                    <h1>Hello</h1>
                </div>
            )
        }

        const root = ReactDOM.createRoot(document.querySelector("#root"))
        root.render(
            <App />
        )