import React from 'react'
import Cat from '../../public/undraw_Cat_epte.png'
import Image from 'next/image'
import { EmptyPreview } from '@/components';

const Messages = () => {
  return (
    <div className="message-preview-contianer flex justify-center items-center h-fit">
      <EmptyPreview alertMessage={"No message for now!"} img={Cat}/>
     </div>
  );
}

export default Messages