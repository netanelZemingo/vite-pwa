import { styled } from "styled-components";
const CachedImageImage = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transform: translate(50%, -100%);
  right: 50%;
  top: 50%;
  font-size: large;
`;
export const CachedAssets = () => {
  return (
    <CachedImageImage>
      <p>this image asset is cached! because its inside our manifest</p>
      <img width={100} src="/textPic.png" alt="" />
    </CachedImageImage>
  );
};
