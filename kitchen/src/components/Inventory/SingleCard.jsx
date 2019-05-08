import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import LeftView from "../ViewComponents/RightView";
import { connect } from "react-redux";
import { getItemById, deleteItem } from "../../store/actions/actionInventory";
import styled from "styled-components";
import DetailCard from "../Common/DetailCard";
import EditForm from "../ModifyInventory/EditForm";

const SingleCard = props => {
  const [showEdit, setShowEdit] = useState(false);
  //console.log(showEdit);

  useEffect(() => {
    const id = props.match.params.id;
    props.getItemById(id);
  }, []);

  //console.log("propspsps ", props.item);
  return (
    <div>
      <Header />
      <Wrapper>
        <DetailCard
          item={props.item}
          deleteItem={props.deleteItem}
          showEditForm={() => setShowEdit(true)}
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
  deleteItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCard);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
