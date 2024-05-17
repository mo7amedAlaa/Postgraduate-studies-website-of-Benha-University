import React, { useState } from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';
import { getVisibleRows } from '@mui/x-data-grid/internals';
import { IconButton } from '@mui/material';
import { GridMenuIcon } from '@mui/x-data-grid';

// import Chats from './Chats';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className={'bg-[#3e3c61]   w-full md:hidden '}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setOpen(!open)}
        >
          <GridMenuIcon />
        </IconButton>
      </div>

      <div
        className={
          open == true
            ? 'sidebar overflow-y-scroll w-full  h-full overflow-ellipsis   '
            : 'hidden sidebar overflow-y-scroll  h-full overflow-ellipsis'
        }
      >
        <Navbar />
        <Search />
        <Chats />
      </div>
    </div>
  );
};

export default Sidebar;
