
const Categories = (props) => {
  return (
    <div className="category-row">
      <div className="circle-img-wrapper">
        <img src={props.img} alt={props.foodTitle} />
      </div>
      <div className="content-card">
        <h3>{props.foodTitle}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Categories