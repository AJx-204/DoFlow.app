import React from 'react'
import useOrg from '../../Context/OrgContext';

const Org = () => {

    const { orgData } = useOrg();

    console.log(orgData)

  return ( orgData &&
    <div>{orgData.orgName}</div>
  )
}

export default Org;