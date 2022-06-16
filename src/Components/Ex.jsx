import { RiDeleteBin2Fill } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";

function Ex({ ex, setDeleteData, setModalData }) {
  const handleDelete = () => {
    setDeleteData(ex);
  };

  const handleEdit = () => {
    setModalData(ex);
  };

  return (
    <div className="list-group-item">
      <div className="item">
        <div className="content">
          <span>{ex.id}</span>
          <span>{ex.name}</span>
          <span>{ex.time}</span>
          <span>{ex.km}km</span>
          <span>
            {ex.isBusy ? (
              <div className="uzimtas">Busy</div>
            ) : (
              <div className="laisvas">Available</div>
            )}
          </span>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="btn btn-outline-success ml-2 edit"
            onClick={handleEdit}
          >
            <GrEdit/>
          </button>
          <button
            type="button"
            className="btn btn-outline-danger ml-2 delete"
            onClick={handleDelete}
          >
            <RiDeleteBin2Fill/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ex;
