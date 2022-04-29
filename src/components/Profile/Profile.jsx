import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
 return(
  <div>
      <ProfileInfo />
      <MyPosts 
            data={props.data} 
            dispatch={props.dispatch} 
      />       
  </div>      
 )
}

export default Profile