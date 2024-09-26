import { useState, useRef } from 'react';
import ResidentBirthLayout from '../../../layout/ResidentBirthLayout';
import SignatureCanvas from 'react-signature-canvas';
import ResidentLayout from '../../../layout/ResidentLayout';

const ResidentBirthCertificate = () => {
    const [isOpen, setIsOpen] = useState(true);
    const signatureRef = useRef(null);

    const clearSignature = () => {
        signatureRef.current.clear();
    };

    const saveSignature = () => {
        const dataURL = signatureRef.current.toDataURL();
        console.log(dataURL); // You can send this dataURL to your server or handle it as needed
    };

  
  return (
    <ResidentLayout isOpen={isOpen} setIsOpen={setIsOpen}>
      <ResidentBirthLayout>
         <div className={`bg-[#b8babe] w-full h-[88vh] overflow overflow-y-scroll sidebar ${isOpen ? 'w-[108%]' : 'w-full'}`}>
          <div className='pt-2 mb-3'>
            <h1 className='text-center font-bold text-[23px]'>BIRTH CERTIFICATE REGISTRATION FORM</h1>
          </div>
          <div className='m-4'>
             <form className='grid grid-cols-3 gap-2'>

              {/** Child’s Information*/}
              <div className='col-span-3 mb-3'>
                <h1 className='font-bold'>Child’s Information</h1>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>First Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Last Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>
        
              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Middle Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label htmlFor='sex' className='text-[12.5px]'>Sex</label>
                <select id='sex' className='outline-none border border-gray-700 p-1 rounded-md'>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </div>


              <div className='flex flex-col'>
                <label htmlFor='dob' className='text-[12.5px]'>Date of Birth</label>
                <input 
                  type='date' 
                  id='dob' 
                  className='outline-none border border-gray-700 p-1 rounded-md'
                />
              </div>


              <div className='flex flex-col'>
                <label htmlFor='timeOfBirth' className='text-[12.5px]'>Time of Birth</label>
                <input 
                  type='time' 
                  id='timeOfBirth' 
                  className='outline-none border border-gray-700 p-1 rounded-md'
                />
              </div>


              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Place of Birth</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label htmlFor='birthType' className='text-[12.5px]'>Type of Birth</label>
                <select id='birthType' className='outline-none border border-gray-700 p-1 rounded-md'>
                  <option value='single'>Single</option>
                  <option value='twin'>Twin</option>
                  <option value='triplet'>Triplet</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label htmlFor='birthOrder' className='text-[12.5px]'>Order of Birth (if multiple births)</label>
                <select id='birthOrder' className='outline-none border border-gray-700 p-1 rounded-md'>
                  <option value='first'>First</option>
                  <option value='second'>Second</option>
                  <option value='third'>Third</option>
                  <option value='other'>Other</option>
                
                </select>
              </div>

              {/**Parents' Information  father*/}
              <div className='col-span-3 mb-3 mt-4'>
                <h1 className='font-bold'>Parent's Information</h1>
                <p className='text-[15px] font-[600] mt-2'>Father Details:</p>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>First Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Last Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>
        
              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Middle Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Suffix (if applicable)</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Nationality of Father</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label htmlFor='fatherDob' className='text-[12.5px]'>Date of Birth of Father</label>
                <input 
                  type='date' 
                  id='fatherDob' 
                  className='outline-none border border-gray-700 p-1 rounded-md'
                />
              </div>


              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Place of Birth of Father</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>


              {/**Parents' Information  mother*/}
              <div className='col-span-3 mb-3 mt-4'>
                <p className='text-[15px] font-[600] mt-2'>Mother Details:</p>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>First Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Last Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>
        
              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Middle Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Maiden Name (if applicable)</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Nationality of Mother</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label htmlFor='fatherDob' className='text-[12.5px]'>Date of Birth of Mother</label>
                <input 
                  type='date' 
                  id='fatherDob' 
                  className='outline-none border border-gray-700 p-1 rounded-md'
                />
              </div>


              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Place of Birth of Mother</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>


               {/**Marital Information */}
               <div className='col-span-3 mb-3 mt-4'>
                 <h1 className='font-bold'>Parent's Marital Information</h1>
              </div>


              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Were Parents Married at the Time of Birth?</label>
                <div className='flex justify-evenly items-center'>
                  <label className='flex items-center'>
                    <input 
                      type='radio' 
                      name='parentsMarried' 
                      value='Yes' 
                      className='mr-2'
                    />
                    Yes
                  </label>
                  <label className='flex items-center'>
                    <input 
                      type='radio' 
                      name='parentsMarried' 
                      value='No' 
                      className='mr-2'
                    />
                    No
                  </label>
                </div>
              </div>

              <div className='flex flex-col '>
                <label className='text-[12.5px]'>Date of Marriage (if applicable)</label>
                <input type='date' className='outline-none border border-gray-700 p-1 rounded-md mt-3'/>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Place of Marriage (if applicable)</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md mt-3'/>
              </div>

              {/** Informant Information*/}

              <div className='col-span-3 mb-3 mt-6'>
                <h1 className='font-bold'>Informant Information</h1>
                <p className='text-[15px] font-[600] mt-2'>Informant Details:</p>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>First Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Last Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>
        
              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Middle Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Relationship to Child</label>
                <select 
                  className='outline-none border border-gray-700 p-1 rounded-md'
                  name='relationshipToChild'
                >
                  <option value='mother'>Mother</option>
                  <option value='father'>Father</option>
                  <option value='guardian'>Guardian</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Address of Informant</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Contact Information of Informant</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>
            


            {/** Attendant Information*/}

              <div className='col-span-3 mb-3 mt-6'>
                <h1 className='font-bold'>Attendant Information</h1>
                <p className='text-[15px] font-[600] mt-2'>Attendant  Details:</p>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>First Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Last Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>
        
              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Middle Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Title/Position of Attendant</label>
                <select 
                  className='outline-none border border-gray-700 p-1 rounded-md'
                  name='relationshipToChild'
                >
                  <option value='mother'>Mother</option>
                  <option value='father'>Father</option>
                  <option value='guardian'>Guardian</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Facility Name (if applicable)</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Contact Information of Informant</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

               {/**Registration Details*/}

               <div className='col-span-3 mb-3 mt-6'>
                <h1 className='font-bold'>Registration Details</h1>
                
              </div>

          

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>First Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>
              
              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Last Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>
        
              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Middle Name</label>
                <input type='text' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='flex flex-col'>
                <label className='text-[12.5px]'>Date of Registration</label>
                <input type='date' className='outline-none border border-gray-700 p-1 rounded-md'/>
              </div>

              <div className='col-span-3 mb-3 mt-6'>
                <h1 className='font-bold'>Registrar's Signature</h1>
          
              </div>

              <div className='col-span-3 mb-3 cursor-pointer'>
                  <SignatureCanvas
                  ref={signatureRef}
                  penColor='black'
                  backgroundColor='white'
                  canvasProps={{  className: 'signature-canvas border border-gray-700 rounded-md w-full h-[200px]' }}
              />
                  <div className='w-full flex  justify-between'>
                      <button type='button' onClick={clearSignature} className='mt-2 p-2 bg-red-500 text-white rounded-md '>
                          Clear Signature
                    </button>
                    <button type='button' onClick={saveSignature} className='mt-2 ml-2 p-2 bg-blue-500 text-white rounded-md'>
                          Save Signature
                    </button>

                  </div>
            
              </div>

              <div className='flex justify-center items-center w-full col-span-3'>
               <input type='submit' value='Submit' className='mt-2 ml-2 p-2 px-20 bg-blue-500 text-white rounded-md'/>

              </div>
                     
                            
 

             </form>
          </div>
         </div>
      </ResidentBirthLayout>
    </ResidentLayout>
  )
}

export default ResidentBirthCertificate;
