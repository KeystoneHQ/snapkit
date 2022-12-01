import { css, keyframes } from '@emotion/css';

const placeholderSkeleton = keyframes`
  0%{
    transform:translateX(-37.5%)
  }
  100%{
    transform:translateX(37.5%);
  }
`

export const skeletonCommon = css`
  position: relative;
  width: 100%;
  z-index: 0;
  overflow: hidden;
  background: transparent;
  border-radius: 2px;
  &::after {
    position: absolute;
    top: 0;
    inset-inline-end: -150%;
    bottom: 0;
    inset-inline-start: -150%;
    background: linear-gradient(90deg,rgba(0,0,0,0.04) 25%,rgba(0,0,0,0.08) 37%,rgba(0,0,0,0.04) 63%);
    animation-name: ${placeholderSkeleton};
    animation-duration: 1.4s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    content: "";
  }
`

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
