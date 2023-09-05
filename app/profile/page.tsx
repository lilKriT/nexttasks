import PrivateTaskList from "../_components/PrivateTaskList";

const Profile = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="container">
        <h1>This is a personal page.</h1>
        <PrivateTaskList />
      </div>
    </div>
  );
};

export default Profile;
