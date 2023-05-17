import React from 'react'
import { Link } from 'react-router-dom'
import addIcon from '../../assets/img/add_employee.svg';
import groupIcon from '../../assets/img/group.svg';

export default function Card({ iconName, link, title }) {

  /* List of allowed icons */
  const icons = {
    'add': addIcon,
    'group': groupIcon,
  };

  let icon = icons[iconName];

  return (
    <div className='card'>
      <Link to={link}>
        <img src={icon} alt="icon" />
        <p>{title}</p>
      </Link>
    </div>
  )
}
