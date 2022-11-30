import { tw } from 'twind';
import { css, keyframes } from 'twind/css';

const placeholderSkeleton = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`

export const skeletonCommon = tw(css`
  background: linear-gradient(145deg, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  border-radius: 2px;
  animation: ${placeholderSkeleton} 3s forwards linear infinite;
`)
