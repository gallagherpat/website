//@ts-nocheck
export default function Section (props) {
    const main = "w-3/4 mx-auto pt-4";
    const h1 = "text-xl pb-3";
    if(props.title == "proposal"){
        return (
        <main className={main}>
            <h1 className={h1}>The Proposal</h1>
            <p>This is another fun story. It was a pretty typical day, Kenna and I were both at work and we were texting about how what we were going to have for dinner. Then her coworker asked if we could watch her dog for the evening. That is when Kenna suggested we go on a picnic! That is when I sprung into action and got all the picninc gear and the ring, and we got engaged in the park just her and I... and Rudy the dog.</p>
        </main>
    )
    }else if(props.title == "met"){
        return (
            <main className={main}>
                <h1 className={h1}>How We Met</h1>
                <p>The short story is we met on tinder... The long is a little more fun. Kenna was moving into college in Philidelphia and had stopped in North Carolina where her dad was staying for work. I talked to her and asked her on a date. She couldnt because she was leaving the day I asked. We then proceeded to talk all summer and finally went on our first date in August despite her parents misgivings :)</p>
            </main>
        )
    }else{
        return (
            <main>
                <div>Error!</div>
            </main>
        )
    }
    

}