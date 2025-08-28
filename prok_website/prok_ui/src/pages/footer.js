import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  flex: 1 1 200px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Heading = styled.h4`
  font-weight: bold;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  line-height: 1.8;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

const LogoWrapper = styled.h2`
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ColoredLetter = styled.span`
  color: #FFD700;
  margin-left: 5px;
`;

const ContactInfo = styled.p`
  margin: 10px 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      
      <Section>
        <LogoWrapper>
          PRO<span style={{ color: '#FFD700' }}>K</span>
        </LogoWrapper>
        <ContactInfo>
          <strong>Phone:</strong> +61 1800 PROKCC (776522)
        </ContactInfo>
        <ContactInfo>
          <strong>Email:</strong> conveyors.au@prok.com
        </ContactInfo>
        <SocialLinks>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </SocialLinks>
      </Section>
      
      <Section>
        <Heading>Conveyor Equipment</Heading>
        <List>
          <ListItem>Rollers</ListItem>
          <ListItem>Pulleys</ListItem>
          <ListItem>Idlers</ListItem>
          <ListItem>Accessories</ListItem>
        </List>
      </Section>
      
      <Section>
        <Heading>Expertise</Heading>
        <List>
          <ListItem>Pulley Refurbishment</ListItem>
          <ListItem>Engineering Services</ListItem>
          <ListItem>US Capabilities</ListItem>
        </List>
      </Section>
      
      <Section>
        <Heading>Links</Heading>
        <List>
          <ListItem>Contact</ListItem>
          <ListItem>About PROK</ListItem>
          <ListItem>Projects</ListItem>
          <ListItem>Careers</ListItem>
          <ListItem>Graduate Program</ListItem>
          <ListItem>Innovation Hub</ListItem>
          <ListItem>Sustainability</ListItem>
          <ListItem>News</ListItem>
        </List>
      </Section>
      
    </FooterContainer>
  );
};

export default Footer;