import { useState } from "react";

export function ColorChanger() {
    const [szin, setSzin] = useState("white");

    function ujSzin() {
        const piros = Math.floor(Math.random() * 256);
        const zold = Math.floor(Math.random() * 256);
        const kek = Math.floor(Math.random() * 256);

        setSzin(`rgb(${piros}, ${zold}, ${kek})`);
    }

    return (
        <div style={{ background: szin}}>
            <h2>szín</h2>
            <button onClick={ujSzin}>
                Új szín generálása
            </button>
        </div>
    );
}