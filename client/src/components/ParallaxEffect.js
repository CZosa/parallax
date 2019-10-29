import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import '../styles/parallaxeffect.css';
import images from '../../images/pics';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

class ParallaxEffect extends React.Component {
  render() { 
    return (
      <div className="parallax-container">
        <Parallax ref={ref => (this.parallax = ref)} pages={3.18}>

          {/* dark grey background color */}
          <ParallaxLayer factor={1.1} offset={0} speed={2.2} style={{ backgroundColor: '#253237' }} />

          {/* yellow background color */}
          <ParallaxLayer factor={1.1} offset={1} speed={2.2} style={{ backgroundColor: '#EFF59B' }} />

          {/* orange background color */}
          <ParallaxLayer factor={1} offset={2.1} speed={1} style={{ backgroundColor: '#FFA500' }} />

          {/* black background color */}
          <ParallaxLayer factor={1.1} offset={2.5} speed={2.1} style={{ backgroundColor: '#000000' }} />


          

          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            {/* <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} /> */}
            {/* <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} /> */}
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
            {/* <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} /> */}
          </ParallaxLayer>

          <ParallaxLayer offset={0.7} speed={0.1} style={{ opacity: 0.4 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '10%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
          </ParallaxLayer>

          

          {/* <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundImage: url('clients', true)
            }}
          /> */}
          
          {/* ava logo */}
          <ParallaxLayer
            offset={0}
            speed={1}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={images.ava} />
          </ParallaxLayer>

          {/* building icon */}
          <ParallaxLayer
            offset={0.75}
            speed={0.6}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={images.building} style={{ width: '25%', marginTop: '5%' }} />
          </ParallaxLayer>

          {/* meeting room icon */}
          <ParallaxLayer
            offset={1}
            speed={1.2}
            onClick={() => this.parallax.scrollTo(2)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={images.meeting} style={{ width: '50%', marginTop: '5%' }} />
          </ParallaxLayer>
          
          {/* worker1 icon */}
          <ParallaxLayer 
            offset={0.77} 
            speed={0.3} 
            style={{ pointerEvents: 'none' }}>
            <img src={images.worker} style={{ width: '10%', marginLeft: '70%', marginTop: '15%' }} />
          </ParallaxLayer>

          {/* worker2 icon */}
          <ParallaxLayer 
            offset={1.2} 
            speed={0.7} 
            style={{ pointerEvents: 'none' }}>
            <img src={images.worker} style={{ width: '10%', marginLeft: '10%', marginTop: '10%' }} />
          </ParallaxLayer>
          
          {/* rocket icon */}
          <ParallaxLayer offset={3.0} speed={1.0} style={{ pointerEvents: 'none' }}>
            <img src={images.rocket} style={{ width: '15%', marginLeft: '60%' }} />
          </ParallaxLayer>

          {/* earth icon */}
          <ParallaxLayer offset={3.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
            <img src={url('earth')} style={{ width: '60%' }} />
          </ParallaxLayer>

        </Parallax>  
      </div>
    );
  }
}
 
export default ParallaxEffect;