const Filter = function () {
  const times = ["View All", "Past", "Current", "Upcoming"];
  const categories = [
    "View All",
    "Digital Art",
    "Ideas",
    "Inventions",
    "Public Goods",
  ];
  return (
    <div
      tabIndex={0}
      className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box max-w-xs"
    >
      <input type="checkbox" className="peer"></input>
      <div className="collapse-title text-sm font-medium">Filter</div>
      <div className="collapse-content">
        <p className="font-bold">Time</p>
        <div className="form-control">
          {times.map((time) => (
            <label key={time} className="label cursor-pointer">
              <span className="label-text">{time}</span>
              <input type="radio" className="radio" />
            </label>
          ))}
        </div>

        <p className="font-bold">Category</p>
        <div className="form-control">
          {categories.map(function (category) {
            return (
              <label key={category} className="label cursor-pointer">
                <span className="label-text">{category}</span>
                <input
                  type="checkbox"
                  defaultChecked={false}
                  className="checkbox"
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
