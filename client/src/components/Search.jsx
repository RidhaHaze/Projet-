import { BsSearch } from "react-icons/bs";
export default function Search() {
  return (
    <div className="col-md-8">
      <div className="search">
        <BsSearch />
        <input
          type="text"
          className="form-control"
          placeholder="Have a question? Ask Now"
        />
        <button className="btn btn-primary">Search</button>
      </div>
    </div>
  );
}
