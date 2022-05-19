import { useState } from 'react';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import styled from 'styled-components';

const CardAddToFavoriteButton = () => {
  const [activeButton, setActiveButton] = useState(false);
  const ButtonContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
  `;

  const HeartButtonStyle = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 1rem;
    margin: 0;

    svg {
      color: ${activeButton
        ? 'var(--secondary)'
        : 'var(--main-text-color-light)'};
    }

    &:hover {
      animation: heartBeat 1s infinite;
      transition: all 1s ease-in-out;
    }

    @keyframes heartBeat {
      0% {
        transform: scale(1);
      }
      25% {
        transform: scale(1.1);
      }
      50% {
        transform: scale(1);
      }
      75% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }

    &:active {
      svg {
        color: red;
      }
    }
  `;

  const handleClick = () => {
    setActiveButton(!activeButton);
  };

  return (
    <ButtonContainer>
      <HeartButtonStyle
        type="button"
        className="btn btn-light m-0 text-left"
        onClick={handleClick}
      >
        {!activeButton ? (
          <HiOutlineHeart size={24} />
        ) : (
          <HiHeart color="red" size={24} />
        )}
      </HeartButtonStyle>
    </ButtonContainer>
  );
};
export default CardAddToFavoriteButton;
