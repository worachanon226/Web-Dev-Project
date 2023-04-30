import React from 'react'

const LoadingTask = () => {
  return (
        <div className="d-flex row justify-content-center 
        ">
        <img id="clock"
          className="picturwait"
          src="https://cdn.dribbble.com/users/1478651/screenshots/9683496/media/b921a805a76e70f0c36f0410310be009.gif"
          alt="hew"
        />
        <div>
        <h1 className='text-center m-5'><b>Waiting Order...</b></h1>
        </div>
        </div>
  )
}

export default LoadingTask