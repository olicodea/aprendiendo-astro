const styles = {
    background: "#24abf2",
    padding: "1rem",
};

export default function HelloWorld(props) {
    const student = "VOID_OLI";

    return (
        <div style={styles}>
            <h1>{props.title}</h1>
            <p>{student}</p>
        </div>
    );
}
