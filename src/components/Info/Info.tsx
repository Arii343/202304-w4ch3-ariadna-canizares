interface InfoStructure {
  isActive: boolean;
}

const Info = ({ isActive }: InfoStructure): JSX.Element => {
  return (
    <span className={`message ${isActive ? " " : "off"}`}>Calling...</span>
  );
};

export default Info;
