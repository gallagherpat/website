//@ts-nocheck
export default function Section (props) {
    const main = "sm:w-3/4 mx-auto px-4 pt-8 12";
    const h1 = "text-2xl pb-3";
    const h3 = "font-thin text-md mb-4";
    const p = "text-lg";
    if(props.title == "proposal"){
        return (
        <main className={main}>
            <h1 className={h1}>The Proposal</h1>
            <h3 className={h3}>06.17.2023</h3>
            <p className={p}>This is another fun story. It was a pretty typical day, Kenna and I were both at work and we were texting about how what we were going to have for dinner. Then her coworker asked if we could watch her dog for the evening. That is when Kenna suggested we go on a picnic! That is when I sprung into action and got all the picninc gear and the ring, and we got engaged in the park just her and I... and Rudy the dog.</p>
        </main>
    )
    }else if(props.title == "met"){
        return (
            <main className={main}>
                <h1 className={h1}>How We Met</h1>
                <h3 className={h3}>08.01.2018</h3>
                <p className={p}>The short story is we met on tinder... The long is a little more fun. Kenna was moving into college in Philidelphia and had stopped in North Carolina where her dad was staying for work. I talked to her and asked her on a date. She couldnt because she was leaving the day I asked. We then proceeded to talk all summer and finally went on our first date in August despite her parents misgivings :)</p>
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