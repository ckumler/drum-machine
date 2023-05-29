function DrumPad({ id, label, src }) {
    const audioRef = React.useRef();

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
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
        <button className="drum-pad" id={id} onClick={playSound}>
            <audio ref={audioRef} className="clip" id={label} src={src}></audio>
            {label}
        </button>
    );
}
