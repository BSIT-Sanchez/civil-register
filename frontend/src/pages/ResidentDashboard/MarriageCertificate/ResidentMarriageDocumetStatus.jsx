import React, { useState } from 'react'
import ResidentMarriageLayout from '../../../layout/ResidentMarriageLayout'
import ResidentLayout from '../../../layout/ResidentLayout';

const ResidentMarriageDocumentStatus = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <ResidentLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <ResidentMarriageLayout>
            <div>
           Resident Marriage Document Status
            </div>

        </ResidentMarriageLayout>
    </ResidentLayout>
  )
}

export default ResidentMarriageDocumentStatus
