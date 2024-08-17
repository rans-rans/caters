import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'
 
const Home = () => {
  
  const exampleuser = {
  firstName: 'Marcus',
  lastName: 'Oware',
  email:'email'
  }

  return (
    <section  className='home'>
      <div className='home-content'>
        <HeaderBox 
          subtext='a new craft of taste'
          user={exampleuser.firstName
          }
          title="caters cathering"
        />
      </div>
      
    </section>
  )
}

export default Home
