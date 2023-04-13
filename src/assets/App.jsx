export const MyButton = (props) => {
    function play() { var audio = new Audio(props.audio); audio.play(); }
    return (
        <div className="Button">
            <button onClick= {play} className="MyButton">{props.children}</button>
        </div>
    )
}

const App = () => {
    const title = "Cris es el GOAT";
    const classTitle = "text-center";
    return (
        <div>
            <h1 className={classTitle}>{title.toUpperCase()}</h1>
        </div>
    )
}

export default App;
