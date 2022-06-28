import './about.css';
import ScrollReveal from '../../components/scrollReveal/ScrollReveal';

export default function About() {
  return (
    <div className="container">       
      <div className="row about-container">
        <div className="col-lg-6 col-md-6 col-xs-12">
          <div className="left-text-content">
            <div className="section-heading">
              <h1 className="text-white">About Us</h1>
              <br />
            </div>
            <div className="medium-text text-white" style={{opacity: '60%'}}>
              Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, 
              vel scelerisque nisl consectetur et. Donec sed odio dui. Morbi leo risus, 
              porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. 
              Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, 
              vel scelerisque nisl consectetur et. Donec sed odio dui. Morbi leo risus, 
              porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. 
              Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, 
              vel scelerisque nisl consectetur et. Donec sed odio dui. Morbi leo risus, 
              porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.
            </div>
           </div>
        </div>
        <div className="col-lg-6 col-md-6 col-xs-12">
          <br className="mobile-on" />
          <div className="right-text-content">
            <ScrollReveal 
              delay={0} 
              interval={300} 
              distance="100px" 
              origin="bottom"
            >
              <img 
                src="images/about-img-lg.png" 
                alt="About Us"
                className="w-full object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}