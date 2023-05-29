import { useState, useEffect } from "react";
import "./App.css";
import DrumPad from "./DrumPad";

function App() {
    const [currentSound, setCurrentSound] = useState("Click play a sound!");
    return (
        <>
            <div>
                <div id="drum-machine">
                    <div className="drum-pads">
                        <DrumPad
                            id="clap"
                            label="Q"
                            setCurrentSound={setCurrentSound}
                        />
                        <DrumPad
                            id="open-hihat"
                            label="W"
                            setCurrentSound={setCurrentSound}
                        />
                        <DrumPad
                            id="closed-hihat"
                            label="E"
                            setCurrentSound={setCurrentSound}
                        />
                        <DrumPad
                            id="snare1"
                            label="A"
                            setCurrentSound={setCurrentSound}
                        />
                        <DrumPad
                            id="snare2"
                            label="S"
                            setCurrentSound={setCurrentSound}
                        />
                        <DrumPad
                            id="ride"
                            label="D"
                            setCurrentSound={setCurrentSound}
                        />
                        <DrumPad
                            id="kick1"
                            label="Z"
                            setCurrentSound={setCurrentSound}
                        />
                        <DrumPad
                            id="kick2"
                            label="X"
                            setCurrentSound={setCurrentSound}
                        />
                        <DrumPad
                            id="crash"
                            label="C"
                            setCurrentSound={setCurrentSound}
                        />
                    </div>
                    <div id="display">{currentSound}</div>
                </div>
            </div>
        </>
    );
}

export default App;
