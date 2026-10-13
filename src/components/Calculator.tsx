import { useState } from "react"

export function Calculator() {

    const [szam1, setSzam1] = useState("")
    const [szam2, setSzam2] = useState("")
    const [muvelet, setMuvelet] = useState("+")
    const [eredmeny, setEredmeny] = useState("");
    const [hiba, setHiba] = useState("");

    function Szamologep() {
        setHiba("");
        const a = Number(szam1);
        const b = Number(szam2);

        if (szam1 === "" || szam2 === "") {
            setHiba("adj meg számokat")
            return
        }

        if (muvelet == ("/") && b == 0) {
            setHiba("nem lehet nullával osztani")
            return
        }

        if (muvelet === "+") {
            setEredmeny(String(a + b));
        }
        if (muvelet === "-") {
            setEredmeny(String(a - b));
        }
        if (muvelet === "/") {
            setEredmeny(String(a / b));
        }
        if (muvelet === "*") {
            setEredmeny(String(a * b));
        }



    }

    return <>
        <div className="form-group">
            <label >Add meg az a számot</label>
            <input type="text"
                value={szam1}
                className="form-control"
                onChange={(e) => setSzam1(e.target.value)}
            />
        </div>

        <div className="form-group">
            <label >Add meg az a számot</label>
            <input type="text"
                value={szam2}
                className="form-control"
                onChange={(e) => setSzam2(e.target.value)}
            />
        </div>

        <select className="form-select" value={muvelet}
            aria-label="Default select example"
            onChange={(e) => setMuvelet(e.target.value)}

        >

            <option selected>Válassz műveletet</option>
            <option value="+">Összeadás</option>
            <option value="-">KIvonás</option>
            <option value="/">Osztás</option>
            <option value="*">Szorzés</option>
        </select>

        <button className='btn btn-success' onClick={Szamologep}>Számolás</button>


       {hiba && <p className="alert alert-danger">{hiba}</p>}

       {eredmeny && <p className="alert alert-success">{eredmeny}</p>}
        


    </>
}