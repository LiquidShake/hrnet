import React from 'react';
import whLogo from '../../wh-logo.jpg';
import './home.scss';
import Card from './Card';

export default function Home() {
  return (
    <main className='home'>
      <div className="wrapper">
        <div className="presentation">
          <h2>What is HRNet ?</h2>
          <div className="presentation-content">
            <div className='logo-container'>
              <img src={whLogo} alt="Wealth Care Logo" />
            </div>
            <div className='description'>
              <p>
                Welcome to the ultimate employee management app - designed with you in mind. 
                We know how important it is to manage your team efficiently, 
                which is why we've created an app that simplifies the process for you.
              </p>
              <p>
                With our app, you can easily add a new employee to your company through a quick and intuitive form. 
                Say goodbye to complicated paperwork and endless forms - our app streamlines the process so you can 
                focus on what really matters: building your team.
              </p>
              <p>
                And that's not all - our app also lets you view a comprehensive list of all your employees. 
                Whether you need to contact someone for an urgent project or simply want to check in on your team, our app has got you covered.
              </p>
              <p>
                At our core, we believe that managing your employees should be easy and stress-free. 
                That's why we've designed our app to be user-friendly and powerful, so you can manage your team with confidence.
              </p>
              <p>
                Try our app today and see how it can transform the way you manage your workforce. 
                Your team deserves the best, and we're here to help you provide it.
              </p>
            </div>
          </div>
        </div>
        <div className="features">
          <h2>Our features</h2>
          <div className="features-content">
            <Card iconName='add' link='/create-employee' title='Add a new employee' />
            <Card iconName='group' link='/employees' title='See all employees' />
          </div>
        </div>
      </div>
    </main>
  )
}
