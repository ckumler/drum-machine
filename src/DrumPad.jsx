import { useRef, useEffect, useState } from "react";

function DrumPad({ id, label, setCurrentSound }) {
    const audioRef = useRef();
    const [isActive, setIsActive] = useState(false);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();

            setCurrentSound(id);

            setIsActive(true);
            setTimeout(() => setIsActive(false), 100);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key.toUpperCase() === label) {
                playSound();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [label]);

    return (
        <button
            className={`drum-pad ${isActive ? "active" : ""}`}
            id={id}
            onClick={playSound}
        >
            <audio
                ref={audioRef}
                className="clip"
                id={label}
                src={`/sounds/${id}.wav`}
            ></audio>
            {label}
        </button>
    );
}

export default DrumPad;
