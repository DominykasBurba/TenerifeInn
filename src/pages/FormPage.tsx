import { useState, useEffect, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header.tsx';
import '../styles/form-page.css';

const STORAGE_KEY = 'travelers_registration_form_data';

interface TravelerData {
  firstName: string;
  firstSurname: string;
  secondSurname: string;
  gender: 'male' | 'female' | '';
  passportId: string;
  nationality: string;
  dateOfBirth: string;
  addressLine1: string;
  countryOfResidence: string;
  mobilePhone: string;
  email: string;
}

export default function FormPage() {
  // Load saved data from localStorage on component mount
  const loadSavedData = (): TravelerData[] => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Validate that we have valid data structure
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (error) {
      console.error('Error loading saved form data:', error);
    }
    // Return default empty traveler if no saved data
    return [{
      firstName: '',
      firstSurname: '',
      secondSurname: '',
      gender: '',
      passportId: '',
      nationality: '',
      dateOfBirth: '',
      addressLine1: '',
      countryOfResidence: '',
      mobilePhone: '',
      email: ''
    }];
  };

  const [travelers, setTravelers] = useState<TravelerData[]>(loadSavedData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Save form data to localStorage whenever travelers state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(travelers));
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  }, [travelers]);

  const handleTravelerChange = (index: number, field: keyof TravelerData, value: string) => {
    setTravelers(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const addTraveler = () => {
    if (travelers.length < 8) {
      setTravelers(prev => [...prev, {
        firstName: '',
        firstSurname: '',
        secondSurname: '',
        gender: '',
        passportId: '',
        nationality: '',
        dateOfBirth: '',
        addressLine1: '',
        addressLine2: '',
        countryOfResidence: '',
        mobilePhone: '',
        email: '',
        signatureDate: ''
      }]);
    }
  };

  const removeTraveler = (index: number) => {
    if (travelers.length > 1) {
      setTravelers(prev => prev.filter((_, i) => i !== index));
    }
  };

  const formatDateInput = (value: string): string => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    // Format as DD/MM/YYYY
    if (digits.length <= 2) return digits;
    if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}`;
  };

  const handleDateChange = (index: number, value: string) => {
    const formatted = formatDateInput(value);
    handleTravelerChange(index, 'dateOfBirth', formatted);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - use environment variables or direct values
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Check if EmailJS is configured
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS not configured. Please set up your EmailJS credentials. See EMAILJS_SETUP.md for instructions.');
      }

      // Format travelers data as readable text for email
      const formattedTravelersData = travelers.map((traveler, idx) => {
        const travelerNum = idx + 1;
        return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TRAVELER ${travelerNum}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
First Name: ${traveler.firstName}
First Surname: ${traveler.firstSurname}
${traveler.secondSurname ? `Second Surname: ${traveler.secondSurname}` : ''}
Gender: ${traveler.gender === 'male' ? 'Male' : traveler.gender === 'female' ? 'Female' : 'Not specified'}
Passport/ID Number: ${traveler.passportId}
Nationality: ${traveler.nationality}
Date of Birth: ${traveler.dateOfBirth}
Address: ${traveler.addressLine1}
Country of Residence: ${traveler.countryOfResidence}
Mobile Phone: ${traveler.mobilePhone}
Email: ${traveler.email}`;
      }).join('\n\n');

      // Prepare email template parameters
      const templateParams = {
        to_email: 'iksass25@gmail.com',
        travelers_count: travelers.length.toString(),
        travelers_data: formattedTravelersData,
        submission_date: new Date().toLocaleString(),
        from_name: 'Travelers Registration Form',
        reply_to: travelers[0]?.email || 'noreply@example.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      // Clear saved data and reset form after successful submission
      setTimeout(() => {
        localStorage.removeItem(STORAGE_KEY);
        setTravelers([{
          firstName: '',
          firstSurname: '',
          secondSurname: '',
          gender: '',
          passportId: '',
          nationality: '',
          dateOfBirth: '',
          addressLine1: '',
          countryOfResidence: '',
          mobilePhone: '',
          email: ''
        }]);
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="form-page-container">
        <div className="form-page-wrapper">
          <div className="form-header">
            <h1>TRAVELERS REGISTRATION FORM</h1>
            <p className="form-subtitle">(SES-HOSPEDAJES / REAL DECREE 933/2021)</p>
          </div>

          <div className="form-notice">
            <strong>Important:</strong> This form is for adults only. Please do not include children's information.
          </div>

          <form onSubmit={handleSubmit} className="form-page-form">
            {travelers.map((traveler, travelerIndex) => (
              <div key={travelerIndex} className="traveler-section">
                {travelers.length > 1 && (
                  <div className="traveler-header">
                    <h2>Traveler {travelerIndex + 1}</h2>
                    {travelers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeTraveler(travelerIndex)}
                        className="remove-traveler-btn"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                )}

                <div className="form-section">
                  <h3>TRAVELLER INFORMATION</h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor={`firstName-${travelerIndex}`}>
                        First Name: <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id={`firstName-${travelerIndex}`}
                        value={traveler.firstName}
                        onChange={(e) => handleTravelerChange(travelerIndex, 'firstName', e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor={`firstSurname-${travelerIndex}`}>
                        First Surname: <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id={`firstSurname-${travelerIndex}`}
                        value={traveler.firstSurname}
                        onChange={(e) => handleTravelerChange(travelerIndex, 'firstSurname', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor={`secondSurname-${travelerIndex}`}>
                      Second Surname (leave blank if not applicable):
                    </label>
                    <input
                      type="text"
                      id={`secondSurname-${travelerIndex}`}
                      value={traveler.secondSurname}
                      onChange={(e) => handleTravelerChange(travelerIndex, 'secondSurname', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Gender: <span className="required">*</span>
                    </label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name={`gender-${travelerIndex}`}
                          value="male"
                          checked={traveler.gender === 'male'}
                          onChange={(e) => handleTravelerChange(travelerIndex, 'gender', e.target.value)}
                          required
                        />
                        <span>Male</span>
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name={`gender-${travelerIndex}`}
                          value="female"
                          checked={traveler.gender === 'female'}
                          onChange={(e) => handleTravelerChange(travelerIndex, 'gender', e.target.value)}
                          required
                        />
                        <span>Female</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor={`passportId-${travelerIndex}`}>
                      Passport / ID Card Number: <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id={`passportId-${travelerIndex}`}
                      value={traveler.passportId}
                      onChange={(e) => handleTravelerChange(travelerIndex, 'passportId', e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor={`nationality-${travelerIndex}`}>
                      Nationality: <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id={`nationality-${travelerIndex}`}
                      value={traveler.nationality}
                      onChange={(e) => handleTravelerChange(travelerIndex, 'nationality', e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor={`dateOfBirth-${travelerIndex}`}>
                      Date of Birth (DD/MM/YYYY): <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id={`dateOfBirth-${travelerIndex}`}
                      value={traveler.dateOfBirth}
                      onChange={(e) => handleDateChange(travelerIndex, e.target.value)}
                      placeholder="DD/MM/YYYY"
                      maxLength={10}
                      required
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h3>PERMANENT ADDRESS</h3>
                  
                  <div className="form-group">
                    <label htmlFor={`addressLine1-${travelerIndex}`}>
                      Full Address (Street, Number, City, Zip Code): <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id={`addressLine1-${travelerIndex}`}
                      value={traveler.addressLine1}
                      onChange={(e) => handleTravelerChange(travelerIndex, 'addressLine1', e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor={`countryOfResidence-${travelerIndex}`}>
                      Country of Residence: <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id={`countryOfResidence-${travelerIndex}`}
                      value={traveler.countryOfResidence}
                      onChange={(e) => handleTravelerChange(travelerIndex, 'countryOfResidence', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h3>CONTACT INFORMATION</h3>
                  
                  <div className="form-group">
                    <label htmlFor={`mobilePhone-${travelerIndex}`}>
                      Mobile Phone Number: <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id={`mobilePhone-${travelerIndex}`}
                      value={traveler.mobilePhone}
                      onChange={(e) => handleTravelerChange(travelerIndex, 'mobilePhone', e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor={`email-${travelerIndex}`}>
                      Email Address: <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id={`email-${travelerIndex}`}
                      value={traveler.email}
                      onChange={(e) => handleTravelerChange(travelerIndex, 'email', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            ))}

            {travelers.length < 8 && (
              <button
                type="button"
                onClick={addTraveler}
                className="add-traveler-btn"
              >
                + Add New Member
              </button>
            )}

            <div className="form-actions">
              <button 
                type="submit" 
                className="form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="form-message form-message-success">
                Registration submitted successfully! Your information has been sent.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-message form-message-error">
                Failed to submit registration. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
