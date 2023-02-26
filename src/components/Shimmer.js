const Shimmer = () => {
  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Search.."/>
        <button type="submit">Search</button>
      </div>
      <div className="res-card">
        {Array(15)
          .fill("")
          .map((e,index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    </>
  );
};
export default Shimmer;
