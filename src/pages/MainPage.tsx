import '../styles/MainPage.css'
import '../styles/contact-info.css'
import '../styles/room-info.css'
import '../components/Header.tsx'
import '../styles/bedroom-grid.css'
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
import { IoClose } from "react-icons/io5";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Footer from '../components/Footer.tsx';
import { useState, useEffect } from 'react';


function App() {
  const [openCategory, setOpenCategory] = useState(0);
  const [modalOpen, setModalOpen] = useState<number | null>(null);
  const [modalPhotoIndex, setModalPhotoIndex] = useState(0);

  const toggleCategory = (index: number) => {
    if (openCategory === index) {
      setOpenCategory(-1);
    } else {
      setOpenCategory(index);
    }
  };

  const openModal = (bedroomIndex: number) => {
    setModalOpen(bedroomIndex);
    setModalPhotoIndex(0);
  };

  const closeModal = () => {
    setModalOpen(null);
    setModalPhotoIndex(0);
  };

  const nextPhoto = (_bedroomIndex: number, totalPhotos: number) => {
    setModalPhotoIndex((prev) => (prev + 1) % totalPhotos);
  };

  const prevPhoto = (_bedroomIndex: number, totalPhotos: number) => {
    setModalPhotoIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  // Define bedroom gallery data
  const bedroomGalleries = [
    {
      title: "Bedroom 1",
      description: "King-size bed",
      photos: ['/FirstBedroom/First.jpg', '/FirstBedroom/First2.jpg', '/FirstBedroom/First3.jpg', '/FirstBedroom/First4.jpg', '/FirstBedroom/First5.jpg']
    },
    {
      title: "Bedroom 2",
      description: "King-size bed",
      photos: ['/SecondBedroom/Second.jpg', '/SecondBedroom/Second2.jpg', '/SecondBedroom/Second3.jpg', '/SecondBedroom/Second4.jpg', '/SecondBedroom/Second5.jpg']
    },
    {
      title: "Bedroom 3",
      description: "King-size bed",
      photos: ['/ThirdBedroom/Third.jpg', '/ThirdBedroom/Third2.jpg', '/ThirdBedroom/Third3.jpg', '/ThirdBedroom/Third4.jpg']
    },
    {
      title: "Bedroom 4",
      description: "Small Double bed",
      photos: ['/FourthBedroom/Fourth.jpg', '/FourthBedroom/Fourth2.jpg', '/FourthBedroom/Fourth3.jpg']
    }
  ];

  // Keyboard navigation for modal and prevent body scroll
  useEffect(() => {
    if (modalOpen === null) {
      document.body.style.overflow = '';
      return;
    }

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalOpen(null);
        setModalPhotoIndex(0);
      } else if (e.key === 'ArrowRight') {
        setModalPhotoIndex((prev) => (prev + 1) % bedroomGalleries[modalOpen].photos.length);
      } else if (e.key === 'ArrowLeft') {
        setModalPhotoIndex((prev) => (prev - 1 + bedroomGalleries[modalOpen].photos.length) % bedroomGalleries[modalOpen].photos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

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

      <section className='bedroom-grid' id='bedroom-grid'>
        <div className='bedroom-grid-container'>
          <h2>Where you'll sleep</h2>
          <div className='bedroom-grid-wrapper'>
            {bedroomGalleries.map((bedroom, index) => (
              <div 
                key={index} 
                className='bedroom-grid-item'
                onClick={() => openModal(index)}
              >
                <div 
                  className='bedroom-grid-photo'
                  style={{ backgroundImage: `url(${bedroom.photos[0]})` }}
                ></div>
                <div className='bedroom-grid-info'>
                  <h3>{bedroom.title}</h3>
                  <p>{bedroom.description}</p>
            </div>
              </div>
            ))}
            </div>
          </div>
      </section>

      {modalOpen !== null && (
        <div className='bedroom-modal-overlay' onClick={closeModal}>
          <div className='bedroom-modal-content' onClick={(e) => e.stopPropagation()}>
            <button className='bedroom-modal-close' onClick={closeModal}>
              <IoClose />
            </button>
            <button 
              className='bedroom-modal-nav bedroom-modal-prev'
              onClick={() => prevPhoto(modalOpen, bedroomGalleries[modalOpen].photos.length)}
            >
              <IoChevronBack />
            </button>
            <div className='bedroom-modal-image-container'>
              <img 
                src={bedroomGalleries[modalOpen].photos[modalPhotoIndex]} 
                alt={bedroomGalleries[modalOpen].title}
                className='bedroom-modal-image'
              />
            </div>
            <button 
              className='bedroom-modal-nav bedroom-modal-next'
              onClick={() => nextPhoto(modalOpen, bedroomGalleries[modalOpen].photos.length)}
            >
              <IoChevronForward />
            </button>
            <div className='bedroom-modal-info'>
              <h3>{bedroomGalleries[modalOpen].title}</h3>
              <p>{bedroomGalleries[modalOpen].description}</p>
              <div className='bedroom-modal-thumbnails'>
                {bedroomGalleries[modalOpen].photos.map((photo, photoIndex) => (
                  <div
                    key={photoIndex}
                    className={`bedroom-modal-thumbnail ${modalPhotoIndex === photoIndex ? 'active' : ''}`}
                    onClick={() => setModalPhotoIndex(photoIndex)}
                    style={{ backgroundImage: `url(${photo})` }}
                ></div>
                ))}
              </div>
              <div className='bedroom-modal-counter'>
                {modalPhotoIndex + 1} / {bedroomGalleries[modalOpen].photos.length}
              </div>
            </div>
          </div>
        </div>
      )}

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
              <p>We want your stay at Villa Los Olivos to be effortless, relaxing, and filled with good memories. Every corner of Villa Los Olivos was designed with care by your host, Andre. We simply ask you to enjoy it with the same attention and love with which it was created.</p>
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
                  <li><LuClock2 /> Check-in: 16:00-22:00</li>
                  <li><LuClock2 /> Check-out: before 11:00</li>
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
