"use client";

import { styled } from "styled-components";

export const WriteWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const ProductSubmitTitleWrapper = styled.div`
  width: 80%;
  height: 40px;
  margin: 0 auto;
  margin-top: 80px;
  border-bottom: 2px solid grey;

  h4 {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const ProductWrapper = styled.div`
  width: 80%;
  height: 40px;
  margin: 0 auto;
  margin-top: 34px;
  border-bottom: 1px solid grey;
  padding-bottom: 25px;
  display: flex;
  align-items: center;

  h4 {
    font-weight: 500;
    color: grey;
    padding-left: 20px;
  }

  input {
    width: 80%;
    margin-left: 45px;
    height: inherit;
  }
`;

export const ImageWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const ImageUpload = styled.img`
  width: 200px;
  height: 200px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

export const CancelButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #ffffff;
  border: 1px solid #000000;
  font-weight: 500;
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #000000;
  border: 1px solid #000000;
  font-weight: 500;
  color: #ffffff;
  margin-left: 20px;
`;
