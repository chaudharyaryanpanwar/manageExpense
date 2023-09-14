import React from 'react'

const Spinner = () => {
  return (
    <div className='m-10 d-flex justify-content-center'>
  <button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span class="visually-hidden" role="status">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>
</div>

  )
}

export default Spinner