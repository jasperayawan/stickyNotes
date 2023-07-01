

export default function Note(props){
    return(
        <>
            <div className="flex flex-col relative">
                <h1 className="font-semibold uppercase">{props.title}</h1>
                <p>{props.desc}</p>
                <button className="absolute top-2 right-1 text-red-500"
                onClick={() => {
                    props.onDel(props.id)
                }}
                >{props.trash}</button>
            </div>
        </>
    )
}