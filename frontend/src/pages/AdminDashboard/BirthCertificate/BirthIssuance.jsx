import React, { useState } from 'react'
import BirthLayout from '../../../layout/BirthLayout'
import AdminLayout from '../../../layout/AdminLayout';

const BirthIssuance = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <AdminLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <BirthLayout>
        Birth Issuance
        </BirthLayout>
      
    </AdminLayout>
  )
}

export default BirthIssuance
