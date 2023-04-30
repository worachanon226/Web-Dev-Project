import React from 'react'

const LoadingTask = () => {
  return (
        <div className="d-flex row justify-center align-item-center w-60
        ">
        <img id="clock"
          className="picturwait"
          src="https://cdn.dribbble.com/users/1478651/screenshots/9683496/media/b921a805a76e70f0c36f0410310be009.gif"
          alt="hew"
        />
        <div>
        <h2 className='text-center'>Waiting Order...</h2>
        </div>
        </div>
  )
}

export default LoadingTask