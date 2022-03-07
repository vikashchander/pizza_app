import React from "react";

function DropDown() {
    return(
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
    )
}

export default DropDown;