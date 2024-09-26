import React, { useState } from 'react'
import DeathLayout from '../../../layout/DeathLayout';
import AdminLayout from '../../../layout/AdminLayout';

const DeathIssuance = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <AdminLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <DeathLayout>
        Death Issuance
        </DeathLayout>
      
    </AdminLayout>
  )
}

export default DeathIssuance
