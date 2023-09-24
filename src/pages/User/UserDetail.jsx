import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

// get params of url: /user/:id => user/123
// get query string of user: product?limit=10&page=1

function UserDetail() {
  const params = useParams();
  const [searchParam] = useSearchParams()
  console.log('UserDetail: ', {
    params,
    limit: searchParam.get('limit')
  })
  return (
    <div>UserDetail</div>
  )
}

export default UserDetail