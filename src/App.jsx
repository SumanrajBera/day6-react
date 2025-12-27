import React from 'react'
import { useState } from "react";

import TitleGrp from './components/TitleGrp'
import MainContent from './components/MainContent'
import Module from './components/Module'

const App = () => {
  const [contacts, setContacts] = useState([
    { name: "Aarav Sharma", phone: "9876543210", imgUrl: "https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg" },
    { name: "Riya Verma", phone: "9123456780", imgUrl: "https://images.pexels.com/photos/7640433/pexels-photo-7640433.jpeg" },
    { name: "Kunal Mehta", phone: "9988776655", imgUrl: "https://images.pexels.com/photos/6744887/pexels-photo-6744887.jpeg" },
    { name: "Sneha Patil", phone: "9012345678", imgUrl: "https://images.pexels.com/photos/26100579/pexels-photo-26100579.jpeg" },
    { name: "Rohit Singh", phone: "9090909090", imgUrl: "https://images.pexels.com/photos/3894557/pexels-photo-3894557.jpeg" },
    { name: "Ananya Das", phone: "9345678123", imgUrl: "https://images.pexels.com/photos/1003979/pexels-photo-1003979.jpeg" },
    { name: "Vikram Rao", phone: "9567891234", imgUrl: "https://images.pexels.com/photos/7640743/pexels-photo-7640743.jpeg" },
    { name: "Pooja Nair", phone: "9786543211", imgUrl: "https://images.pexels.com/photos/1937434/pexels-photo-1937434.jpeg" },
    { name: "Amit Kumar", phone: "9654321876", imgUrl: "https://images.pexels.com/photos/157920/woman-face-curly-hair-157920.jpeg" },
    { name: "Neha Gupta", phone: "9871203456", imgUrl: "https://images.pexels.com/photos/1649735/pexels-photo-1649735.jpeg" },
    { name: "Siddharth Jain", phone: "9900112233", imgUrl: "https://images.pexels.com/photos/2531552/pexels-photo-2531552.jpeg" },
    { name: "Kavya Iyer", phone: "9445566778", imgUrl: "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg" },
    { name: "Arjun Malhotra", phone: "9321456789", imgUrl: "https://images.pexels.com/photos/2345293/pexels-photo-2345293.jpeg" },
    { name: "Mehul Choksi", phone: "9556677889", imgUrl: "https://images.pexels.com/photos/3762802/pexels-photo-3762802.jpeg" },
    { name: "Tanvi Kulkarni", phone: "9887766554", imgUrl: "https://images.pexels.com/photos/2748239/pexels-photo-2748239.jpeg" }
  ])

  return (
    <div>
      <TitleGrp />
      <MainContent conInfo={contacts} />
      <Module fn={setContacts} contacts={contacts} />
    </div>
  )
}

export default App