import { css, keyframes } from '@emotion/css';

const placeholderSkeleton = keyframes`
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
`

export const skeletonCommon = css`
  background: linear-gradient(145deg, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  border-radius: 2px;
  animation: ${placeholderSkeleton} 1s forwards linear infinite;
`

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
