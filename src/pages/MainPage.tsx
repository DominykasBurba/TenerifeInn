import '../styles/MainPage.css'
import '../styles/contact-info.css'
import '../styles/room-info.css'
import '../components/Header.tsx'
import '../styles/bedroom-grid.css'
import '../styles/gallery.css'
import '../styles/reviews.css'
import '../styles/main-wrapper.css'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx';
import { useState, useEffect, useRef, useLayoutEffect, type TransitionEvent } from 'react';
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
  const [galleryPreviewLimit, setGalleryPreviewLimit] = useState(10);
  const reviewsInnerRef = useRef<HTMLDivElement | null>(null);
  const reviewsCardIndexRef = useRef(0);
  const pauseReviewsAutoSlideRef = useRef(false);
  const [reviewsStepPx, setReviewsStepPx] = useState(0);
  const [reviewsCardIndex, setReviewsCardIndex] = useState(0);
  const [reviewsTransition, setReviewsTransition] = useState(true);

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
    '/Gallery/IMG_2783-HDR copy.jpg',
    '/Gallery/NewTerrasa.jpg',
    '/Gallery/NewTerrasa2.jpg',
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

  const reviews = [
    {
      name: 'Daniel',
      date: '3 weeks ago',
      source: 'Airbnb',
      text: "Great 5-night stay. The photos do not do this property justice. Everything feels brand new and finished to a very high standard, and the heated pool was perfect for relaxing even in cooler weather."
    },
    {
      name: 'Maciej',
      date: 'March 2026',
      source: 'Airbnb',
      text: 'The villa looked even better than in the photos, in a quiet area with mountain and ocean views. It was fully equipped with everything we needed, from kitchen essentials to bathroom amenities.'
    },
    {
      name: 'Karina',
      date: 'March 2026',
      source: 'Airbnb',
      text: 'The villa is beautiful and clearly prepared with care. We loved the gym, the barbecue area, and how responsive and helpful the host was throughout our stay.'
    },
    {
      name: 'Ana',
      date: 'February 2026',
      source: 'Airbnb',
      text: 'An incredible stay in a stunning new villa in Adeje. With four comfortable bedrooms and a fully equipped kitchen, it was ideal for our group. The patio and private pool were highlights.'
    },
    {
      name: 'Kirsty',
      date: 'February 2026',
      source: 'Airbnb',
      text: 'The villa exceeded expectations. Luxury finishes and thoughtful details made our stay genuinely special. A perfect setting for celebrating important family occasions.'
    },
    {
      name: 'Craig',
      date: 'January 2026',
      source: 'Airbnb',
      text: 'We returned after a week here and the property was spotless and finished to a high standard. The garden and heated pool were amazing. We will definitely return.'
    },
    {
      name: 'Ariyan',
      date: 'December 2025',
      source: 'Airbnb',
      text: 'Incredibly cozy and lovely villa. The host team was very kind and helpful, and the villa had everything we needed for a comfortable and memorable holiday.'
    },
    {
      name: 'Andrius',
      date: 'November 2025',
      source: 'Airbnb',
      text: 'A truly exceptional stay in a brand-new luxury villa. We loved the large terrace, crystal-clear heated pool, modern gym, and excellent location near Adeje Old Town.'
    },
    {
      name: 'Chris',
      date: '2 days ago',
      source: 'Airbnb',
      text: 'My family and I had an amazing 5-day holiday. The villa was incredible—better than the pictures. The pool was a highlight, especially for the kids, who loved it and spent hours in it every day. The hosts were kind and welcoming, making us feel relaxed from the moment we arrived.'
    }
  ];

  const loopedReviews = [...reviews, ...reviews, ...reviews];
  const reviewCount = reviews.length;

  const measureReviewsStep = () => {
    const inner = reviewsInnerRef.current;
    if (!inner) return 0;
    const card = inner.querySelector('.review-card') as HTMLElement | null;
    if (!card) return 0;
    const innerStyles = window.getComputedStyle(inner);
    const gap = Number.parseFloat(innerStyles.columnGap || innerStyles.gap || '0');
    return card.offsetWidth + gap;
  };

  const syncReviewsCardIndex = (next: number) => {
    reviewsCardIndexRef.current = next;
    setReviewsCardIndex(next);
  };

  useLayoutEffect(() => {
    if (reviewCount === 0) return;
    const step = measureReviewsStep();
    if (step <= 0) return;
    setReviewsStepPx(step);
    syncReviewsCardIndex(reviewCount);
  }, [reviewCount]);

  useEffect(() => {
    const inner = reviewsInnerRef.current;
    if (!inner) return;

    const handleResize = () => {
      const step = measureReviewsStep();
      if (step <= 0) return;
      setReviewsStepPx(step);
      setReviewsTransition(false);
      syncReviewsCardIndex(reviewCount);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setReviewsTransition(true));
      });
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(inner);
    window.addEventListener('resize', handleResize);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [reviewCount]);

  const slideReviews = (direction: 'left' | 'right') => {
    if (reviewCount === 0 || reviewsStepPx <= 0) return;
    setReviewsTransition(true);
    const delta = direction === 'right' ? 1 : -1;
    syncReviewsCardIndex(reviewsCardIndexRef.current + delta);
  };

  const handleReviewsTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== 'transform') return;
    if (reviewCount === 0) return;

    let next = reviewsCardIndexRef.current;
    let changed = false;
    while (next >= 2 * reviewCount) {
      next -= reviewCount;
      changed = true;
    }
    while (next < reviewCount) {
      next += reviewCount;
      changed = true;
    }

    if (changed) {
      setReviewsTransition(false);
      syncReviewsCardIndex(next);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setReviewsTransition(true));
      });
    }
  };

  useEffect(() => {
    if (reviewCount === 0 || reviewsStepPx <= 0) return;

    const intervalId = window.setInterval(() => {
      if (pauseReviewsAutoSlideRef.current) return;
      setReviewsTransition(true);
      syncReviewsCardIndex(reviewsCardIndexRef.current + 1);
    }, 7000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [reviewCount, reviewsStepPx]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const syncGalleryPreviewLimit = () => {
      setGalleryPreviewLimit(mq.matches ? 6 : 10);
    };
    syncGalleryPreviewLimit();
    mq.addEventListener('change', syncGalleryPreviewLimit);
    return () => mq.removeEventListener('change', syncGalleryPreviewLimit);
  }, []);

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
            <div className='bedroom-modal-image-container'>
              <button
                type='button'
                className='bedroom-modal-nav bedroom-modal-prev'
                onClick={() => prevPhoto(modalOpen, bedroomGalleries[modalOpen].photos.length)}
                aria-label='Previous photo'
              >
                <IoChevronBack />
              </button>
              <img 
                src={bedroomGalleries[modalOpen].photos[modalPhotoIndex]} 
                alt={bedroomGalleries[modalOpen].title}
                className='bedroom-modal-image'
              />
              <button
                type='button'
                className='bedroom-modal-nav bedroom-modal-next'
                onClick={() => nextPhoto(modalOpen, bedroomGalleries[modalOpen].photos.length)}
                aria-label='Next photo'
              >
                <IoChevronForward />
              </button>
            </div>
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

      <section className='reviews' id='reviews'>
        <div className='reviews-container'>
          <div className='reviews-heading'>
            <h2>What Our Guests Say</h2>
          </div>
          <div className='reviews-slider-wrapper'>
            <button
              className='reviews-nav-btn'
              aria-label='Show previous reviews'
              onClick={() => slideReviews('left')}
              onMouseEnter={() => {
                pauseReviewsAutoSlideRef.current = true;
              }}
              onMouseLeave={() => {
                pauseReviewsAutoSlideRef.current = false;
              }}
              type='button'
            >
              <IoChevronBack />
            </button>
            <div className='reviews-slider-viewport' aria-label='Guest reviews slider'>
              <div
                ref={reviewsInnerRef}
                className='reviews-slider-track'
                onTransitionEnd={handleReviewsTransitionEnd}
                style={{
                  transform: `translate3d(${-reviewsCardIndex * reviewsStepPx}px, 0, 0)`,
                  transition: reviewsTransition
                    ? 'transform 0.55s cubic-bezier(0.33, 1, 0.68, 1)'
                    : 'none'
                }}
              >
                {loopedReviews.map((review, index) => (
                  <article className='review-card' key={`${review.name}-${index}`}>
                    <div className='review-card-header'>
                      <div className='review-avatar'>{review.name.charAt(0)}</div>
                      <div className='review-author'>
                        <div className='review-author-top-line'>
                          <h4>{review.name}</h4>
                          <p className='review-stars' aria-label='5 out of 5 stars'>★★★★★</p>
                        </div>
                        <p>{review.date} · {review.source}</p>
                      </div>
                    </div>
                    <p className='review-text'>{review.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <button
              className='reviews-nav-btn'
              aria-label='Show next reviews'
              onClick={() => slideReviews('right')}
              onMouseEnter={() => {
                pauseReviewsAutoSlideRef.current = true;
              }}
              onMouseLeave={() => {
                pauseReviewsAutoSlideRef.current = false;
              }}
              type='button'
            >
              <IoChevronForward />
            </button>
          </div>
        </div>
      </section>

      <section className='gallery' id='gallery'>
        <div className='gallery-container'>
          <h2>Gallery</h2>
          <div className='gallery-grid'>
            {(showAllGalleryPhotos ? galleryPhotos : galleryPhotos.slice(0, galleryPreviewLimit)).map((photo, index) => {
              const actualIndex = index;
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
          {!showAllGalleryPhotos && galleryPhotos.length > galleryPreviewLimit && (
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
