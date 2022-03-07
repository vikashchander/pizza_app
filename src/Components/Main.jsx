import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import {
  checkVeg,
  checkNonVeg,
  sortPrice,
} from "../state/action-creators/action";
import DropDown from "./DropDown";
function Main() {
  const { data } = useSelector((state) => state);
  const [veg, setVeg] = useState(false);
  const [nonVeg, setNonVeg] = useState(false);
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  function handleCheckBoxVeg() {
    setVeg((d) => !d);
    dispatch(checkVeg(veg));
  }
  function handleCheckBoxNonVeg() {
    setNonVeg((val) => !val);
    dispatch(checkNonVeg(nonVeg));
  }

  function handlePrice(e) {
    e.preventDefault();
    setPrice(e.target.value);
    console.log(price);
    dispatch(sortPrice(e.target.value));
  }
  const result = data.map(
    ({ id, name, description, img_url, price, rating, isVeg }) => {
      return (
        <MDBCol key={id}>
          <MDBCard>
            <MDBCardImage alt={name} src={img_url} position="top" />
            <MDBCardBody>
              <MDBCardTitle>{name}</MDBCardTitle>
              <MDBCardText>{description}</MDBCardText>
              <p>
                <span>{price}</span>
              </p>
              <p>
                <span>{rating}</span>
              </p>
              <p>{isVeg ? <span>veg</span> : <span>non-veg</span>}</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      );
    }
  );
  return (
    <>
      <div className="m-2">
        <MDBCheckbox
          name="Non_Veg"
          value="NonVeg"
          id="nonVegChecked"
          label="Non Veg."
          checked={nonVeg}
          onChange={handleCheckBoxNonVeg}
        />
        <MDBCheckbox
          name="Veg"
          value="Veg"
          id="vegChecked"
          label="Veg."
          checked={veg}
          onChange={handleCheckBoxVeg}
        />
         <select
          class="form-select"
          value={price}
          onChange={(e) => handlePrice(e)}
        >
          <option value="" disabled>
            Sort
          </option>
          <option value="price_up">Price Up</option>
          <option value="price_down">Price Down</option>
          <option value="reset">Reset</option>
        </select>
      </div>
      <MDBRow className="row-cols-1 m-2 row-cols-md-3 g-3">{result}</MDBRow>
    </>
  );
}

export default Main;
