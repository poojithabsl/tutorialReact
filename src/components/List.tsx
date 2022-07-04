interface Props {
  subs: Array<{
    nick: string,
    avatar: string,
    meses:number,
    description?: string
  }>
}
// Poojitha function for lists

export default function List({subs}: Props){
    return(
        <ul>
        {
          subs.map(sub=>{
            return(
              
              <li key={sub.nick}>
                <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                <h3>{sub.nick}</h3>
                <p>{sub.description?.substring(0, 100)}</p>
                <br></br>
              </li>
            )
          }
            )
        }
      </ul>
    )

}