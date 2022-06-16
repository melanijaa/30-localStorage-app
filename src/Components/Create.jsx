import { useState, useRef } from "react";
import randLetters from "../Functions/randLetters";

function Create({ setCreateData }) {
  const [id, setId] = useState('');
  const [name, setName] = useState(randLetters());
  const [time, setTime] = useState("1");
  const [km, setKm] = useState(0);
  let countKolts = useRef(0);

  const handleCreate = () => {
    const data = { id, name, time, km:parseFloat(km) };
    setCreateData(data);
    setId('');
    setName(randLetters());
    setTime('');
    setKm(0);
    countKolts.current++
  };

  return (
    <div className="card">
      <div className="card-body">
        <label className="title">Add New Scooter</label>
        <div className="form-group">
          <label>Registration Code:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Last time used:</label>
          <input
            type="date"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={time}
          />
        </div>
        <div className="form-group">
          <label>Total Kilometers Ride:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setKm(e.target.value)}
            value={km}
          />
        </div>
        <button
          type="button"
          className="btn2 btn-outline-primary"
          onClick={handleCreate}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default Create;

/*
<div className="form-group">
          <label>Type</label>
          <select
            className="form-control"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value="1">Test</option>
            <option value="2">Written</option>
            <option value="3">Spoken</option>
          </select>
        </div>
*/