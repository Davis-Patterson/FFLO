import { useContext, useState, useEffect } from 'react';
import { AppContext } from 'Contexts/AppContext';
import emailjs from '@emailjs/browser';
import LinearProgress from '@mui/material/LinearProgress';
import 'Styles/Main/Email.css';

function Email() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const { authUser, language } = context;

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messageButtonActive, setMessageButtonActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // translations
  const firstNamePlaceholder = language === 'EN' ? 'First Name*' : 'Prénom*';
  const lastNamePlaceholder =
    language === 'EN' ? 'Last Name' : 'Nom de Famille';
  const emailPlaceholder = language === 'EN' ? 'Email' : 'Courriel';
  const messagePlaceholder = language === 'EN' ? 'Message*' : 'Message*';
  const requiredText = language === 'EN' ? '*required' : '*obligatoire';
  const messageButtonText =
    language === 'EN' ? 'Send Message' : 'Envoyer un message';

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setIsLoading(true);

    const templateParams = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      message: form.message,
    };

    const sendEmail = emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_USER_ID
    );

    Promise.all([sendEmail])
      .then((results) => {
        setSending(false);
        setIsLoading(false);
        setSuccess(true);
        console.log('Emails successfully sent!', results);
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        setSending(false);
        setIsLoading(false);
        setError(true);
        setErrorMessage(
          error.text || error.message || 'Unknown error occurred'
        );
        console.log('Failed to send:', error.text);
        setTimeout(() => {
          setError(false);
        }, 3000);
      });
  };

  useEffect(() => {
    const isMessageFormEmpty =
      !form.firstName.trim() || !form.email.trim() || !form.message.trim();

    setMessageButtonActive(!isMessageFormEmpty);
  }, [form.firstName, form.email, form.message]);

  useEffect(() => {
    if (authUser) {
      setForm((prevForm) => ({
        ...prevForm,
        firstName: authUser.first_name || '',
        lastName: authUser.last_name || '',
        email: authUser.email || '',
      }));
    }
  }, [authUser]);

  return (
    <form onSubmit={handleSubmit}>
      <div className='email-name-inputs'>
        <div>
          <input
            type='text'
            name='firstName'
            value={form.firstName}
            onChange={handleChange}
            required
            placeholder={firstNamePlaceholder}
            className='email-name-input'
          />
        </div>
        <div>
          <input
            type='text'
            name='lastName'
            value={form.lastName}
            onChange={handleChange}
            placeholder={lastNamePlaceholder}
            className='email-name-input'
          />
        </div>
      </div>
      <div>
        <input
          type='text'
          name='email'
          value={form.email}
          onChange={handleChange}
          required
          placeholder={emailPlaceholder + '*'}
          className='email-input'
        />
      </div>
      <div>
        <textarea
          name='message'
          value={form.message}
          maxLength={1200}
          onChange={handleChange}
          placeholder={messagePlaceholder}
          className='email-message-input'
        />
      </div>
      {!messageButtonActive && <p className='email-required'>{requiredText}</p>}
      {error && !sending && <p className='error-message'>{errorMessage}</p>}
      {sending && <p className='email-text'>Sending your email...</p>}
      {!sending && success && <div className='success'>Success!</div>}
      <button
        type='submit'
        className={`${
          messageButtonActive ? 'email-button' : 'inactive-email-button'
        }`}
        disabled={!messageButtonActive}
      >
        {isLoading ? <LinearProgress color='inherit' /> : messageButtonText}
      </button>
    </form>
  );
}

export default Email;
