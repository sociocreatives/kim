
import React from 'react'
import GetUserDetails from './FetchDetails'
import { getAuth } from 'firebase/auth';
import { UserAuth } from '@/context/AuthContext';


const UserProfile = () => {

  return (
    <div>
      <GetUserDetails/>
    </div>
  )
}

export default UserProfile
