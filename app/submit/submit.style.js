"use client";

import styled from "styled-components";

export const RegisterProductWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RagisterWrapper = styled.div`
  width: 80%;
  height: 60px;
  border-bottom: 2px solid #000;
  margin-top: 40px;
`;

export const RagisterTitle = styled.h1`
  font-weight: bold;
`;

export const ProductTitleWrapper = styled.div`
  width: 80%;
  height: 60px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  margin-top: 24px;
  justify-content: space-between;
`;

export const ProductTitle = styled.h4`
  font-weight: 400;
  font-size: 20px;
  margin-left: 20px;
`;

export const ProductTitleInput = styled.input`
  width: 80%;
  height: 45px;
  background-color: #bdbdbd;
  border: none;
  padding-left: 20px;
  margin-bottom: 10px;
`;

export const ProductSummaryWrapper = styled.div`
  width: 80%;
  height: 60px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  margin-top: 24px;
  justify-content: space-between;
`;

export const ProductSummary = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
`;
export const ProductSummaryInput = styled.input`
  width: 80%;
  height: 45px;
  background-color: #bdbdbd;
  border: none;
  padding-left: 20px;
  margin-bottom: 10px;
`;

export const ProductContentWrapper = styled.div`
  width: 80%;
  height: 300px;
  border-bottom: 1px solid #000;
  display: flex;
  margin-top: 24px;
  justify-content: space-between;
`;

export const ProductContent = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin-left: 20px;
`;
export const ProductContentInput = styled.textarea`
  width: 80%;
  background-color: #bdbdbd;
  border: none;
  padding: 20px;
  margin-bottom: 10px;
`;

export const ProductPriceWrapper = styled.div`
  width: 80%;
  height: 60px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  margin-top: 24px;
  justify-content: space-between;
`;

export const ProductPrice = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
`;
export const ProductPriceInput = styled.input`
  width: 80%;
  height: 45px;
  background-color: #bdbdbd;
  border: none;
  padding-left: 20px;
  margin-bottom: 10px;
`;

export const ProductTagWrapper = styled.div`
  width: 80%;
  height: 60px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  margin-top: 24px;
  justify-content: space-between;
`;

export const ProductTag = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
`;
export const ProductTagInput = styled.input`
  width: 80%;
  height: 45px;
  background-color: #bdbdbd;
  border: none;
  padding-left: 20px;
  margin-bottom: 10px;
`;

export const ImageContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  width: 80%;

  h3 {
    font-size: 20px;
    margin-left: 17px;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

export const ProductImage = styled.img`
  width: 180px;
  height: 180px;
  border: none;
`;

export const ProductImageUpload = styled.div`
  width: 180px;
  height: 180px;
  cursor: pointer;
  margin-left: 20px;
  background-color: #bdbdbd;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const WhiteButton = styled.button`
  background: #fff;
  color: #000;
  border: 1px solid grey;
  position: relative;
  width: 195px;
  height: 55px;
  font-size: 15px;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  margin-top: 10px;
  margin-right: 10px;

  &:hover {
    background: #000;
    color: #fff;
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

export const BlackButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  position: relative;
  width: 195px;
  height: 55px;
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
