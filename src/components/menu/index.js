import './menu.css';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu(){
  return(
    <div className='menu'>
      <a className='social' href='https://www.facebook.com/rennan.alves.315/'>
        <BsFacebook color="#fff" size={24} />
      </a>
      <a className='social' href='https://github.com/RennanDEV'>
        <BsGithub color="#fff" size={24} />
      </a>
      <a className='social' href='https://www.instagram.com/rennanalves.dev/'>
        <BsInstagram color="#fff" size={24} />
      </a>
      <a className='social' href='https://www.linkedin.com/in/rennan-alves-49b066220/'>
        <BsLinkedin color="#fff" size={24} />
      </a>
      <a className='social' href='https://twitter.com/DevRennanAlves'>
        <BsTwitter color="#fff" size={24} />
      </a>
      <a className='social' href='http://wa.me/5581995278390'>
        <BsWhatsapp color="#fff" size={24} />
      </a>
      <Link className='menu-item' to="/links">
      Meus Links
      </Link>
    </div>
  )
}