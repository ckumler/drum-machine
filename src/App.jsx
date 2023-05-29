import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        function handleKeyDown(event) {
            switch (event.key.toUpperCase()) {
                case "Q":
                    playSound("Q");
                    break;
                case "W":
                    playSound("W");
                    break;
                case "E":
                    playSound("E");
                    break;
                case "A":
                    playSound("A");
                    break;
                case "S":
                    playSound("S");
                    break;
                case "D":
                    playSound("D");
                    break;
                case "Z":
                    playSound("Z");
                    break;
                case "X":
                    playSound("X");
                    break;
                case "C":
                    playSound("C");
                    break;
                default:
                    break; // ignore other keys
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        // clean up the event listener when the component is unmounted
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    function playSound(id) {
        const audioElement = document.getElementById(id);
        audioElement.currentTime = 0;
        audioElement.play();
    }

    return (
        <>
            <div id="drum-machine">
                <div className="drum-pads">
                    <button
                        className="drum-pad"
                        id="clap"
                        onClick={() => playSound("Q")}
                    >
                        <audio
                            className="clip"
                            id="Q"
                            src="/sounds/clap.wav"
                        ></audio>
                        Q
                    </button>
                    <button className="drum-pad" id="openhh">
                        <audio className="clip" id="W" src=""></audio>W
                    </button>
                    <button className="drum-pad" id="closedhh">
                        <audio className="clip" id="E" src=""></audio>E
                    </button>
                    <button className="drum-pad" id="snare1">
                        <audio className="clip" id="A" src=""></audio>A
                    </button>
                    <button className="drum-pad" id="snare2">
                        <audio className="clip" id="S" src=""></audio>S
                    </button>
                    <button className="drum-pad" id="ride">
                        <audio className="clip" id="D" src=""></audio>D
                    </button>
                    <button className="drum-pad" id="kick1">
                        <audio className="clip" id="Z" src=""></audio>Z
                    </button>
                    <button className="drum-pad" id="kick2">
                        <audio className="clip" id="X" src=""></audio>X
                    </button>
                    <button className="drum-pad" id="crash">
                        <audio className="clip" id="C" src=""></audio>C
                    </button>
                </div>

                <div id="display"></div>
            </div>
        </>
    );
}

export default App;
