import './notificationError.css'

const NotificationError = ({ message }) => {
    if (message === null) {
      return null
    }else if (message){
  
    return (
      <div className='notificationError'>
        {message}
      </div>
    )
  }
}
  export default NotificationError;