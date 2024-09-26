import React, { useState } from 'react'
import ResidentDeathLayout from '../../../layout/ResidentDeathLayout';
import ResidentLayout from '../../../layout/ResidentLayout';

const ResidentDeathDocumentStatus = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <ResidentLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <ResidentDeathLayout>
          Resident Death Document Status
        </ResidentDeathLayout>
      
    </ResidentLayout>
  )
}

export default ResidentDeathDocumentStatus;
