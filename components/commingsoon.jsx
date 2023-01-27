

export default function Comson(props) {
    // const name = props.name
    const text = props.text
    const url = props.url
  return (
    <>
    {/* <div className='mainflex'> */}
    {/* <div className='comson'> */}
        {/* <h4>{name}</h4> */}
      <a href={url}>  <h5><i> {text}</i></h5></a>
        {/* </div> */}
    {/* </div> */}
    </>
  )
}
