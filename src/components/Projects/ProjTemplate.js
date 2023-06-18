import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {BiLink} from 'react-icons/bi'

const ProjTemplate = (props) => {
  return (
    <div className="card">
  <div className="card__img">
    <img
// src='https://th.bing.com/th/id/R.bb81017ace8cbaed9fcbb88cf2280cba?rik=ynMEw4fmarRg6A&riu=http%3a%2f%2fwww.designlab.net.au%2fwp-content%2fuploads%2fproject-manager-roll.jpg&ehk=z2LJ5lHVsEqDlj%2bhovdvyWlj8QRIqvGLVZ0%2btxmjEOU%3d&risl=&pid=ImgRaw&r=0'
src={props.src}
alt='proj'
    />
  </div>
  <div className="card__descr-wrapper">
    <p className="card__title heading">
      {props.title}
  </p>
  <p className="card__descr">
    {props.description}
  </p>
  <div className="card__links">
    <div>
      <a className="link"
       target='_blank'
        href={props.preview} rel="noreferrer">
      <button className="button">
      <BiLink
      size={30}
      />
    <span className="text">Preview</span>
  </button>
  </a>
    </div>
    <div>
      <a className="link" target='_blank' href={props.code} rel="noreferrer">
      <button className="button">
      <AiFillGithub
      size={30}
      />
    <span className="text">Code</span>
  </button>
  </a>
    </div>
  </div>
  </div>
</div>
  )
}

export default ProjTemplate
