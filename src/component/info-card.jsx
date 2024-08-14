function InfoCard({ title, description, icon }) {
  return (
    <div className="card bg-blue-400 w-60 shadow-lg text-white">
      <div className="h-32 w-42 flex items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-4 shadow-lg">
        {icon && <img src={icon} alt={title} className="h-10 w-10 mr-4" />}
        <div>
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
