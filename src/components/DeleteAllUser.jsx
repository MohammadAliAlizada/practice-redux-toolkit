import React from "react";
import styled from "styled-components";
import {useSelector ,useDispatch} from 'react-redux';
import {deleteUsers} from '../store/slices/UserSlice';
export const DeleteAllUser = () => {

  const dispatch = useDispatch();

    // const data = useSelector((state) =>{
    //     return state.users;
    // })
  const deleteAllUsers = () =>{
    dispatch(deleteUsers());
  }
  return <Wrapper><button onClick={deleteAllUsers} className="btn clear-btn">clear all User</button></Wrapper>
};

const Wrapper = styled.section`
  .clear-btn{
    text-transform: capitalize;
    background-color: #db338e;
    margin-top: 2rem;
  }
`;
