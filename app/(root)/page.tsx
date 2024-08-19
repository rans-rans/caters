import { FeatureItems } from '@/components/ui/FeaturedItem'
import HeaderBox from '@/components/ui/HeaderBox'
import ImageSlider from '@/components/ui/ImageSlider'
import RightSidebar from '@/components/ui/RightSidebar'
import SectionTitle from '@/components/ui/SectionTitle'
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
            <p className='text-lg md:text-xl  text-right md:text-wrap leading-2 min-w-lg max-w-[] mx-auto font-normal '>
              We care for your health and  expenses.Book meals of your choice based on the services we provide.Note, prices can change to fit your plan.
            </p>
          </div>
          <div className='pt-12'>
            <SectionTitle 
              secClass=''
              secName='Services'
            />

          </div>
          <FeatureItems item={featuredfooditem}/>
        </div>
      </div>
      <RightSidebar user={loggedIn}/>
    </section>
  )
}

export default Home
