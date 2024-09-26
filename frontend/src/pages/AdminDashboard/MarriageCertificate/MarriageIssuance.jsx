import React, { useState } from 'react'
import MarriageLayout from '../../../layout/ResidentMarriageLayout'
import AdminLayout from '../../../layout/AdminLayout';

const MarriageIssuance = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <AdminLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <MarriageLayout>
            <div>
            Marriage Issuance
            </div>

        </MarriageLayout>
    </AdminLayout>
  )
}

export default MarriageIssuance
