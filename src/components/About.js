import Footer from './Footer';
import { Card } from 'react-bootstrap';
import {useEffect} from 'react';
import {Helmet} from 'react-helmet';


function About() {
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About - Covid19-Tracker</title>
        <meta
          name="title"
          content="Coronavirus Outbreak in India: Latest Map and Case Count"
        />
      </Helmet>

      <div className="About">
        <div className="faq fadeInUp" style={{animationDelay: `${0.5 + 3 * 0.1}s`}}>
            <h2 className="question">Where from did we fetch the data for this project?</h2>
            <h2
                className="answer"
                >First, we fetch all the data and numbers from the api: <a href="https://api.covid19india.org/">api.covid19india.org</a> . This data is mostly in json and csv format, which is hard to read, hence we have to extract the data and present it to the viewers in a user-readable format. Thus we have represented the data in multiple ways to cater to the choices of a wider variety of users, starting from tables to graphs, we have it all!</h2>
        </div>
        <div className="faq fadeInUp" style={{animationDelay: `${0.5 + 5 * 0.1}s`}}>
            <h2 className="question">Are we official?</h2>
            <h2
                className="answer"
                >No, we are just a team of 2 Final Year B. Tech students who have designed this web-based application for common use. However, we can assure that our data sources are authentic and are being constantly updated.</h2>
        </div>
        <div className="faq fadeInUp" style={{animationDelay: `${0.5 + 7 * 0.1}s`}}>
          <h2 className="question">Meet our developers</h2>
          <div className="Developers" style={{display: 'flex',  width: "100%", alignContent: 'center', flexDirection: 'row'}}>
          

          <Card border="primary" style={{margin: "5%"}}>
                  <Card.Img variant="top" src={require('../developers/Adrija.jpg').default} height={200} width={200} />
                  <Card.Body>
                    <Card.Title>Adrija Paul</Card.Title>
                    <Card.Text>
                    <small className="text-muted">Adrija is a Final Year B. Tech student at IEM, Kolkata majoring in Electronics and Communications Egnineering. Having received years of training in fine arts, followed by certification in Graphic Design and Web UI Frameworks like Bootstrap, HTML, CSS, designing appealing Web Applications has become her passion.</small>
                    </Card.Text>
                  </Card.Body>
                  
                </Card>
                <Card border="primary" style={{margin: "5%"}}>
                  <Card.Img variant="top" src={require('../developers/Debanjan.jpeg').default} height={200} width={200}/>
                  <Card.Body>
                    <Card.Title>Debanjan Bardhan</Card.Title>
                    <Card.Text>
                    <small className="text-muted">Debanjan is a Final Year B. Tech student at IEM, Kolkata majoring in Electronics and Communications Engineering. He is a Cloud Comupting enthusiast, with a taste for Web UI Frameworks like Boostrap and React.js.</small>
                    </Card.Text>
                  </Card.Body>
                  
                </Card>
                
                
              
          </div>
          
          

          </div>
         
      </div>
      

      <Footer />
    </>
  );
}

export default About;