import React, { useState } from 'react'
import BirthLayout from '../../../layout/BirthLayout'
import AdminLayout from '../../../layout/AdminLayout';

const BirthRecords = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <AdminLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <BirthLayout>
           Birth record
        </BirthLayout>
      
    </AdminLayout>
  )
}

export default BirthRecords
