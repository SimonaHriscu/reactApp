import { Button } from '@material-ui/core';

export default function ButtonComponent({ children, color, onClick }) {
  return (
    <Button variant="contained" color={color} onClick={onClick}>
      {children}
    </Button>
  );
}
