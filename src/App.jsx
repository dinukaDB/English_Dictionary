import axios from "axios";
import { useState} from "react";
import "./App.css";
import ListDetails from "./Components/ListDetails";
import { MdSearch } from "react-icons/md";
function App() {
  const [keyWord, setKeyWord] = useState("");
  const [result, setResult] = useState(null);

  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";
  async function handleSearch() {
    try {
      const res = await axios.get(`${api}/${keyWord}`);
      //console.log(res, "res");
      setResult(res.data[0]);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <div>
        <h1>English Dictionary</h1>
        <input
          placeholder="Type word.."
          onChange={(e) => setKeyWord(e.target.value)}
        />
        <MdSearch className="search"/>
        <button className="button" onClick={handleSearch} type="submit">
          search
        </button>
        {result && <ListDetails {...{ result }} />}
      </div>
    </>
  );
}

export default App;
