function Task(props) {
    return <li>{props.name}, {props.dueDate.toLocaleTimeString()}</li>
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {list: props.list};

        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleAddTask(task) {
        console.log("add task clicked");
        this.state.list.push(task);
        this.setState({list: this.state.list})
        console.log(this.props.list)
    }
    handleDelete(e){
        var name=e.target.textContent.split(",")[0]
        // console.log("Delete Clicked")
        var filtered = []
        for(let i = 0; i<this.state.list.length;i++ ) {
            if (this.state.list[i].name !== name){
                filtered.push(this.state.list[i])
            }
            // console.log(filtered)
        }
        // this.state.list = filtered
        this.setState({list: filtered})
        console.log(this.props.list)
    }


    render() {
        return (
            <div>
                <h1>TODO List</h1>
                <ol onClick = {this.handleDelete}>
                    {
                        this.state.list.map((t) =>
                            <Task key={t.id} name={t.name} dueDate={t.dueDate} />
                            )
                        }    
                </ol>
               
                <TaskNameForm onAddTask={this.handleAddTask} />
                
            </div>
        );
    }
}

class TaskNameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const taskList = this.props.taskList;
        // create a task object
        event.preventDefault();
        const task = {id:Date.now(), name: this.state.value, 
        dueDate: new Date()};
        // add the task object to the task list
        this.props.onAddTask(task);
    }

    handleChange(event) {
        // code to set the state of the component
        this.setState({value: event.target.value});
    }

    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} 
                onChange={this.handleChange}/>
                <input type="submit" value="Add Task" />
            </form>
        );
    }
}

ReactDOM.render(
    <TodoList list={[]} />,
    document.getElementById('todo')
);
