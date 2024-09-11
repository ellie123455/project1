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
  Badge,
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
  InputBase,
  Button,
  Modal,
  TextField,
  Select,
  MenuItem
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
  Search as SearchIcon,
  Add as AddIcon
} from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import forbesLogo from '../images/forbes-logo.png';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  marginTop: 75,
  backgroundColor: '#EBF6F0',
  borderTopRightRadius: 10,
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
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
  marginTop: 75,
  backgroundColor: '#EBF6F0',
  borderTopRightRadius: 10,
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
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
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#EBF6F0',
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

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Document Approval');
  const [filter, setFilter] = useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(menuItems.find((item) => item.text === tab).link);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <DashboardIcon sx={{ fontSize: 30 }} />,
      onClick: () => handleTabClick('Dashboard'),
      link: '/dashboard', // Add a link property to each menu item
    },
    {
      text: 'Announcement',
      icon: <AnnouncementIcon sx={{ fontSize: 30 }} />,
      onClick: () => handleTabClick('Announcement'),
      link: '/announcement',
    },
    {
      text: 'Document Approval',
      icon: <DocumentIcon sx={{ fontSize: 30 }} />,
      onClick: () => handleTabClick('Document Approval'),
      link: '/document-approval',
    },
    {
      text: 'Organization',
      icon: <OrganizerIcon sx={{ fontSize: 30 }} />,
      onClick: () => handleTabClick('Organization'),
      link: '/organization',
    },
    {
      text: 'Users',
      icon: <UserIcon sx={{ fontSize: 30 }} />,
      onClick: () => handleTabClick('Users'),
      link: '/users',
    },
    {
      text: 'Backup & Restore',
      icon: <BackupIcon sx={{ fontSize: 30 }} />,
      onClick: () => handleTabClick('Backup & Restore'),
      link: '/backup-restore',
    },
  ];

  const proposals = [
    { title: 'Forbes Young Innovators Workshop Proposal', organization: 'FYI', date: 'August 26, 2024', status: 'Pending' },
    { title: 'Forbes Young Entrepreneurs and Leaders By-laws', organization: 'FYEL', date: 'August 22, 2024', status: 'Pending' },
    { title: 'Criminal Justice Student Organization By-laws', organization: 'CJSO', date: 'August 20, 2024', status: 'Pending' },
  ];

  const filteredProposals = proposals.filter(proposal =>
    proposal.organization.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#EBF6F0' }}>
        <Toolbar>
        <img src={forbesLogo} className="logo1" alt="Forbes Logo" style={{ width: 30, height: 30 }} />
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
                  backgroundColor: activeTab === item.text ? 'white' : 'inherit',
                  color: activeTab === item.text ? 'blue' : 'inherit',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: activeTab === item.text ? '#1A8BE1' : 'grey',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
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
          alignItems: 'center',
        }}
      >
        {activeTab === 'Document Approval' && (
          <Box sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <Select
                value={filter}
                onChange={handleFilterChange}
                displayEmpty
                variant="outlined"
                size="small"
                sx={{ width: 250 }}
              >
                <MenuItem value="">
                  <em>All Organizations</em>
                </MenuItem>
                <MenuItem value="FYI">FYI</MenuItem>
                <MenuItem value="FYEL">FYEL</MenuItem>
                <MenuItem value="CJSO">CJSO</MenuItem>
              </Select>
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: 'rgba(180, 223, 205, 0.5)' }}>Title of proposal</TableCell>
                    <TableCell sx={{ backgroundColor: 'rgba(180, 223, 205, 0.5)' }}>Organization</TableCell>
                    <TableCell sx={{ backgroundColor: 'rgba(180, 223, 205, 0.5)' }}>Date submitted</TableCell>
                    <TableCell sx={{ backgroundColor: 'rgba(180, 223, 205, 0.5)' }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredProposals.map((proposal, index) => (
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
          </Box>
        )}
      </Box>
    </Box>
  );
}
