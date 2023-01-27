

export default function News(props) {
    const name = props.name
    const date = props.date
    const text = props.text
  
  return (
    <>
    {/* <div className='mainflex'> */}

    <div className='leftbox'>
      <div className="dateundnews">

        <h4 className="news">{name}</h4>
    <h5 className="date">{date}</h5>

        </div>
        <h5 >{text}</h5>
        
        </div>
<br />

    {/* </div> */}
    </>
  )
}
