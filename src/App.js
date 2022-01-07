import "./App.css";
import Functional from "./Functional";
import { ClassBased, ClassBasedFunctional } from "./ClassBased";

export default function App() {

  return (
      <div className="App">
        <h2>
          Functional
        </h2>
        <Functional/>
        <h2>
          Class Based (Functional Wrapper)
        </h2>
        <ClassBasedFunctional/>
        <h2>
          Class Based
        </h2>
        <ClassBased/>
      </div>
  );
}
