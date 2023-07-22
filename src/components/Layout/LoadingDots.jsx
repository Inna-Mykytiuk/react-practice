import { LoadingDots, Dot } from './Layout.styled';

export const LoadingIndicator = () => {
  return (
    <LoadingDots>
      <Dot delay="0s" />
      <Dot delay=".2s" />
      <Dot delay=".4s" />
    </LoadingDots>
  );
};
