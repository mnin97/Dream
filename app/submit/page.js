import {
  BlackButton,
  Button,
  ButtonWrapper,
  ImageContainer,
  ImageWrapper,
  ProductContent,
  ProductContentInput,
  ProductContentWrapper,
  ProductImage,
  ProductImageUpload,
  ProductPrice,
  ProductPriceInput,
  ProductPriceWrapper,
  ProductSummary,
  ProductSummaryInput,
  ProductSummaryWrapper,
  ProductTag,
  ProductTagInput,
  ProductTagWrapper,
  ProductTitle,
  ProductTitleInput,
  ProductTitleWrapper,
  RagisterTitle,
  RagisterWrapper,
  RegisterProductWrapper,
  Title,
  TitleWrapper,
  WhiteButton,
} from "./submit.style";

export default function SubmitPage() {
  return (
    <>
      <form action="/api/post/new" method="POST">
        <RegisterProductWrapper>
          <RagisterWrapper>
            <RagisterTitle>상품 등록</RagisterTitle>
          </RagisterWrapper>

          <ProductTitleWrapper>
            <ProductTitle>상품명</ProductTitle>
            <ProductTitleInput
              type="text"
              placeholder="상품명을 작성해주세요."
              name="title"
            />
          </ProductTitleWrapper>
          <ProductSummaryWrapper>
            <ProductSummary>상품 요약</ProductSummary>
            <ProductSummaryInput
              type="text"
              placeholder="상품요약을 작성해주세요."
              name="summary"
            />
          </ProductSummaryWrapper>
          <ProductContentWrapper>
            <ProductContent>상품 내용</ProductContent>
            <ProductContentInput
              type="text"
              placeholder="상품을 설명해주세요."
              name="content"
            />
          </ProductContentWrapper>
          <ProductPriceWrapper>
            <ProductPrice>판매 가격</ProductPrice>
            <ProductPriceInput
              type="text"
              placeholder="판매 가격을 입력해주세요."
              name="price"
            />
          </ProductPriceWrapper>
          <ProductTagWrapper>
            <ProductTag>태그 입력</ProductTag>
            <ProductTagInput
              type="text"
              placeholder="#태그 #태그 #태그"
              name="tag"
            />
          </ProductTagWrapper>
          <ImageContainer>
            <h3>사진 첨부</h3>
            <ImageWrapper>
              <ProductImage src="/shose.png" />
              <ProductImageUpload>Upload</ProductImageUpload>
            </ImageWrapper>
          </ImageContainer>
          <ButtonWrapper>
            <WhiteButton>취소</WhiteButton>
            <BlackButton type="submit">등록</BlackButton>
          </ButtonWrapper>
        </RegisterProductWrapper>
      </form>
    </>
  );
}
