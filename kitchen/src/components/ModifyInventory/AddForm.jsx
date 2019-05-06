import React, { useState, useEffect } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { getCategories } from "../../store/actions/actionCategory";
import styled from "styled-components";
// import bg from "../../assets/login-bg.jpg";
import ReactModal from "react-modal";

const AddForm = props => {
  //   const [categories, setCategories] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [name, setName] = useState("");
  //   const [CategoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("");
  const [image, setImage] = useState("");
  const [supplierContact, setSupplierContact] = useState("");
  const [supplierName, setSupplierName] = useState("");

  useEffect(() => {
    props.getCategories();
  }, []);

  //console.log(props.categories);

  const options = props.categories.map(obj => ({
    value: obj.id,
    label: obj.name
  }));

  //console.log(options);
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={props.handlingModal}
      style={{ overlay, content }}
      onRequestClose={props.handleRequestCloseFunc}
    >
      <StyledForm autoComplete="off">
        <Heading>Add new item</Heading>
        <InputField
          required
          value={name}
          onChange={e => setName(e.target.value)}
          name="name"
          type="text"
          placeholder="Enter item name"
        />

        <InputField
          required
          value={amount}
          onChange={e => setAmount(e.target.value)}
          name="amount"
          type="text"
          placeholder="Enter item amount"
        />

        <InputField
          required
          value={unit}
          onChange={e => setUnit(e.target.value)}
          name="unit"
          type="text"
          placeholder="Enter item unit"
        />

        <InputField
          required
          value={price}
          onChange={e => setPrice(e.target.price)}
          name="price"
          type="text"
          placeholder="Enter item price"
        />

        <SelectField>
          <Select
            placeholder="Chose a category"
            menuPlacement="top"
            value={selectedOption}
            onChange={selectedOption => setSelectedOption(selectedOption)}
            options={options}
          />
        </SelectField>

        <InputField
          required
          value={image}
          onChange={e => setImage(e.target.value)}
          name="img_url"
          type="text"
          placeholder="Enter image URL"
        />

        <Button>Add new item</Button>
        <Button>Cancel</Button>
      </StyledForm>
    </ReactModal>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categoriesReducer.cat
  };
};

const mapDispatchToProps = {
  getCategories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm);

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: "100"
};

const content = {
  position: "absolute",
  maxWidth: "50%",
  height: "550px",
  margin: "20px auto",
  padding: "20px 40px",
  borderRadius: "10px",
  border: "1px solid #161c24",
  background: "	#F0FFFF",
  overflow: "auto",
  WebkitOverflowScrolling: "touch",
  outline: "none"
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h3`
  color: black;
  text-align: center;
`;

const InputField = styled.input`
  padding: 15px 10px;
  width: 60%;
  background: Brown;
  margin: 10px auto;
  font-size: 16px;
  outline: none;
  color: white;
  font-family: "Ubuntu", sans-serif;
`;
const Button = styled.button`
  margin-top: 1.5rem;
  background: #212b38;
  border: 0;
  width: 60%;
  margin: 10px auto;
  height: 4rem;
  border-radius: 0.3rem;
  color: #29f3db;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  &:hover {
    background: #85bdbf;
  }
`;

const SelectField = styled.div`
  width: 60%;
  background: #161c24;
  margin: 20px auto;
  outline: none;
  height: 20px;
  font-family: "Ubuntu", sans-serif;
`;
