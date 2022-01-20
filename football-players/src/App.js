import './App.css';
import Players from './Players';
import Grid from '@mui/material/Grid';


function App() {
  const players = [
    {
        title: 'Sean Taylor',
        position: 'Free Safety',
        image: '',
        alt_text: 'Played from 2004-2007',
        stats: [
      'Height:6-2',
      'Weight: 231lb',
      '40 Yard Dash: 4.51 seconds',
      'Team: Washington Football Team'
        ]
    },
    {
        title: 'Ed Reed',
        position: 'Srong Safety',
        image: '',
        alt_text: 'Played from 2002-2013',
        stats:  [
      'Height: 5-11 ',
      'Weight : 205lb',
      '40 Yard Dash : 4.57 seconds',
      'Team: Baltimore Ravens'
        ]
    },
    {
        title: 'Ronnie Lott',
        position: 'Free Safety, Strong Safety, Cornerback',
        image: '',
        alt_text: 'Played from 1981-1994',
        stats: [
      'Height: 6-0 ',
      'Weight: 203lb',
      '40 Yard Dash : 4.61 seconds ',
      'Team: San Francisco 49ers',
        ]
    }	
      ];
      return (
        <Grid container spacing={2}>
          {players.map((player) => {
              return (<Grid item xs={4}>
            <Players
                stats={player.stats}
                title={player.title}
                position={player.position}
            image={player.image}
            alt_text={player.alt_text}
            />
              </Grid>)
          })
            }
        </Grid>
          );
      }

export default App;