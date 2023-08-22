interface Props {
    event: string
    setButton: String
    state: Function
}

export default function EventRSVPButton(props: Props){
    const button = "w-48 h-12 mt-6 bg-zinc-700 m-3 rounded hover:bg-zinc-900 text-white"
    const handleChange = props.state;


    if(props.setButton === 'No thanks!'){
        return (
            <div>
                <button onClick={() => handleChange(props.event, false)} className={button}>{props.setButton}</button>
            </div>
        )
    }
    return(
        <div>
            <button onClick={() => handleChange(props.event, true)} className={button}>{props.setButton}</button>
        </div>
    )
}