import React, { useState } from 'react'
import MarriageLayout from '../../../layout/ResidentMarriageLayout'
import AdminLayout from '../../../layout/AdminLayout';

const MarriageRecords = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <AdminLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <MarriageLayout>
            <div>
            Marriage Records
            </div>

        </MarriageLayout>
    </AdminLayout>
  )
}

export default MarriageRecords
