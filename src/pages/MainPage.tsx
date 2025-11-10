import '../styles/MainPage.css'
import '../styles/contact-info.css'
import '../styles/room-info.css'
import '../components/Header.tsx'
import '../styles/bedroom.css'
import Header from '../components/Header.tsx'
import { GoPeople } from "react-icons/go";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { LuClock2 } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiLeak } from "react-icons/gi";
import { BiRestaurant } from "react-icons/bi";
import { BsDisplay } from "react-icons/bs";
import { GiBathtub } from "react-icons/gi";
import { GiWaves } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { GiSun } from "react-icons/gi";
import { BiTv } from "react-icons/bi";
import { GiCookingPot } from "react-icons/gi";
import { GiKing } from "react-icons/gi";
import { GiCampingTent } from "react-icons/gi";
import Footer from '../components/Footer.tsx';
import { useState } from 'react';


function App() {
  const [openCategory, setOpenCategory] = useState(0);
  const [activePhotos, setActivePhotos] = useState({
    bedroom1: 0,
    bedroom2: 0,
    bedroom3: 0,
    bedroom4: 0
  });

  const toggleCategory = (index: number) => {
    if (openCategory === index) {
      setOpenCategory(-1);
    } else {
      setOpenCategory(index);
    }
  };

  const switchPhoto = (bedroom: string, photoIndex: number) => {
    setActivePhotos(prev => ({
      ...prev,
      [bedroom]: photoIndex
    }));
  };

  return (
    <>
    <Header />
      <div className='photo-info'>
        <div className='photo-info-container'>
          <div className='main-photo'></div>
          <div className='photo-wrapper'>
            <div className='photo'></div>
            <div className='photo2'></div>
          </div>
        </div>
      </div>
      <section className='main-info' id='main-info'>
        <div className='main-info-container'>
          <h3>About Los Olivos Villa</h3>
          <h2>Welcome to Los OLivos Villa</h2>

          <div className='main-wrapper'>
            <div className='main-info-photo'></div>
            <div className='main-info-text'>
              <div className='main-info-text-header'>
                <h1>About</h1>
                <p>Villa Los Olivos is a brand-new luxury villa located in the authentic town of Adeje – a quiet area where time flows slower and the true spirit of Tenerife can be felt. Here you will discover cozy family-run restaurants offering local wines and traditional dishes, a charming old town with a church, and scenic ravines perfect for nature walks.</p>
              </div>
              <div className='main-info-text-icons'>
                <h1>Capacity</h1>
                <ul className="amenities">
                  <li><GoPeople /> 3-8 guest</li>
                  <li><MdOutlineBedroomParent /> 4 bedrooms</li>
                  <li><MdOutlineWaterDrop /> 4 bathrooms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bedroom-showcase' id='bedroom-showcase'>
        <div className='bedroom-showcase-container'>
          <h2>Our Bedrooms</h2>
          
          <div className='bedroom-item'>
            <div className='bedroom-gallery'>
              <div className={`bedroom-main-image ${activePhotos.bedroom1 === 0 ? 'bedroom-photo-1' : activePhotos.bedroom1 === 1 ? 'bedroom-photo-2' : 'bedroom-photo-3'}`}></div>
              <div className='bedroom-thumbnails'>
                <div 
                  className={`bedroom-thumbnail bedroom-photo-1 ${activePhotos.bedroom1 === 0 ? 'active' : ''}`}
                  onClick={() => switchPhoto('bedroom1', 0)}
                ></div>
                <div 
                  className={`bedroom-thumbnail bedroom-photo-2 ${activePhotos.bedroom1 === 1 ? 'active' : ''}`}
                  onClick={() => switchPhoto('bedroom1', 1)}
                ></div>
                <div 
                  className={`bedroom-thumbnail bedroom-photo-3 ${activePhotos.bedroom1 === 2 ? 'active' : ''}`}
                  onClick={() => switchPhoto('bedroom1', 2)}
                ></div>
              </div>
            </div>
            <div className='bedroom-content'>
              <h3>Master Bedroom</h3>
              <p>Experience luxury in our spacious master bedroom with stunning lake views, a private balcony, and an en-suite bathroom. Features a king-size bed and elegant furnishings.</p>
              <div className='bedroom-features'>
                <span className='bedroom-feature'>King Size Bed</span>
                <span className='bedroom-feature'>Lake View</span>
                <span className='bedroom-feature'>Private Balcony</span>
                <span className='bedroom-feature'>En-suite Bathroom</span>
              </div>
            </div>
          </div>

          <div className='bedroom-item'>
            <div className='bedroom-gallery'>
              <div className={`bedroom-main-image ${activePhotos.bedroom2 === 0 ? 'bedroom-photo-4' : activePhotos.bedroom2 === 1 ? 'bedroom-photo-5' : 'bedroom-photo-6'}`}></div>
              <div className='bedroom-thumbnails'>
                <div 
                  className={`bedroom-thumbnail bedroom-photo-4 ${activePhotos.bedroom2 === 0 ? 'active' : ''}`}
                  onClick={() => switchPhoto('bedroom2', 0)}
                ></div>
                <div 
                  className={`bedroom-thumbnail bedroom-photo-5 ${activePhotos.bedroom2 === 1 ? 'active' : ''}`}
                  onClick={() => switchPhoto('bedroom2', 1)}
                ></div>
                <div 
                  className={`bedroom-thumbnail bedroom-photo-6 ${activePhotos.bedroom2 === 2 ? 'active' : ''}`}
                  onClick={() => switchPhoto('bedroom2', 2)}
                ></div>
              </div>
            </div>
            <div className='bedroom-content'>
              <h3>Guest Bedroom</h3>
              <p>Relax in our cozy guest bedroom featuring comfortable furnishings, a serene ambiance, and easy access to the villa's amenities. Perfect for couples or families.</p>
              <div className='bedroom-features'>
                <span className='bedroom-feature'>Queen Size Bed</span>
                <span className='bedroom-feature'>Garden View</span>
                <span className='bedroom-feature'>Modern Amenities</span>
                <span className='bedroom-feature'>Family Friendly</span>
              </div>
            </div>
          </div>

          <div className='bedroom-item'>
            <div className='bedroom-gallery'>
              <div className={`bedroom-main-image ${activePhotos.bedroom3 === 0 ? 'bedroom-photo-7' : activePhotos.bedroom3 === 1 ? 'bedroom-photo-8' : 'bedroom-photo-9'}`}></div>
              <div className='bedroom-thumbnails'>
                <div 
                  className={`bedroom-thumbnail bedroom-photo-7 ${activePhotos.bedroom3 === 0 ? 'active' : ''}`}
                  onClick={() => switchPhoto('bedroom3', 0)}
                ></div>
                <div 
                  className={`bedroom-thumbnail bedroom-photo-8 ${activePhotos.bedroom3 === 1 ? 'active' : ''}`}
                  onClick={() => switchPhoto('bedroom3', 1)}
                ></div>
                <div 
                  className={`bedroom-thumbnail bedroom-photo-9 ${activePhotos.bedroom3 === 2 ? 'active' : ''}`}
                  onClick={() => switchPhoto('bedroom3', 2)}
                ></div>
              </div>
            </div>
            <div className='bedroom-content'>
              <h3>Family Bedroom</h3>
              <p>Ideal for families with children, this bedroom offers twin beds and plenty of space for relaxation. Features beautiful garden views and modern amenities.</p>
              <div className='bedroom-features'>
                <span className='bedroom-feature'>Twin Beds</span>
                <span className='bedroom-feature'>Spacious</span>
                <span className='bedroom-feature'>Child Safe</span>
                <span className='bedroom-feature'>Garden View</span>
              </div>
            </div>
          </div>

          <div className='bedroom-item'>
            <div className='bedroom-gallery'>
              <div className={`bedroom-main-image ${activePhotos.bedroom4 === 0 ? 'bedroom-photo-10' : activePhotos.bedroom4 === 1 ? 'bedroom-photo-11' : 'bedroom-photo-12'}`}></div>
              <div className='bedroom-thumbnails'>
                <div 
                  className={`bedroom-thumbnail bedroom-photo-10 ${activePhotos.bedroom4 === 0 ? 'active' : ''}`}
                  onClick={() => switchPhoto('bedroom4', 0)}
                ></div>
                <div 
                  className={`bedroom-thumbnail bedroom-photo-11 ${activePhotos.bedroom4 === 1 ? 'active' : ''}`}
                  onClick={() => switchPhoto('bedroom4', 1)}
                ></div>
                <div 
                  className={`bedroom-thumbnail bedroom-photo-12 ${activePhotos.bedroom4 === 2 ? 'active' : ''}`}
                  onClick={() => switchPhoto('bedroom4', 2)}
                ></div>
              </div>
            </div>
            <div className='bedroom-content'>
              <h3>Deluxe Suite</h3>
              <p>Our premium suite offers the ultimate in comfort and style. Features a queen-size bed, private sitting area, and panoramic views of the surrounding landscape.</p>
              <div className='bedroom-features'>
                <span className='bedroom-feature'>Queen Size Bed</span>
                <span className='bedroom-feature'>Sitting Area</span>
                <span className='bedroom-feature'>Panoramic Views</span>
                <span className='bedroom-feature'>Premium Amenities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='room-info' id='room-info'>
        <div className='room-info-container'>
          <div className='room-info-wrapper'>

            <div className='room-info-photo'> </div>
            <div className='room-info-text'>
              <div className='room-features'>
                <h3>The Main Rooms</h3>
                <h2>All room features</h2>
                
                <div className='feature-category'>
                  <div className='category-header' onClick={() => toggleCategory(0)}>
                    <h4>Bath & Personal Care</h4>
                    <span className={`expand-arrow ${openCategory === 0 ? 'expanded' : ''}`}>▼</span>
                  </div>
                  <ul className={`feature-list ${openCategory === 0 ? '' : 'collapsed'}`}>
                    <li><GiLeak /> Garden view</li>
                    <li><BiRestaurant /> Kitchen</li>
                    <li><BsDisplay /> Dedicated workspace</li>
                    <li><GiBathtub /> Private hot tub</li>
                    <li><GiWaves /> Lake view</li>
                    <li><FaWifi /> Wifi</li>
                    <li><FaCar /> Free parking on premises</li>
                    <li><GiSun /> Private sauna</li>
                    <li><GiBathtub /> Hair dryer</li>
                    <li><GiLeak /> Shampoo & conditioner</li>
                  </ul>
                </div>

                <div className='feature-category'>
                  <div className='category-header' onClick={() => toggleCategory(1)}>
                    <h4>Media & Entertainment</h4>
                    <span className={`expand-arrow ${openCategory === 1 ? 'expanded' : ''}`}>▼</span>
                  </div>
                  <ul className={`feature-list ${openCategory === 1 ? '' : 'collapsed'}`}>
                    <li><BiTv /> Smart TV</li>
                    <li><FaWifi /> Netflix & streaming</li>
                    <li><BiTv /> Bluetooth speakers</li>
                    <li><FaWifi /> High-speed internet</li>
                    <li><BiTv /> Gaming console</li>
                    <li><FaWifi /> Mobile hotspot</li>
                  </ul>
                </div>

                <div className='feature-category'>
                  <div className='category-header' onClick={() => toggleCategory(2)}>
                    <h4>Kitchen & Dining</h4>
                    <span className={`expand-arrow ${openCategory === 2 ? 'expanded' : ''}`}>▼</span>
                  </div>
                  <ul className={`feature-list ${openCategory === 2 ? '' : 'collapsed'}`}>
                    <li><GiCookingPot /> Full kitchen</li>
                    <li><BiRestaurant /> Dining area</li>
                    <li><GiCookingPot /> Coffee maker</li>
                    <li><BiRestaurant /> Wine glasses</li>
                    <li><GiCookingPot /> Microwave</li>
                    <li><BiRestaurant /> Outdoor grill</li>
                    <li><GiCookingPot /> Dishwasher</li>
                    <li><BiRestaurant /> High chairs</li>
                  </ul>
                </div>

                <div className='feature-category'>
                  <div className='category-header' onClick={() => toggleCategory(3)}>
                    <h4>Parking & Services</h4>
                    <span className={`expand-arrow ${openCategory === 3 ? 'expanded' : ''}`}>▼</span>
                  </div>
                  <ul className={`feature-list ${openCategory === 3 ? '' : 'collapsed'}`}>
                    <li><FaCar /> Free parking</li>
                    <li><GiKing /> 24/7 support</li>
                    <li><FaCar /> EV charging</li>
                    <li><GiKing /> Concierge service</li>
                    <li><FaCar /> Secure garage</li>
                    <li><GiKing /> Housekeeping</li>
                    <li><FaCar /> Airport shuttle</li>
                    <li><GiKing /> Tour booking</li>
                  </ul>
                </div>

                <div className='feature-category'>
                  <div className='category-header' onClick={() => toggleCategory(4)}>
                    <h4>Outdoor & Recreation</h4>
                    <span className={`expand-arrow ${openCategory === 4 ? 'expanded' : ''}`}>▼</span>
                  </div>
                  <ul className={`feature-list ${openCategory === 4 ? '' : 'collapsed'}`}>
                    <li><GiCampingTent /> Private garden</li>
                    <li><GiWaves /> Lake access</li>
                    <li><GiCampingTent /> BBQ area</li>
                    <li><GiWaves /> Fishing dock</li>
                    <li><GiCampingTent /> Hiking trails</li>
                    <li><GiWaves /> Boat rental</li>
                    <li><GiCampingTent /> Fire pit</li>
                    <li><GiWaves /> Swimming area</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='contact-info' id='contact-info'>
        <div className='contact-info-container'>
          <div className='info-wrapper'>
            <div className='basic-info'>
              <h1>Los OLivos Villa</h1>
              <p>Los QLivos Villa is nestled in the forest and is bright, spacious, and has a warm atmosphere. The large windows offer breathtaking lake views from every point of the villa.</p>
            </div>
            <div className='mini-contact-info'>
              <h1>Our contact</h1>
              <ul className="amenities-new">
                  <li><FiPhone /> +37060017933</li>
                  <li><MdOutlineEmail /> iksass25@gmail.com</li>
              </ul>
            </div>
            <div className='mini-rules-info'>
              <h1>House rules</h1>
              <ul className="amenities-new">
                  <li><LuClock2 /> Check-in: 3:00 PM</li>
                  <li><LuClock2 /> Check-out: 11:00 AM</li>
              </ul>
            </div>
          </div>
          <div className='details-info'> 
            <div className='details-info-first'><p>2025 • Los OLivos Villa</p></div>
            <div className='details-info-second'><p>English (US)</p></div>
            <div className='details-info-third'>
              <ul>
                <li>
                  <a 
                    href="https://facebook.com/burbadominykas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/dominykas_burba/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
