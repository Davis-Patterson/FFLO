import React, { useEffect, useState, useRef } from 'react';
import { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import TitleFlair from 'Svgs/TitleFlair';
import XIcon from 'Svgs/XIcon';
import UKFlag from 'Svgs/UKFlag';
import FrenchFlag from 'Svgs/FrenchFlag';
import 'Styles/Utils/PolicyPanel.css';

const PolicyPanel: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('No Context');
  }
  const {
    showPolicyWindow,
    setShowPolicyWindow,
    language,
    handleLanguageChange,
  } = context;

  const [renderContainer, setRenderContainer] = useState(false);

  const policyContainerRef = useRef<HTMLDivElement>(null);

  // Translations
  const lostBookPolicyHeaderText = language === 'EN' ? 'Policy' : 'Politique';
  const lostBookPolicyHeaderSubtext =
    language === 'EN'
      ? 'Book Loss & Return Policy'
      : 'Livre perdu et politique de retour';
  const policyMainText =
    language === 'EN'
      ? 'At FFLO, we strive to maintain a valuable collection of books for our community. In the event that a parent loses a book or does not return it, we have established the following policy:'
      : 'Chez FFLO, nous nous efforçons de maintenir une précieuse collection de livres pour notre communauté. Dans le cas où un parent perd un livre ou ne le rend pas, nous avons établi la politique suivante :';
  const lostBooksText = language === 'EN' ? 'Lost Books' : 'Livres Perdus';
  const lostBooksPolicy =
    language === 'EN'
      ? 'If a book is reported lost, the parent will be responsible for the replacement cost of the book. We will provide the parent with the title and estimated value of the book for reimbursement.'
      : 'Si un livre est déclaré perdu, le parent sera responsable du coût de remplacement du livre. Nous fournirons au parent le titre et la valeur estimée du livre pour remboursement.';
  const unreturnedBooksText =
    language === 'EN' ? 'Unreturned Books' : 'Livres non Retournés';
  const unreturnedBooksPolicy =
    language === 'EN'
      ? 'If a book is not returned within the designated rental period, we will reach out to the parent to remind them of the outstanding book. If the book remains unreturned after a reasonable period, the parent will also be responsible for the replacement cost.'
      : "Si un livre n'est pas rendu dans la période de location indiquée, nous contacterons le parent pour lui rappeler le livre en attente. Si le livre n'est pas retourné après un délai raisonnable, le parent sera également responsable du coût de remplacement.";
  const replacementCostText =
    language === 'EN' ? 'Replacement Costs' : 'Coûts de Remplacement';
  const replacementCostPolicy =
    language === 'EN'
      ? 'The replacement cost will be determined based on the book’s market value at the time of loss or unreturned status, which may include shipping costs if applicable.'
      : "Le coût de remplacement sera déterminé en fonction de la valeur marchande du livre au moment de la perte ou du non-retour, qui peut inclure les frais d'expédition, le cas échéant.";
  const communicationText =
    language === 'EN' ? 'Communication' : 'Communication';
  const communicationPolicy =
    language === 'EN'
      ? 'We encourage open communication. If a parent is experiencing difficulties in returning a book or if a book has been accidentally lost, we ask that they contact us as soon as possible to discuss the situation.'
      : 'Nous encourageons une communication ouverte. Si un parent éprouve des difficultés à retourner un livre ou si un livre a été accidentellement perdu, nous lui demandons de nous contacter dans les plus brefs délais pour discuter de la situation.';

  useEffect(() => {
    if (showPolicyWindow) {
      setRenderContainer(true);
    }
  }, [showPolicyWindow]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        policyContainerRef.current &&
        !policyContainerRef.current.contains(event.target as Node)
      ) {
        setShowPolicyWindow(false);
        setTimeout(() => {
          setRenderContainer(false);
        }, 400);
      }
    };

    if (showPolicyWindow) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPolicyWindow, setShowPolicyWindow]);

  const handleClose = (event: React.MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();

    setShowPolicyWindow(false);
    setTimeout(() => {
      setRenderContainer(false);
    }, 400);
  };

  return (
    <>
      {renderContainer && (
        <div
          className={`policy-overlay ${
            showPolicyWindow ? 'fade-in' : 'fade-out'
          }`}
        >
          <section
            ref={policyContainerRef}
            className={`policy-container ${
              showPolicyWindow ? 'fade-in' : 'fade-out'
            }`}
          >
            <div className='portal-top-toggles'>
              <div className='policy-language-toggle'>
                {language === 'FR' && (
                  <UKFlag
                    className='flag-icon'
                    onMouseDown={(e) => handleLanguageChange(e, 'EN')}
                  />
                )}
                {language === 'EN' && (
                  <>
                    <FrenchFlag
                      className='flag-icon'
                      onMouseDown={(e) => handleLanguageChange(e, 'FR')}
                    />
                  </>
                )}
              </div>
              <XIcon
                className='policy-x-icon'
                onMouseDown={(e) => handleClose(e)}
              />
            </div>
            <div className='policy-header'>
              <TitleFlair className='policy-flair-left' />
              <p className='policy-header-text'>{lostBookPolicyHeaderText}</p>
              <TitleFlair className='policy-flair-right' />
            </div>
            <p className='policy-header-subtext'>
              {lostBookPolicyHeaderSubtext}
            </p>
            <div className='policy-main-container'>
              <p className='policy-main-text'>{policyMainText}</p>
              <ol className='policy-list-container'>
                <li className='policy-secondary-text'>
                  {lostBooksText}
                  <p className='policy-secondary-subtext'>{lostBooksPolicy}</p>
                </li>
                <li className='policy-secondary-text'>
                  {unreturnedBooksText}
                  <p className='policy-secondary-subtext'>
                    {unreturnedBooksPolicy}
                  </p>
                </li>
                <li className='policy-secondary-text'>
                  {replacementCostText}
                  <p className='policy-secondary-subtext'>
                    {replacementCostPolicy}
                  </p>
                </li>
                <li className='policy-secondary-text'>
                  {communicationText}
                  <p className='policy-secondary-subtext'>
                    {communicationPolicy}
                  </p>
                </li>
              </ol>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default PolicyPanel;
