import '../styles/MainPage.css'
import '../styles/contact-info.css'
import '../styles/room-info.css'
import '../components/Header.tsx'
import '../styles/bedroom-grid.css'
import '../styles/gallery.css'
import '../styles/main-wrapper.css'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx';
import { useState, useEffect } from 'react';
import { GoPeople } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { LuClock2 } from "react-icons/lu";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaDumbbell, FaBook, FaBluetooth, FaSink, FaCoffee, FaPumpSoap, FaWind, FaFacebook, FaSoap, FaInstagram, FaBath, FaShower, FaTshirt, FaBed, FaWineGlass, FaUtensils, FaWifi, FaSwimmingPool, FaMountain, FaUmbrellaBeach, FaLock, FaCouch, FaWhatsapp } from 'react-icons/fa';
import { GiClothesline, GiHanger, GiWashingMachine, GiCookingPot, GiBarbecue, GiClothes } from 'react-icons/gi';
import { MdOutlineKitchen , MdOutlineBlender, MdMicrowave, MdCurtains, MdOutlineBedroomParent, MdOutlineWaterDrop, MdOutdoorGrill, MdOutlineBalcony, MdKitchen, MdOutlineEmail} from 'react-icons/md';
import { TbDeviceTv } from 'react-icons/tb';


