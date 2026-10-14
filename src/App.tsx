import { Fejlec } from "./components/Fejlec";
import { ReactKapcsolo } from "./components/ReactKapcsolo";
import { Lablec } from "./components/Lablec";
import { ColorFejlec } from "./components/ColorFejlec";
import { ColorLablec } from "./components/ColorLablec";
import { ColorChanger } from "./components/ColorChanger";
// import { SzovegFuggvenyekLablec } from "./components/SzovegFuggvenyekLablec";
import { SzovegFuggvenyekFejlec } from "./components/SzovegFuggvenyekFejlec";
import { SzovegKezeloFuggvenyek } from "./components/SzovegKezeloFuggvenyek";
import { SzamologepFejlec } from "./components/SzamologepFejlec";
import { Calculator } from "./components/Calculator";
import ComplexCalculator from "./components/ComplexCalculator";

function App() {
  return <>

    <div>
      <Fejlec />
      <ReactKapcsolo />
      <Lablec />
    </div>

    <br />
    <br />

    <div>
      <ColorFejlec />
      <ColorChanger/>
      <ColorLablec/>
    </div>

    <br />
    <br />

    <div>
      <SzovegFuggvenyekFejlec />
      <SzovegKezeloFuggvenyek/>
      {/* <SzovegFuggvenyekLablec/> */}
    </div>

    <br />
    <br />

    <div>
      <SzamologepFejlec/>
      <Calculator/>
    </div>

    <br />
    <br />

    <div>
      <ComplexCalculator/>
    </div>


  </>

    ;
}

export default App;