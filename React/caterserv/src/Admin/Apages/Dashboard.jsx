import React from 'react'
import Aheader from '../Acoman/Aheader'
import Aheros from '../Acoman/Aheros'

function Dashboard() {
    return (
        <div>
            <Aheader />
            <Aheros name="Dashboard" title="Dashboard" />
            <h1 className='text-center'>Hello this Dashboard page</h1>
        </div>
    )
}

export default Dashboard