function App() {
  const [openCategory, setOpenCategory] = useState(0);
  const [modalOpen, setModalOpen] = useState<number | null>(null);
  const [modalPhotoIndex, setModalPhotoIndex] = useState(0);
  const [galleryModalOpen, setGalleryModalOpen] = useState<number | null>(null);
  const [galleryPhotoIndex, setGalleryPhotoIndex] = useState(0);
  const [showAllGalleryPhotos, setShowAllGalleryPhotos] = useState(false);

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

  const openGalleryModal = (photoIndex: number) => {
    setGalleryModalOpen(photoIndex);
    setGalleryPhotoIndex(photoIndex);
  };

  const closeGalleryModal = () => {
    setGalleryModalOpen(null);
    setGalleryPhotoIndex(0);
  };

  const nextGalleryPhoto = (totalPhotos: number) => {
    setGalleryPhotoIndex((prev) => (prev + 1) % totalPhotos);
  };

  const prevGalleryPhoto = (totalPhotos: number) => {
    setGalleryPhotoIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  const bedroomGalleries = [
    {
      title: "Bedroom 1",
      description: "King-size bed • Balcony • Ocean view • Ensuite bathroom",
      photos: ['/FirstBedroom/First.jpg', '/FirstBedroom/First2.jpg', '/FirstBedroom/First3.jpg', '/FirstBedroom/First4.jpg', '/FirstBedroom/First5.jpg', '/FirstBedroom/First6.jpg', '/FirstBedroom/First7.jpg']
    },
    {
      title: "Bedroom 2",
      description: "King-size bed • Balcony • Ocean view • Ensuite bathroom",
      photos: ['/SecondBedroom/Second.jpg', '/SecondBedroom/Second2.jpg', '/SecondBedroom/Second3.jpg', '/SecondBedroom/Second4.jpg', '/SecondBedroom/Second5.jpg']
    },
    {
      title: "Bedroom 3",
      description: "King-size bed • Terrace • Ocean view • Ensuite bathroom • Pool",
      photos: ['/ThirdBedroom/Third.jpg', '/ThirdBedroom/Third1.jpg', '/ThirdBedroom/Third2.jpg', '/ThirdBedroom/Third3.jpg', '/ThirdBedroom/Third4.jpg', '/ThirdBedroom/Third5.jpg']
    },
    {
      title: "Bedroom 4",
      description: "Small Double bed • Terrace • Garden view • Pool",
      photos: ['/FourthBedroom/Fourth.jpg', '/FourthBedroom/Fourth2.jpg', '/FourthBedroom/Fourth3.jpg', '/FourthBedroom/Fourth4.jpg', '/FourthBedroom/Fourth5.jpg', '/FourthBedroom/Fourth6.jpg']
    }
  ];

  const galleryPhotos = [
    '/Gallery/IMG_2772-HDR copy (1).jpg',
    '/Gallery/IMG_2774-HDR copy 2.jpg',
    '/Gallery/IMG_2776-HDR copy 2 (1).jpg',
    '/Gallery/IMG_2778-HDR copy.jpg',
    '/Gallery/IMG_2783-HDR copy.jpg',
    '/Gallery/IMG_2785-HDR copy.jpg',
    '/Gallery/IMG_2790-HDR copy.jpg',
    '/Gallery/IMG_2823 copy.jpg',
    '/Gallery/IMG_2824 copy.jpg',
    '/Gallery/IMG_2854-HDR copy.jpg',
    '/Gallery/IMG_2919-HDR copy.jpg',
    '/Gallery/IMG_2929-HDR copy.jpg',
    '/Gallery/IMG_2931-HDR copy.jpg',
    '/Gallery/IMG_2939-HDR copy (1).jpg',
    '/Gallery/IMG_2943-HDR copy (1).jpg',
    '/Gallery/IMG_2952-HDR copy.jpg',
    '/Gallery/IMG_2955-HDR copy.jpg',
    '/Gallery/IMG_2966-HDR copy.jpg',
    '/Gallery/IMG_2970-HDR copy.jpg',
    '/Gallery/IMG_2973-HDR copy.jpg',
    '/Gallery/IMG_2984 copy.jpg',
    '/Gallery/Gym1.jpg',
    '/Gallery/Gym2.jpg',
    // Bedroom 1 photos
    '/FirstBedroom/First.jpg',
    '/FirstBedroom/First2.jpg',
    '/FirstBedroom/First3.jpg',
    '/FirstBedroom/First4.jpg',
    '/FirstBedroom/First5.jpg',
    '/FirstBedroom/First6.jpg',
    '/FirstBedroom/First7.jpg',
    // Bedroom 2 photos
    '/SecondBedroom/Second.jpg',
    '/SecondBedroom/Second2.jpg',
    '/SecondBedroom/Second3.jpg',
    '/SecondBedroom/Second4.jpg',
    '/SecondBedroom/Second5.jpg',
    // Bedroom 3 photos
    '/ThirdBedroom/Third.jpg',
    '/ThirdBedroom/Third1.jpg',
    '/ThirdBedroom/Third2.jpg',
    '/ThirdBedroom/Third3.jpg',
    '/ThirdBedroom/Third4.jpg',
    '/ThirdBedroom/Third5.jpg',
    // Bedroom 4 photos
    '/FourthBedroom/Fourth.jpg',
    '/FourthBedroom/Fourth2.jpg',
    '/FourthBedroom/Fourth3.jpg',
    '/FourthBedroom/Fourth4.jpg',
    '/FourthBedroom/Fourth5.jpg',
    '/FourthBedroom/Fourth6.jpg'
  ];

  useEffect(() => {
    if (modalOpen === null && galleryModalOpen === null) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (modalOpen !== null) {
          setModalOpen(null);
          setModalPhotoIndex(0);
        }
        if (galleryModalOpen !== null) {
          setGalleryModalOpen(null);
          setGalleryPhotoIndex(0);
        }
      } else if (e.key === 'ArrowRight') {
        if (modalOpen !== null) {
          setModalPhotoIndex((prev) => (prev + 1) % bedroomGalleries[modalOpen].photos.length);
        } else if (galleryModalOpen !== null) {
          setGalleryPhotoIndex((prev) => (prev + 1) % galleryPhotos.length);
        }
      } else if (e.key === 'ArrowLeft') {
        if (modalOpen !== null) {
          setModalPhotoIndex((prev) => (prev - 1 + bedroomGalleries[modalOpen].photos.length) % bedroomGalleries[modalOpen].photos.length);
        } else if (galleryModalOpen !== null) {
          setGalleryPhotoIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [modalOpen, galleryModalOpen]);

  return (
    <>
    <Header />
    <div className='main-page-wrapper'>
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
          <h3>About Villa Los Olivos</h3>
          <h2>Welcome to Villa Los OLivos</h2>

          <div className='main-wrapper'>
            <div className='main-info-photo'></div>
            <div className='main-info-text'>
              <div className='main-info-text-header'>
                <h1>About</h1>
                <p>Villa Los Olivos is a brand-new luxury villa located in the authentic town of Adeje - a quiet area where time flows slower and the true spirit of Tenerife can be felt. Here you will discover cozy family-run restaurants offering local wines and traditional dishes, a charming old town with a church, and scenic ravines perfect for nature walks.</p>
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
                <div className='bedroom-grid-hover-overlay'>
                  <span>View more</span>
                </div>
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
                    <li><FaBath /> Bathtub</li>
                    <li><FaWind /> Hair dryer</li>
                    <li><FaSoap /> Body soap</li>
                    <li><FaShower /> Outdoor shower</li>
                    <li><FaShower /> Hot water</li>
                    <li><FaPumpSoap /> Shower gel</li>
                    <li><GiHanger /> Towels & essentials</li>
                    <li><FaLock /> Private entrance bathroom access</li>
                  </ul>
                </div>

                <div className='feature-category'>
                  <div className='category-header' onClick={() => toggleCategory(1)}>
                    <h4>Bedroom & Laundry</h4>
                    <span className={`expand-arrow ${openCategory === 1 ? 'expanded' : ''}`}>▼</span>
                  </div>
                  <ul className={`feature-list ${openCategory === 1 ? '' : 'collapsed'}`}>
                    <li><GiWashingMachine /> Washer & dryer</li>
                    <li><FaBed /> Bed linens</li>
                    <li><FaBed /> Extra pillows & blankets</li>
                    <li><MdCurtains /> Room-darkening shades</li>
                    <li><FaTshirt /> Iron & ironing equipment</li>
                    <li><FaLock /> Safe</li>
                    <li><GiClothes /> Clothing storage</li>
                    <li><GiClothesline /> Drying rack</li>
                  </ul>
                </div>

                <div className='feature-category'>
                  <div className='category-header' onClick={() => toggleCategory(2)}>
                    <h4>Kitchen & Dining</h4>
                    <span className={`expand-arrow ${openCategory === 2 ? 'expanded' : ''}`}>▼</span>
                  </div>
                  <ul className={`feature-list ${openCategory === 2 ? '' : 'collapsed'}`}>
                    <li><MdKitchen /> Full kitchen</li>
                    <li><MdOutlineKitchen /> Refrigerator & freezer</li>
                    <li><MdMicrowave /> Microwave</li>
                    <li><GiCookingPot /> Induction stove & oven</li>
                    <li><FaCoffee /> Coffee maker</li>
                    <li><FaSink /> Dishwasher</li>
                    <li><GiCookingPot /> Cooking basics (pots, pans, spices)</li>
                    <li><FaWineGlass /> Wine glasses</li>
                    <li><MdOutlineBlender /> Toaster & blender</li>
                    <li><MdOutdoorGrill /> Outdoor kitchen & BBQ grill</li>
                  </ul>
                </div>

                <div className='feature-category'>
                  <div className='category-header' onClick={() => toggleCategory(3)}>
                    <h4>Entertainment</h4>
                    <span className={`expand-arrow ${openCategory === 3 ? 'expanded' : ''}`}>▼</span>
                  </div>
                  <ul className={`feature-list ${openCategory === 3 ? '' : 'collapsed'}`}>
                    <li><TbDeviceTv /> 83\" HDTV</li>
                    <li><FaBluetooth /> Bluetooth sound system</li>
                    <li><FaBook /> Books & reading material</li>
                    <li><FaDumbbell /> Exercise equipment</li>
                    <li><FaDumbbell /> Private gym</li>
                    <li><FaWifi /> High-speed WiFi</li>
                  </ul>
                </div>

                <div className='feature-category'>
                  <div className='category-header' onClick={() => toggleCategory(4)}>
                    <h4>Outdoor & Views</h4>
                    <span className={`expand-arrow ${openCategory === 4 ? 'expanded' : ''}`}>▼</span>
                  </div>
                  <ul className={`feature-list ${openCategory === 4 ? '' : 'collapsed'}`}>
                    <li><FaSwimmingPool /> Private heated pool</li>
                    <li><FaMountain /> Mountain views</li>
                    <li><FaUmbrellaBeach /> Ocean view</li>
                    <li><FaUtensils /> Outdoor dining area</li>
                    <li><MdOutlineBalcony /> Private patio and balcony</li>
                    <li><FaCouch /> Outdoor furniture</li>
                    <li><GiBarbecue /> BBQ area</li>
                    <li><FaUmbrellaBeach /> Sun loungers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='gallery' id='gallery'>
        <div className='gallery-container'>
          <h2>Gallery</h2>
          <div className='gallery-grid'>
            {(showAllGalleryPhotos ? galleryPhotos : galleryPhotos.slice(0, 10)).map((photo, index) => {
              const actualIndex = showAllGalleryPhotos ? index : index;
              return (
                <div
                  key={actualIndex}
                  className='gallery-item'
                  onClick={() => openGalleryModal(actualIndex)}
                >
                  <img src={photo} alt={`Gallery photo ${actualIndex + 1}`} />
                  <div className='gallery-item-overlay'>
                    <span>View</span>
                  </div>
                </div>
              );
            })}
          </div>
          {!showAllGalleryPhotos && galleryPhotos.length > 10 && (
            <div className='gallery-see-more-container'>
              <button className='gallery-see-more-btn' onClick={() => setShowAllGalleryPhotos(true)}>
                See more
              </button>
            </div>
          )}
        </div>
      </section>

      {galleryModalOpen !== null && (
        <div className='gallery-modal-overlay' onClick={closeGalleryModal}>
          <div className='gallery-modal-content' onClick={(e) => e.stopPropagation()}>
            <button className='gallery-modal-close' onClick={closeGalleryModal}>
              <IoClose />
            </button>
            <button 
              className='gallery-modal-nav gallery-modal-prev'
              onClick={() => prevGalleryPhoto(galleryPhotos.length)}
            >
              <IoChevronBack />
            </button>
            <div className='gallery-modal-image-container'>
              <img 
                src={galleryPhotos[galleryPhotoIndex]} 
                alt={`Gallery photo ${galleryPhotoIndex + 1}`}
                className='gallery-modal-image'
              />
            </div>
            <button 
              className='gallery-modal-nav gallery-modal-next'
              onClick={() => nextGalleryPhoto(galleryPhotos.length)}
            >
              <IoChevronForward />
            </button>
            <div className='gallery-modal-info'>
              <div className='gallery-modal-counter'>
                {galleryPhotoIndex + 1} / {galleryPhotos.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <section className='contact-info' id='contact-info'>
        <div className='contact-info-container'>
          <div className='info-wrapper'>
            <div className='basic-info'>
              <h1>Villa Los OLivos</h1>
              <p>We want your stay at Villa Los Olivos to be effortless, relaxing, and filled with good memories. Every corner of Villa Los Olivos was designed with care by your host, Andre. We simply ask you to enjoy it with the same attention and love with which it was created.</p>
            </div>
            <div className='mini-contact-info'>
              <h1>Our contact</h1>
              <ul className="amenities-new">
                  <li><FiPhone /> +34613477355</li>
                  <li><MdOutlineEmail /> tenerifeinn77@gmail.com</li>
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
            <div className='details-info-first'><p>2025 • Villa Los OLivos</p></div>
            <div className='details-info-second'><p>English (US)</p></div>
            <div className='details-info-third'>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/tenerifeinn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/tenerifeinn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/34613477355"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
      <Footer />
    </>
  )
}

export default App
