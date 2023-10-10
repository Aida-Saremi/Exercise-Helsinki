import './notification.css'

const NotificationMessage = ({ message }) => {
    if (message === null) {
      return null
    }else if (message){
      return (
      <div className='notification'>
        {message}
      </div>
    )
  }
}
  export default NotificationMessage;