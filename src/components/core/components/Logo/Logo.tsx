import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { Avocado } from '@avocado/icons';

const StyledAvocado = styled(Avocado)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledAvocado />
    </Box>
  );
}
