import React, { useState } from 'react'
import ResidentDeathLayout from '../../../layout/ResidentDeathLayout';
import ResidentLayout from '../../../layout/ResidentLayout';

const ResidentDeathRequest = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <ResidentLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <ResidentDeathLayout>
        Resident Death Request
        </ResidentDeathLayout>
      
    </ResidentLayout>
  )
}

export default ResidentDeathRequest
