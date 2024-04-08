import { Component } from "react";
import { CardList } from "./components/CardList/CardList.component";
import "./App.css";
import { SearchBox } from "./components/SearchBox/SearchBox.component";

class App extends Component {
  constructor() {
    //initial props and inheritance of parents
    super();

    //initial props
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  //mout DOM
  async componentDidMount() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const monsters = response && (await response.json());

      if (monsters) {
        this.setState({ monsters });
      }
    } catch (error) {
      console.log("server error!!", error);
    }
  }

  //arrow func tự động bind "this" theo ngữ cảnh("this" của parents scope)
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  //render html to DOM
  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <>
        <h1 className="title">Monsters Rolorex</h1>
        <SearchBox placeholder={"Search Monster"} handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filterMonsters}></CardList>
      </>
    );
  }
}

export default App;
