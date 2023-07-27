import { StyledButton } from './Button.styled';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  className,
  ...otherProps
}) => {
  return (
    <StyledButton
      selected={selected}
      type={type}
      className={className}
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
};
