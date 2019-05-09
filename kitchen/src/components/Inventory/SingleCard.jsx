import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import LeftView from "../ViewComponents/RightView";
import { connect } from "react-redux";
import {
  getItemById,
  deleteItem,
  updateItem
} from "../../store/actions/actionInventory";
import styled from "styled-components";
import DetailCard from "../Common/DetailCard";
import EditForm from "../ModifyInventory/EditForm";
import axios from "axios";
import * as url from "../../constants/ApiConstants";
import axiosWithPermission from "../../store/axios/index";

const SingleCard = props => {
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    const id = props.match.params.id;
    props.getItemById(id);
  }, []);

  const increase = () => {
    const itemIncreased = {
      amount: ++props.item.amount
    };
    //props.updateItem(props.match.params.id, itemIncreased);
    axiosWithPermission()
      .put(`${url.updateURL}/${props.match.params.id}`, itemIncreased)
      .then(res => {
        //console.log(res.data);
      })
      .catch(err => {
        //console.log(err.data);
      });
    props.getItemById(props.match.params.id);
  };

  const decrease = () => {
    //props.item.amount++;
    const itemIncreased = {
      amount: --props.item.amount
    };
    axiosWithPermission()
      .put(`${url.updateURL}/${props.match.params.id}`, itemIncreased)
      .then(res => {
        //console.log(res.data);
      })
      .catch(err => {
        //console.log(err.data);
      });
    props.getItemById(props.match.params.id);
  };

  return (
    <div>
      <Header />
      <Wrapper>
        <DetailCard
          item={props.item}
          deleteItem={props.deleteItem}
          showEditForm={() => setShowEdit(true)}
          increase={increase}
          decrease={decrease}
        />
        {showEdit && (
          <EditForm
            handlingModal={showEdit}
            handleRequestCloseFunc={() => setShowEdit(false)}
            item={props.item}
          />
        )}
        <LeftView />
      </Wrapper>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    item: state.getById.item
  };
};

const mapDispatchToProps = {
  getItemById,
  deleteItem,
  updateItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCard);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
