import React from 'react'

interface Params {
    id: number
    user: string
}

const page = ({params}: {params: Params}) => {
  return (
    <div>
        <h1>this is {params.user} page</h1>
        <br /><br />

        
    </div>
  )
}

export default page