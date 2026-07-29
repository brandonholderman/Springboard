function ColorBox() {
    const colors = [
        { color: "brown" },
        { color: "blue" },
        { color: "red" },
        { color: "green" },
        { color: "yellow" },
        { color: "skyBlue" },
        { color: "pink" },
        { color: "orange" },
        { color: "purple" },
        { color: "cyan" },
        { color: "magenta" },
        { color: "tan" },
        { color: "teal" },
        { color: "coral" },
        { color: "violet" },
        { color: "maroon" },
    ];

    const [colorArr, setColorArr] = useState(colors);
    
    function changeColor(colorArr) {
        let shake = Math.floor(Math.random() * colorArr.length)
        return colorArr[shake]
    }

    function handleChange(index) {
        const newColors = [...colorArr];
        const newColor = changeColor(newColors);
        newColors[index].color = newColor.color;
        setColorArr(newColors);
    }

    // (() => {
    //     console.log(colorArr)
    // })();

    return (
        <div className="colors-container">
            {colorArr.map((data, index) => (
                <div key={index}>
                    <div className="color-box" style={{ backgroundColor: data.color }} id={index}>
                        {data.color}
                    </div>
                    <button className="change-button" onClick={() => handleChange(index)}>Change</button>
                </div>
            ))}
        </div>
    );
}

