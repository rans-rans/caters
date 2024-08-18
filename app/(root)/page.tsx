import { FeatureItems } from '@/components/ui/FeaturedItem'
import HeaderBox from '@/components/ui/HeaderBox'
import ImageSlider from '@/components/ui/ImageSlider'
import RightSidebar from '@/components/ui/RightSidebar'
import { featuredfooditem, sliders } from '@/constants'
import React from 'react'
 
const Home = () => {
  
  const loggedIn = {
  firstName: 'Marcus',
  lastName: 'Oware',
  email:'email'
  }

  return (
    <section  className='home'>
      <div className='home-content'>
        <div className='home-header'>

        <HeaderBox 
          subtext='A New Craft of Taste'
          title="Caters Cathering"
        />
        </div>
        <div>
          <ImageSlider images={sliders}/>
          <div className='pt-14'>
            <p className='text-semibold text-xl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia repellat animi, aperiam est tempore, tempora aspernatur, nulla consequuntur a dolore impedit architecto quasi velit quas adipisci. Quia aspernatur consectetur culpa?
            </p>
          </div>
          <FeatureItems item={featuredfooditem}/>
        </div>
      </div>
      <RightSidebar user={loggedIn}/>
    </section>
  )
}

export default Home
