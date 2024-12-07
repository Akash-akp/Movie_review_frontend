import React from 'react'
import Group_Card from './Group_Card'
import './Group.css'
import akashImage from '../../img/Akash Kumar Parida.png'
import nandiImage from '../../img/Abhisek Nandi.jpeg'
import arptiaImage from '../../img/Arpita Nayak.png'
import ashishImage from '../../img/AshishKumar.jpeg'

const Group = () => {
  return (
    <div>
      <h1>Group Member:-</h1>

      <div>
        <Group_Card name={'Akash Kumar Parida'} reg={2141016135} imgsrc={akashImage} />
        <Group_Card name={'Abhishek Nandi'} reg={2141014029} imgsrc={nandiImage}/>
        <Group_Card name={'Arpita Nayak'} reg={2141014103} imgsrc={arptiaImage} />
        <Group_Card name={'Ashish Kumar'} reg={2141011131} imgsrc={ashishImage} />
      </div>
    </div>
  )
}

export default Group
