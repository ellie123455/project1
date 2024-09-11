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
  const [activeTab, setActiveTab] = useState('Organization');
  const [filter, setFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon sx={{ fontSize: 30 }} />, onClick: () => handleTabClick('Dashboard') },
    { text: 'Announcement', icon: <AnnouncementIcon sx={{ fontSize: 30 }} />, onClick: () => handleTabClick('Announcement') },
    { text: 'Document Approval', icon: <DocumentIcon sx={{ fontSize: 30 }} /> , onClick: () => handleTabClick('Document Approval')},
    { text: 'Organization', icon: <OrganizerIcon sx={{ fontSize: 30 }} />, onClick: () => handleTabClick('Organization')  },
    { text: 'Users', icon: <UserIcon sx={{ fontSize: 30 }} />, onClick: () => handleTabClick('Users')   },
    { text: 'Backup & Restore', icon: <BackupIcon sx={{ fontSize: 30 }} />, onClick: () => handleTabClick('Backup & Restore') },
  ];

  const departments = [
    { department: 'College of Information Technology', organization: '1', members: '20' },
    { department: 'College of Business Education', organization: '1', members: '20' },
    { department: 'College of Criminal Justice Education', organization: '1', members: '20' },
  ];

  const filteredDepartments = departments.filter(department =>
    department.department.toLowerCase().includes(filter.toLowerCase())
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
        {activeTab === 'Organization' && (
          <>
          <Box sx={{bgcolor: 'rgba(228, 228, 242, 0.5)', width: '100%', padding: 3, borderRadius:'10px', mt: 3}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
              <InputBase
                sx={{ backgroundColor: 'white', padding: '0 10px', borderRadius: '5px' }}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleFilterChange}
              />
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{ backgroundColor: '#007bff', color: 'white' }}
                onClick={handleOpenModal}
              >
                Add Department
              </Button>
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: 'rgba(180, 223, 205, 0.5)' }}>Department</TableCell>
                    <TableCell sx={{ backgroundColor: 'rgba(180, 223, 205, 0.5)' }}>Organization</TableCell>
                    <TableCell sx={{ backgroundColor: 'rgba(180, 223, 205, 0.5)' }}>Members</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredDepartments.map((row) => (
                    <TableRow key={row.department}>
                      <TableCell>{row.department}</TableCell>
                      <TableCell>{row.organization}</TableCell>
                      <TableCell>{row.members}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </Box>
          </>
        )}
        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          aria-labelledby="create-department-modal"
          aria-describedby="create-department-form"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" component="h2">
              Create Department
            </Typography>
            <Box component="form" sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Department"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Course"
                variant="outlined"
                margin="normal"
              />
              <Select
                fullWidth
                variant="outlined"
                margin="normal"
                displayEmpty
                defaultValue=""
                renderValue={(selected) => (selected.length === 0 ? 'Dean' : selected)}
              >
                <MenuItem disabled value="">
                  Dean
                </MenuItem>
                <MenuItem value="Dean1">Dean 1</MenuItem>
                <MenuItem value="Dean2">Dean 2</MenuItem>
              </Select>
              <Select
                fullWidth
                variant="outlined"
                margin="normal"
                displayEmpty
                defaultValue=""
                renderValue={(selected) => (selected.length === 0 ? 'Program Head' : selected)}
              >
                <MenuItem disabled value="">
                  Program Head
                </MenuItem>
                <MenuItem value="Head1">Program Head 1</MenuItem>
                <MenuItem value="Head2">Program Head 2</MenuItem>
              </Select>
              <Button
                variant="contained"
                sx={{ mt: 2, backgroundColor: '#007bff', color: 'white' }}
                fullWidth
              >
                Create
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
