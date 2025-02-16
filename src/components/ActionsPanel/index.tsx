import Box from '@mui/material/Box';

import CopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import TagIcon from '@mui/icons-material/Tag';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreIcon from '@mui/icons-material/MoreVert';

const iconStyle = {
  marginRight: '5px'
}

const ActionsPanel = () => {
  return (
    <Box sx={{ display: 'flex', marginTop: '15px' }}>
        
        <TagIcon sx={iconStyle} color='secondary'/>
        <BookmarkIcon sx={iconStyle} color='secondary'/>
        <MoreIcon sx={iconStyle} color='secondary'/>
      </Box>
  );
}

export default ActionsPanel;
