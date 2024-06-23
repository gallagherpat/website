interface Props {
    event: string
    setButton: String
    state: Function,
    currentState: Object
}

export default function EventRSVPButton(props: Props){
    let button = "w-48 h-12 mt-6 bg-zinc-700 m-3 rounded hover:bg-zinc-900 text-white"
    const handleChange = props.state;
    const currentState = props.currentState;
    if(props.setButton === 'No thanks!'){
        //@ts-ignore
    if(currentState[props.event] == false){
        console.log("This is the state of the event " + props.event)
        button = "w-48 h-12 mt-6 bg-red-700 m-3 rounded hover:bg-red-900 text-white"
    }
    return (
            <button onClick={() => handleChange(props.event, false)} className={button}>{props.setButton}</button>
    )
    }
    //@ts-ignore
    if(currentState[props.event] == true){
        console.log("This is the state of the event " + props.event)
        button = "w-48 h-12 mt-6 bg-green-700 m-3 rounded hover:bg-green-900 text-white"
    }
    return(
        <button onClick={() => handleChange(props.event, true)} className={button}>{props.setButton}</button>
    )
}