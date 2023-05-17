"use client";

import { styled } from "styled-components";

export const ListBackground = styled.div`
  background: rgb(249, 250, 255);
  padding: 10px;
  width: 80%;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const ListItem = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: rgb(224, 224, 224) 0px 2px 4px 0px;

  h4 {
    font-size: 20px;
    font-weight: 800;
    margin: 0;
  }

  p {
    color: grey;
    margin: 5px 0px;
  }
`;

export const ButtonStyle = styled.button`
  background: #000;
  color: #fff;
  border: none;
  position: relative;
  height: 40px;
  font-size: 15px;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  margin-top: 10px;

  &:hover {
    background: #fff;
    color: #000;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #000;
    transition: 400ms ease all;
  }

  &:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
`;

export const ImageBox = styled.div`
  width: 100px;
  height: 70px;
  border: 2px solid #000;
  margin-left: auto;
  margin-bottom: auto;
`;
