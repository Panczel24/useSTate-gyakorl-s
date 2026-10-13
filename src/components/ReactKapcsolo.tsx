import { useState } from "react";
import { KepBetolto } from "./KepBetolto";

export function ReactKapcsolo() {
    const [beKapcsolva, setBeKapcsolva] = useState(false);

    const kikapcsoltKep = "https://www.w3schools.com/js/pic_bulboff.gif";
    const bekapcsoltKep = "https://www.w3schools.com/js/pic_bulbon.gif";

    function kapcsolas() {
        setBeKapcsolva(!beKapcsolva);
    }

    return (
        <div>
            <KepBetolto
                kepUrl={beKapcsolva ? bekapcsoltKep : kikapcsoltKep}
            />

            <p>
                Állapot: {beKapcsolva ? "Be" : "Ki"}
            </p>

            <button onClick={kapcsolas}>
                Kapcsoló
            </button>
        </div>
    );
}