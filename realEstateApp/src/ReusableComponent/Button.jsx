import { Button } from '@chakra-ui/react';

function Btn({ text }) {
  return (
    <Button
      bg="brand.btnColor"
      size="sm"
      py="9px"
      px="18px"
      fontWeight="semibold"
      fontSize="12px"
      // height="32px"
      // width="64px"
      // border="2px"
      borderRadius="0px"
      // borderColor=""
    >
      {text}
    </Button>
  );
}

export default Btn;
