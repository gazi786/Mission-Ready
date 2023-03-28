import { Box } from '@mui/material'
import React from 'react'

const DateTime = () => {
	 const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  const formattedDate = date.toLocaleString(undefined, options);
  return (
	  <Box>
		  <p>{formattedDate}</p>
	</Box>
  )
}

export default DateTime