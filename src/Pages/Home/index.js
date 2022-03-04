import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/menu'
import LinkItem from '../../components/LinkItem';

import api from '../../serivices/api';
import { saveLink } from '../../serivices/storeLinks'

export default function Home(){
  const [link, setlink] = useState('');
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink(){
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data);
      setShowModal(true);

      saveLink('@encurtaLink', response.data)

      setlink('')

    }catch{
      alert("Ops parece que algo deu errado!")
      setlink('');
    }
  }

  return(
    <div className="container-home">

      <div className="logo">
        <img src="/logo.png" alt="Sujeito Link Logo" />
        <h1>Encurtador de Link</h1>
        <span>Cole seu link para encurtar 👇🏻</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input
            placeholder="Cole o seu link aqui..."
            value={link}
            onChange={ (e) => setlink(e.target.value) }
            />
        </div>
        
        <button onClick={handleShortLink}>Encurtar Link</button>1

      </div>

      <Menu/>

      { showModal && (
        <LinkItem
          closeModal={ () => setShowModal(false) }
          content={data}
        />
      ) }
      
    </div>
  )
}
