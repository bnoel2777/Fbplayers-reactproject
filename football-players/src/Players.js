import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';



function Players({
    stats,
    title,
    position,
    image,
    alt_text,
}){
    return(
        <Card sx={{ maxWidth :200, maxHeight : 800}}>
        <CardActionArea>
        <CardMedia
        
         component="img"
          height="100"
          image="https://clutchpoints.com/wp-content/uploads/2021/10/Sean-Taylor-Washington-Football-Team.jpg"
          alt="sean taylor"
        
        />
          
          
        </CardActionArea>
            <h2> 
                {title}
            </h2>
            <p>
                {position}
            </p>
        
         <ol>
            {stats.map(
                
                (player) => {
                return <li>{player}</li>
           
            }
            )}
        </ol>


        </Card>
      
    
    )
}

export default Players;