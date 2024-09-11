import React, { useState } from 'react';
import {
  Box,
  CssBaseline,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Avatar,
  Card,
  CardContent,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard as DashboardIcon,
  Campaign as AnnouncementIcon,
  Description as DocumentIcon,
  CorporateFare as OrganizerIcon,
  Group as UserIcon,
  Backup as BackupIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  FilterList as FilterListIcon,
} from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import forbesLogo from '../images/forbes-logo.png';
import citeLogo from '../images/fyi-logo.png'; // Adjust the import path accordingly

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: '#EBF6F0',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
  backgroundColor: '#EBF6F0',
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);


const proposalData = [
  { title: "Forbes Young Innovators Workshop Proposal", organization: "FYI", date: "August 26, 2024", status: "Pending" },
  { title: "Forbes Young Entrepreneurs and Leaders By-laws", organization: "FYEL", date: "August 22, 2024", status: "Approved" },
  { title: "Criminal Justice Student Organization By-laws", organization: "CJSO", date: "August 20, 2024", status: "Rejected" },
  { title: "Forbes Young Innovators Workshop Proposal", organization: "FYI", date: "August 26, 2024", status: "Pending" },
  { title: "Forbes Young Entrepreneurs and Leaders By-laws", organization: "FYEL", date: "August 22, 2024", status: "Approved" },
  { title: "Criminal Justice Student Organization By-laws", organization: "CJSO", date: "August 20, 2024", status: "Rejected" },
  { title: "Forbes Young Innovators Workshop Proposal", organization: "FYI", date: "August 26, 2024", status: "Pending" },
  { title: "Forbes Young Entrepreneurs and Leaders By-laws", organization: "FYEL", date: "August 22, 2024", status: "Approved" },
  { title: "Criminal Justice Student Organization By-laws", organization: "CJSO", date: "August 20, 2024", status: "Rejected" },
  { title: "Forbes Young Innovators Workshop Proposal", organization: "FYI", date: "August 26, 2024", status: "Pending" },
  { title: "Forbes Young Entrepreneurs and Leaders By-laws", organization: "FYEL", date: "August 22, 2024", status: "Approved" },
  { title: "Criminal Justice Student Organization By-laws", organization: "CJSO", date: "August 20, 2024", status: "Rejected" },
  { title: "Forbes Young Innovators Workshop Proposal", organization: "FYI", date: "August 26, 2024", status: "Pending" },
  { title: "Forbes Young Entrepreneurs and Leaders By-laws", organization: "FYEL", date: "August 22, 2024", status: "Approved" },
  { title: "Criminal Justice Student Organization By-laws", organization: "CJSO", date: "August 20, 2024", status: "Rejected" },
];

const ProposalTable = ({ filter, statusFilter }) => {
  const filteredData = proposalData.filter((proposal) =>
    proposal.title.toLowerCase().includes(filter.toLowerCase()) &&
    (statusFilter === '' || proposal.status.toLowerCase() === statusFilter.toLowerCase())
  );

  return (
    <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
      <Table aria-label="proposal table">
        <TableHead>
          <TableRow  sx={{ backgroundColor:'#B4DFCD'}}>
            <TableCell sx={{ fontWeight: 'bold' }}>Title of proposal</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Organization</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Date submitted</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((proposal, index) => (
            <TableRow key={index}>
              <TableCell>{proposal.title}</TableCell>
              <TableCell>{proposal.organization}</TableCell>
              <TableCell>{proposal.date}</TableCell>
              <TableCell>{proposal.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [selectedItem, setSelectedItem] = useState('Dashboard');
  const [statusAnchorEl, setStatusAnchorEl] = useState(null); // Anchor element for status filter menu
  const [statusFilter, setStatusFilter] = useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleStatusClick = (event) => {
    setStatusAnchorEl(event.currentTarget);
  };

  const handleStatusClose = () => {
    setStatusAnchorEl(null);
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    setStatusAnchorEl(null); // Close the menu after selecting a status
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon sx={{ fontSize: 30 }} />, onClick: () => handleTabClick('Dashboard') },
    { text: 'Announcement', icon: <AnnouncementIcon sx={{ fontSize: 30 }} />, onClick: () => handleTabClick('Announcement') },
    { text: 'Document Approval', icon: <DocumentIcon sx={{ fontSize: 30 }} />, onClick: () => handleTabClick('Document Approval') },
    { text: 'Organization', icon: <OrganizerIcon sx={{ fontSize: 30 }} />, onClick: () => handleTabClick('Organization') },
    { text: 'Users', icon: <UserIcon sx={{ fontSize: 30 }} />, onClick: () => handleTabClick('Users') },
    { text: 'Backup & Restore', icon: <BackupIcon sx={{ fontSize: 30 }} />, onClick: () => handleTabClick('Backup & Restore') },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#EBF6F0' }}>
        <Toolbar>
          <IconButton
            className="icon-btn"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={forbesLogo} className="logo" alt="Forbes logo" />
          <Box sx={{ flexGrow: 1 }} />
          <IconButton className='icon-btn'>
            <NotificationsIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton className='icon-btn'>
            <AccountCircleIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ backgroundColor: '#EBF6F0' }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                     onClick={() => handleTabClick(item.text)}
                   sx={{
                     minHeight: 48,
                     justifyContent: open ? 'initial' : 'center',
                     px: 2.5,
                     borderRadius: 2,
                       backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: selectedItem === item.text ? '#1976d2' : 'inherit',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: '#EBF6F0',
          padding: 3,
          marginLeft: '10px',
          marginTop: '75px',
          display: 'flex',
          flexDirection: 'column',
          borderTopLeftRadius: '10px',
          boxShadow: '4'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Proposals
          </Typography>
          <Button
            variant="outlined"
            onClick={handleStatusClick}
            sx={{
              textTransform: 'none',
              backgroundColor: '#fff',
              '&:hover': {
                backgroundColor: '#fff',
              },
            }}
          >
            Filter <FilterListIcon sx={{ ml: 1 }} />
          </Button>
          <Menu
            anchorEl={statusAnchorEl}
            open={Boolean(statusAnchorEl)}
            onClose={handleStatusClose}
          >
            <MenuItem onClick={() => handleStatusFilter('')}>All Statuses</MenuItem>
            <MenuItem onClick={() => handleStatusFilter('Pending')}>Pending</MenuItem>
            <MenuItem onClick={() => handleStatusFilter('Approved')}>Approved</MenuItem>
            <MenuItem onClick={() => handleStatusFilter('Rejected')}>Rejected</MenuItem>
          </Menu>
        </Box>
        <ProposalTable filter={filter} statusFilter={statusFilter} />
      </Box>
    </Box>
  );
}
