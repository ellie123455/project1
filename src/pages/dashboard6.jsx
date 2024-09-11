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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputBase,
  Avatar,
  Select,
  MenuItem,
  Modal,
  TextField,
  Button
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

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Users');
  const [filter, setFilter] = useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon sx={{ fontSize: 30 }} />, onClick: () => handleTabClick('Dashboard') },
    { text: 'Announcement', icon: <AnnouncementIcon sx={{ fontSize: 30 }} />, onClick: () => handleTabClick('Announcement') },
    { text: 'Document Approval', icon: <DocumentIcon sx={{ fontSize: 30 }} />, onClick: () => handleTabClick('Document Approval') },
    { text: 'Organization', icon: <OrganizerIcon sx={{ fontSize: 30 }} />, onClick: () => handleTabClick('Organization') },
    { text: 'Users', icon: <UserIcon sx={{ fontSize: 30 }} />, onClick: () => handleTabClick('Users') },
    { text: 'Backup & Restore', icon: <BackupIcon sx={{ fontSize: 30 }} />, onClick: () => handleTabClick('Backup & Restore') },
  ];

  const users = [
    { name: 'Christian Lana', department: 'CITE', position: 'Dean', status: 'Active' },
    { name: 'Jennifer Maceda', department: 'CBE', position: 'Program Head', status: 'Active' },
    { name: 'Romeo Buendia Jr.', department: 'CITE', position: 'Program Head', status: 'Active' },
    { name: 'Marco Sotelo', department: 'CITE', position: 'PRO', status: 'Active' },
    { name: 'Ella Mae B. Lopez', department: 'CITE', position: 'Internal Vice President', status: 'Active' }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase()) ||
    user.department.toLowerCase().includes(filter.toLowerCase()) ||
    user.position.toLowerCase().includes(filter.toLowerCase()) ||
    user.status.toLowerCase().includes(filter.toLowerCase())
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
        {activeTab === 'Users' && (
          <>
          <Box sx={{bgcolor: 'rgba(228, 228, 242, 0.5)', width: '90%', padding: 3, borderRadius:'10px', mt: 3}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%', mb: 3, mt: 2, ml: 7}}>
            <Box sx={{ display: 'flex', gap: 5 }}>
              <InputBase
                placeholder="Search..."
                value={filter}
                onChange={handleFilterChange}
                sx={{
                  borderRadius: 1,
                  backgroundColor: '#fff',
                  padding: '0 10px',
                  width: '300px',
                }}
                startAdornment={<SearchIcon sx={{ mr: 1 }} />}
              />
            <Box sx={{ display: 'flex', gap: 5 }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: 'white', color: 'black ' }}
              >
                Filter
              </Button>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{ backgroundColor: '#85FFC4', color: 'black ', width: 150 }}
              >
                Add account
              </Button>
              </Box>
              </Box>
            </Box>
            <TableContainer component={Paper} sx={{width: '90%', ml: 7}}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: 'rgba(180, 223, 205, 0.5)' }}>Name of user</TableCell>
                    <TableCell sx={{ backgroundColor: 'rgba(180, 223, 205, 0.5)' }}>Department</TableCell>
                    <TableCell sx={{ backgroundColor: 'rgba(180, 223, 205, 0.5)' }}>Position</TableCell>
                    <TableCell sx={{ backgroundColor: 'rgba(180, 223, 205, 0.5)' }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredUsers.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.department}</TableCell>
                      <TableCell>{user.position}</TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <Avatar
                            sx={{
                              width: 15,
                              height: 15,
                              bgcolor: user.status === 'Active' ? 'green' : 'grey',
                              marginRight: 1,
                            }}
                          />
                          {user.status}
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
