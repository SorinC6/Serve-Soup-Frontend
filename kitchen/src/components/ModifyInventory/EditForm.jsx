import React, { useState, useEffect } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { updateItem } from "../../store/actions/actionInventory";
import styled from "styled-components";
import bg from "../../assets/add-bg.jpg";
import ReactModal from "react-modal";
import "./modal.css";
import { withRouter } from "react-router-dom";

const EditForm = props => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("");
  const [image, setImage] = useState("");
  const [supplierContact, setSupplierContact] = useState("");
  const [supplierName, setSupplierName] = useState("");

  useEffect(() => {
    setName(props.item.name);
    setPrice(props.item.price);
    setAmount(props.item.amount);
    setUnit(props.item.unit);
    setImage(props.item.image);
    setSelectedOption(props.item.categoryID);
    setSupplierContact(props.item.supplier_contact);
    setSupplierName(props.item.supplier_name);
  }, []);

  const handleEditInfo = e => {
    e.preventDefault();
    const itemData = {
      name,
      price,
      amount,
      unit,
      image,
      categoryID: selectedOption.value,
      supplier_contact: supplierContact,
      supplier_name: supplierName
    };

    props.updateItem(props.item.id, itemData);
    props.handleRequestCloseFunc();
    props.history.push("/");
  };

  const options = props.categories.map(obj => ({
    value: obj.id,
    label: obj.name
  }));
  console.log("Option: ", options);

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={props.handlingModal}
      style={{ overlay, content }}
      onRequestClose={props.handleRequestCloseFunc}
      closeTimeoutMS={1500}
    >
      <StyledForm autoComplete="off" onSubmit={handleEditInfo}>
        <Heading>Edit Item</Heading>
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
          onChange={e => setPrice(e.target.value)}
          name="price"
          type="text"
          placeholder="Enter item price"
        />

        <SelectField>
          <Select
            placeholder={"Category name"}
            menuPlacement="top"
            value={selectedOption}
            onChange={selectedOption => setSelectedOption(selectedOption)}
            options={options}
          />
        </SelectField>

        <InputField
          value={image}
          onChange={e => setImage(e.target.value)}
          name="img_url"
          type="text"
          placeholder="Enter image URL"
        />

        <InputField
          value={supplierContact}
          onChange={e => setSupplierContact(e.target.value)}
          name="supplierContact"
          type="text"
          placeholder="Enter Supplier contact"
        />

        <InputField
          value={supplierName}
          onChange={e => setSupplierName(e.target.value)}
          name="supplierName"
          type="text"
          placeholder="Enter Suppllier Name"
        />

        <Button type="submit">Edit item</Button>
        <Button onClick={props.handleRequestCloseFunc}>Cancel</Button>
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
  updateItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditForm));

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
  maxHeight: "550px",
  margin: "20px auto",
  padding: "20px 40px",
  borderRadius: "10px",
  border: "1px solid #161c24",
  overflow: "auto",
  WebkitOverflowScrolling: "touch",
  background: `url(${bg})`,
  outline: "none"
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h3`
  color: white;
  text-align: center;
`;

const InputField = styled.input`
  padding: 15px 10px;
  width: 60%;
  background: brown;
  opacity: 0.6;
  margin: 10px auto;
  font-size: 16px;
  outline: none;
  color: white;
  font-family: "Ubuntu", sans-serif;
  border-radius: 5px;
`;
const Button = styled.button`
  margin-top: 1.5rem;
  background: #212b38;
  border: 0;
  width: 60%;
  margin: 10px auto;
  height: 2rem;
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
  background: brown;
  opacity: 0.8;
  margin: 20px auto;
  outline: none;
  height: 20px;
  font-family: "Ubuntu", sans-serif;

  select {
    background: transparent;
  }
`;
