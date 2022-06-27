import './style.css';
import ScrollReveal from '../../components/scrollReveal/ScrollReveal';

export default function CodeofConduct() {
  return (
    <div className="container text-center text-white">
      <h1>Code of Conduct</h1>
      <br />
      <ScrollReveal 
        delay={0} 
        interval={200} 
        distance="100px" 
        origin="bottom"
      >
        <div className="medium-text" style={{opacity: '60%'}}>
                Nullam id dolor id nibh ultricies vehicula ut id elit. 
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. 
                Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. 
                Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. 
                Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit. 
                Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at.
        </div>
      </ScrollReveal>
      <br />
      <ScrollReveal 
        delay={200} 
        interval={400} 
        distance="100px" 
        origin="bottom"
      >
        <div className="medium-text" style={{opacity: '60%'}}>
                Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, 
                vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sed diam eget risus varius blandit sit amet non magna. 
                Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. 
                Aenean lacinia bibendum nulla sed consectetur.
                Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. 
                Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies 
                vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at.
        </div>
      </ScrollReveal>
    </div>
  )
}