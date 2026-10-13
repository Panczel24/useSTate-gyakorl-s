import { useState } from "react";

export function SzovegKezeloFuggvenyek() {
    const [szoveg, setSzoveg] = useState("");
    const [eredmeny, setEredmeny] = useState("");

    function nagybetus() {
        setEredmeny(szoveg.toUpperCase());
    }

    function kisbetus() {
        setEredmeny(szoveg.toLowerCase());
    }

    function visszaallit() {
        setSzoveg("");
        setEredmeny("");
    }



   return (
    <div className="container mt-4">
        <h2>Szövegkezelő</h2>

        <input
            type="text"
            className="form-control"
            value={szoveg}
            onChange={(e) => {
                setSzoveg(e.target.value);
                setEredmeny(e.target.value);
            }}
        />

        <p className="mt-3">
            {szoveg.length === 0
                ? "Még nem írt be egyetlen karaktert sem."
                : "A beírt karakterek száma: " + szoveg.length + "."}
        </p>

        <button className="btn btn-danger" onClick={nagybetus}>
            Nagybetűs
        </button>

        <button className="btn btn-light" onClick={kisbetus}>
            Kisbetűs
        </button>

        <button className="btn btn-success" onClick={visszaallit}>
            Visszaállít
        </button>

        <h4 className="mt-3">Megjelenített szöveg:</h4>
        <p>{eredmeny}</p>
    </div>
);
}