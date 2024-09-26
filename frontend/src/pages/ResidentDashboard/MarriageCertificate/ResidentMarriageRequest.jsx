import React, { useState } from 'react'
import ResidentMarriageLayout from '../../../layout/ResidentMarriageLayout'
import ResidentLayout from '../../../layout/ResidentLayout';

const ResidentMarriageRequest = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <ResidentLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <ResidentMarriageLayout>
            <div>
            Resident Marriage Request
            </div>

        </ResidentMarriageLayout>
    </ResidentLayout>
  )
}

export default ResidentMarriageRequest
