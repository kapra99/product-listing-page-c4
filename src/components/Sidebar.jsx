const Sidebar = ({ filterColor, setFilterColor, maxPrice, setMaxPrice }) => {
  return (
    <aside className="col-lg-3 mb-4">
      <div
        className="card p-3 shadow-sm border-0 sticky-top"
        style={{ top: "100px" }}
      >
        <h5 className="fw-bold mb-3">Filters</h5>

        <div className="mb-4">
          <label className="form-label fw-semibold">Color</label>
          <select
            className="form-select"
            value={filterColor}
            onChange={(e) => setFilterColor(e.target.value)}
          >
            <option value="all">All Colors</option>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
            <option value="white">White</option>
          </select>
        </div>

        <div className="mb-0">
          <label className="form-label fw-semibold d-flex justify-content-between">
            Max Price <span>${maxPrice}</span>
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="300"
            step="10"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
