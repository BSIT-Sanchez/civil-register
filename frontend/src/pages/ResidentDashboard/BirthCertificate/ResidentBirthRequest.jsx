import React, { useState } from 'react'
import ResidentBirthLayout from '../../../layout/ResidentBirthLayout'
import ResidentLayout from '../../../layout/ResidentLayout';

const ResidentBirthRequest = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <ResidentLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <ResidentBirthLayout>
          Resident Birth Request
        </ResidentBirthLayout>
      
    </ResidentLayout>
  )
}

export default ResidentBirthRequest
