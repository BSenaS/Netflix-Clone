export default function Browse(props) {
  const {loggedUser} = props;
  return (
    <div>
      <h1>
      Logged User is: {loggedUser.nickname}
      </h1>
    </div>
  );
}