import React , {useState ,useEffect} from 'react'
import axios from 'axios'

function TopPlayers() {
    const [username,setUsername] = useState('')
    const [ratings,setRating] = useState(0);
    const[ players,setPlayer] = useState([])

    useEffect(() => {
		axios
			.get(`https://lichess.org/api/player`,  
           )
			.then(res => {
                console.log(res.data['classical'])
                setPlayer(res.data['classical'])

			})
			.catch(err => {
				console.error('Error fetching top players in classical mode:',err)
			})
	}, [])

  return (
    <div>
        <h1>
         TopPlayers in Classical
        </h1>
        
        <ul>
			{players.map(user => (
          <li>{user.username}</li>
				))}
                
  
            
		</ul>

    </div>
  )
}

export default TopPlayers