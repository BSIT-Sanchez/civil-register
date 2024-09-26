import React, { useState } from 'react'
import DeathLayout from '../../../layout/DeathLayout';
import AdminLayout from '../../../layout/AdminLayout';

const DeathRecords = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <AdminLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <DeathLayout>
           Death record
        </DeathLayout>
      
    </AdminLayout>
  )
}

export default DeathRecords;
