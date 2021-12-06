import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card/card";
import TypeSelector from "./components/DataTypeSelector/typeSelector";
import InputFeild from "./components/InputFeild/inputFeild";
import { Stack } from "./Algorithum/Stack";
// api
import api from "./ApiClient/apiClient";
import StackCard from "./components/StackCard/stackCard";
import SimpleCard from "./components/SimpleCard/simplecard";
const TYPE_SELECTOR = {
  json: "JSON",
  array: "ARRAY",
  stack: "STACK",
  hashMap: "HASHMAP",
};
var stack = new Stack();
let utilisateurs = new Map();

function App() {
  const [typeSelector, setTypeSelector] = useState(TYPE_SELECTOR.json);
  const [apiData, setApiData] = useState([]);
  const [apijson, setApiJson] = useState([]);
  const [apistack, setApistack] = useState([]);
  const [apiarray, setApiarray] = useState([]);
  const [apihash, setApihash] = useState({ title: "", url: "", location: "" });
  const [input, setInput] = useState("moon");

  // get the api call. call an api and pass the string enter in the input feild
  // Stack
  const convertDataToStack = () => {
    apijson.map((el) =>
      stack.push({
        title: el.data[0].title,
        location: el.data[0].center,
        url: el.links[0].href,
      })
    );
    return stack.printStack();
  };
  // Hash
  const createHashMap = () => {
    apijson.map((el) =>
      utilisateurs.set(el.data[0].title, {
        title: el.data[0].title,
        location: el.data[0].center,
        url: el.links[0].href,
      })
    );
    setApihash(utilisateurs.get(apijson[0].data[0].title));
  };
  const createArray = () => {
    const arr = [];
    apijson.map((el) =>
      arr.push({
        title: el.data[0].title,
        description: el.data[0].description,
      })
    );
    setApiarray(arr);
    return true;
  };
  const getApiData = async () => {
    const data = await api.getData(input);
    setApiData(data.data.collection.items.splice(0, 7));
    console.log(apiData);
  };
  // call the api
  useEffect(() => {
    getApiData();
  }, [input]);

  // run when data is fetched or data type changes
  useEffect(() => {
    if (typeSelector === TYPE_SELECTOR.json) {
      setApiJson(apiData);
    } else if (typeSelector === TYPE_SELECTOR.stack) {
      const d = convertDataToStack();
      setApistack(d);
    } else if (typeSelector === TYPE_SELECTOR.hashMap) {
      createHashMap();
    } else if (typeSelector === TYPE_SELECTOR.array) {
      createArray();
    } else {
      setApiJson([]);
    }
  }, [apiData, typeSelector]);

  return (
    <div>
      <h3 className="title">NASA API</h3>
      <div className="App">
        <div className="appContainor">
          <InputFeild setInput={setInput} />
          <div className="cardHolder">
            <TypeSelector
              typeSelector={typeSelector}
              setTypeSelector={setTypeSelector}
              typeOptions={TYPE_SELECTOR}
            />
            {/* json Data add list*/}
            {typeSelector === TYPE_SELECTOR.json
              ? apijson && apijson.map((el, key) => <Card key={key} el={el} />)
              : ""}
            {/*  Stack*/}

            {typeSelector === TYPE_SELECTOR.stack
              ? apistack &&
                apistack.map((el, key) => <StackCard key={key} el={el} />)
              : ""}
            {/*  hashmap*/}

            {typeSelector === TYPE_SELECTOR.hashMap
              ? [1].map((el, key) => <StackCard key={key} el={apihash} />)
              : ""}
            {/* array */}
            {typeSelector === TYPE_SELECTOR.array
              ? apiarray &&
                apiarray.map((el, key) => <SimpleCard key={key} el={el} />)
              : ""}
          </div>
          {/* cards */}
        </div>
      </div>
    </div>
  );
}

export default App;
