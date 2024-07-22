//@ts-ignore
export default function QACard(props) {
    const data = props.data;
    return(
      <div className="mt-8 pb-6 border-b-2 border-black border-opacity-30">
        <h3 className="font-bold">Qeustion:</h3>
        <p className="ml-4">{data.question}</p>
        <br />
        <h3 className="font-bold">Answer:</h3>
        <p className="ml-4">{data.answer}</p>
    </div>
    )
}