import {
  ButtonWrapper,
  CancelButton,
  ImageUpload,
  ImageWrapper,
  ProductSubmitTitleWrapper,
  ProductWrapper,
  SubmitButton,
  WriteWrapper,
} from "./submit.style";

export default function SubmitPage() {
  return (
    <>
      <WriteWrapper>
        <ProductSubmitTitleWrapper>
          <h4>스타일 등록</h4>
        </ProductSubmitTitleWrapper>
        <form action="/dream/pages/api/post/new.js" method="POST">
          <ProductWrapper>
            <h4>상품명</h4>
            <input />
          </ProductWrapper>
          <ProductWrapper>
            <h4>스타일 요약</h4>
            <input style={{ marginLeft: "30px" }} />
          </ProductWrapper>
          <ProductWrapper style={{ height: "400px" }}>
            <h4>스타일 내용</h4>
            <input style={{ marginLeft: "30px" }} />
          </ProductWrapper>
        </form>
      </WriteWrapper>
      <ImageWrapper>
        <ImageUpload src="/imageUpload.png" />
      </ImageWrapper>
      <ButtonWrapper>
        <CancelButton type="submit">취소</CancelButton>
        <SubmitButton type="submit">등록</SubmitButton>
      </ButtonWrapper>
    </>
  );
}
