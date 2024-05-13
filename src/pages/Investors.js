import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa'; // Import the left arrow icon from react-icons/fa

const InvestorsContainer = styled.div`
  background-color: #f0f0f0;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  padding: 20px;
  position: relative; /* Added to position the Add button */
`;

const Button = styled.button`
  background-color: #ffffff;
  color: #555555;
  font-size: 20px !important;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  border: none;
  border-radius: 24px;
  padding: 15px;
  width: calc(100% - 12px); /* Adjust width to accommodate icon */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 64px;
  display: flex;
  align-items: center; /* Align icon and text vertically */
  
  &:hover {
    background-color: #f9f9f9; /* Change background color on hover */
  }
`;

const AddButton = styled.button`
  background: linear-gradient(91.36deg, #28CCC2 0%, #2887CC 100%);
  width: 148px; /* Adjust width as needed */
  height: 40px; /* Adjust height as needed */
  border-radius: 14px; /* Adjust border radius as needed */
  border: none; /* Remove border */
  position: absolute;
  top: 50%; /* Position at the vertical center */
  right: 50px; /* Adjust the distance from the right side */
  transform: translateY(-50%); /* Move up by half of its height to center vertically */
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.02em;
  text-align: center;
  cursor: pointer;

  /* Media query for mobile devices */
  @media (max-width: 767px) {
    width: 100px; /* Adjust width for mobile */
    height: 30px; /* Adjust height for mobile */
    font-size: 10px; /* Adjust font size for mobile */
    line-height: 14px; /* Adjust line height for mobile */
  }
`;

const Icon = styled.img`
  margin-right: 10px;
  transition: transform 0.3s ease; /* Add transition effect for smooth hover */
  
  ${Button}:hover & {
    transform: scale(1.1); /* Scale up the image on hover */
  }
`;

const Investors = () => {
  return (
    <InvestorsContainer>
      <Button>
        <Icon src="vector.svg" alt="Vector" />
        All Investors
      </Button>
      <AddButton>
        ADD INVESTOR
      </AddButton>
    </InvestorsContainer>
  );
};

export default Investors;
