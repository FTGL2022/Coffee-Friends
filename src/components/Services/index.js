import React from 'react'
import Icon11 from '../images/svg11.svg'
import Icon2 from '../images/svg2.svg'
import Icon3 from '../images/svg3.svg'
import Icon5 from '../images/svg5.svg'
import Icon6 from '../images/svg6.svg'
import Icon4 from '../images/svg4.svg'

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServivesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon11}/>
            <ServicesH2>Private Events</ServicesH2>
            <ServivesP>Unforgettable moments with our private events for celebrations or meetings.
            </ServivesP>
        </ServicesCard>

        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Retail Sales</ServicesH2>
            <ServivesP>Take the flavor home with our exclusive product selection
            </ServivesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Catering</ServicesH2>
            <ServivesP>Impress your guests with our high-quality catering service.
            </ServivesP>
        </ServicesCard>

        <ServicesCard>
            <ServicesIcon src={Icon4}/>
            <ServicesH2>Workshops & Classes</ServicesH2>
            <ServivesP>Learn and create with our coffee workshops and classes.
            </ServivesP>
        </ServicesCard>

        <ServicesCard>
            <ServicesIcon src={Icon5}/>
            <ServicesH2>Free Wi-Fi & Co-Working Spaces</ServicesH2>
            <ServivesP>Work and relax with our free Wi-Fi and co-working spaces.
            </ServivesP>
        </ServicesCard>

        <ServicesCard>
            <ServicesIcon src={Icon6}/>
            <ServicesH2>Live Music & Entertainment</ServicesH2>
            <ServivesP>Enjoy live music and entertainment in a cozy atmosphere.
            </ServivesP>
        </ServicesCard>

        

      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services