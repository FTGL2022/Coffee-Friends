import React, {useState} from 'react'
import Video from "../videos/video.mp4";
import { HeroContainer, HeroBg, VideoBg, HeroContent, Heroh1, HeroP, HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements'
import { Button } from '../../ButtonElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


  return (
    <HeroContainer id='home' >
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type = "video/mp4" /> 
      </HeroBg>
      <HeroContent>
        <Heroh1>Coffee&Friends</Heroh1>
        <HeroP>Share moments, savor life.
             </HeroP>
             <HeroBtnWrapper>
                <Button to ="signup" onMouseEnter = {onHover} onMouseLeave = {onHover} 
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>
                    Get started {hover ? <ArrowForward/> : <ArrowRight /> }
                </Button>
             </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
