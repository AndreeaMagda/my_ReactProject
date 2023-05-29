import React from 'react'
import hp from '../../Images/title.png'
import AdminOnlyRoute from '../../components/adminOnlyRoute/AdminOnlyRoute'
import hpAdd from '../../Images/slide1.jpg'
import hedwig from '../../Images/hedwig.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const Home = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className='grid'>
          <div class="row">
           
            <div className="row justify-content-md-center">
              <div className="col-md-auto">
                <img src={hp} className="img-fluid rounded mx-auto d-block" alt="Responsive image" />
              </div>
            </div>
            <div className="row justify-content-md-center ">
              <div className="col-md-auto">
              </div>
            </div>
          </div>
        </div>
        <div className='container '>
          <div className='grid'>
            <div className='row'>

              <div className='col  '>
                <img className='img-thumbnail' src={hpAdd} alt="errimglg " width="1500" />
                <a href="/admin/all-products" class="btn btn-info btn-lg btn-block center " role="button" aria-disabled="true">Go to products</a>

              </div>
            </div>
          </div>
          </div>
        </div>
  <br></br>
  <br/>
  <br/><div style={{ display: 'flex' }}>
  <Card sx={{ maxWidth: 405, marginRight: '10px' }}>
    {/* Primul card */}
    <CardActionArea>
      <CardMedia
        component="img"
        height="240"
        image="https://www.roadaffair.com/wp-content/uploads/2017/12/alnwick-castle-england-uk-shutterstock_456294103.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Alnwick Castle, England
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Built in the 11th century, the castle grounds are where Harry and his friends first learned to fly their broomsticks in Harry Potter 
          and the Sorcerer’s Stone. Alnwick Castle is also where Harry learned the rules of Quidditch.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

  <Card sx={{ maxWidth: 405, marginRight: '10px' }}>
    {/* Al doilea card */}
    <CardActionArea>
      <CardMedia
        component="img"
        height="240"
        image="https://www.roadaffair.com/wp-content/uploads/2017/12/jacobite-scotland-uk-shutterstock_351622814.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        The Jacobite, Scotland
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Book your ticket on the Hogwarts Express! This train runs from Fort William to Mallaig, and will take you across the “bridge to Hogwarts”. The Hogwarts Express route 
        is open from March to October in 2018, and you can get your ticket starting at only £30.00.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  <Card sx={{ maxWidth: 405, marginRight: '10px' }}>
    {/* Al doilea card */}
    <CardActionArea>
      <CardMedia
        component="img"
        height="240"
        image="https://www.roadaffair.com/wp-content/uploads/2017/12/wizarding-world-of-harry-potter-shutterstock_757514953.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        The Wizarding World of Harry Potter
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Travel back to your childhood and experience The Wizarding World of Harry Potter. Explore Hogsmeade and Hogwarts, and even take a ride on the Hogwarts Express. With one in Los Angeles, one in Florida, and one in Japan, you have three opportunities to enjoy 
        roller coasters, shops, and restaurants that bring the world of Harry Potter to life :)
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>


<Card sx={{ maxWidth: 405, marginRight: '10px' }}>
    {/* Al doilea card */}
    <CardActionArea>
      <CardMedia
        component="img"
        height="240"
        image="https://www.roadaffair.com/wp-content/uploads/2017/12/kings-cross-harry-potter-london-uk-shutterstock_410533024.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Kings Cross, London
        </Typography>
        <Typography variant="body2" color="text.secondary">
        All real Harry Potter fans have wondered about finding the magical platform to get 
        to Hogwarts. At Kings Cross, not only will you find Platform 9 ¾, but you’ll also find a shop where you can stock up on Harry Potter gear. Don’t forget to get your picture taken
         with the famous luggage trolley before you head out on your magical journey!
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

  <Card sx={{ maxWidth: 405, marginRight: '10px' }}>
    {/* Al doilea card */}
    <CardActionArea>
      <CardMedia
        component="img"
        height="240"
        image="https://www.roadaffair.com/wp-content/uploads/2017/12/Duke_Humfreys_Library_Interior_Bodleian_Library_Oxford_UK_Diliff.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Bodleian Library, Oxford
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Do you remember when Harry went into Hogwarts’ library undetected due to his invisibility cloak? Well, the Duke Humfrey’s Library, the oldest reading room in the Bodleian Library, was where all that magic was filmed. To see this part of the library you’ll need to book a private tour, unless you have an invisible cloak like Harry
         did! The Bodleian Library was also the site of the infirmary in four of the Harry Potter movies.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>


  <Card sx={{ maxWidth: 405, marginRight: '10px' }}>
    {/* Al doilea card */}
    <CardActionArea>
      <CardMedia
        component="img"
        height="240"
        image="https://www.roadaffair.com/wp-content/uploads/2017/12/pivet-drive-harry-potter-shutterstock_665199043.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Privet Drive, Little Whinging, Surrey
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Only true Potterheads will take a trip to the suburbs to visit Harry’s childhood home. 4 Privet Drive was where we first met Harry and the unpleasant Dursley family in Harry Potter and the Sorcerer’s Stone. Technically, the home for the movies was filmed in Berkshire, so you’ll find all the crowds taking their pictures at 12 Picket Post Close in Martins Heron.


        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

</div>
    </React.Fragment>
  )
}

export default Home
