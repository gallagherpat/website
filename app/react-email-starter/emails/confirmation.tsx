import {Body, Html, Head, Preview, Container, Section, Img, Hr, Text} from '@react-email/components'
import { Heading } from '@react-email/heading';
import AddToCalendar from './addToCalendar'
import * as React from 'react'
const baseUrl = "http://localhost/public"

export default function Confirmation() {
return(    
<Html>
        <Head/>
        <Preview>We are so excited to celebrate our special day with you!</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={box}>
                <Img
                    style={image}
                    src='https://website-sigma-puce-87.vercel.app/pictures/image%20(7).jpg'
                    width="408"
                    height="306"
                    alt='plaid-logo'
                    />
                    <Hr style={hr}/>
                    <Text style={paragraph}>
                    Thank you, for RSVPing we can't wait to celebrate with you on our special day!
                    </Text>
                    <br />
                    <Text style={paragraph}>- The soon to be Gallaghers</Text>
                    <Hr style={hr} />
                    <AddToCalendar/>
                    <Text style={footer} className='px-auto'>
                    2239 Barber Mill Rd, Clayton, NC 27520
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>)
}


const main = {
    backgroundColor: '#f6f9fc',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  };

  const header = {
    color: '#525f7f',
    margin: '0 2rem 0 2rem',
    fontSize: '36px',
    lineHeight: '24px',
    textAlign: 'left' as const,
  }
  
  const image = {
    margin: "1.5rem auto 0",
    "border-radius": "16px"
  }

  const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
  };
  
  const box = {
    padding: '0 48px',
  };
  
  const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0',
  };
  
  const paragraph = {
    color: '#525f7f',
    margin: '0 2rem 0 2rem',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'left' as const,
  };
  
  const anchor = {
    color: '#556cd6',
  };
  
  const button = {
    backgroundColor: '#656ee8',
    borderRadius: '5px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    width: '100%',
  };
  
  const footer = {
    color: '#8898aa',
    fontSize: '14px',
    lineHeight: '16px',
    "text-align": "center"
  };

  