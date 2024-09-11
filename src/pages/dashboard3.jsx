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
import checkLogo from '../images/checkmark.png'; // Adjust the import path accordingly
import { useNavigate } from 'react-router-dom'; // Added this import


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
  const [activeTab, setActiveTab] = useState('Announcement');
  const [modalOpen, setModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [organization, setOrganization] = useState('');
  const [announcements, setAnnouncements] = useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSuccessModalClose = () => {
    setSuccessModalOpen(false);
  };

  const handleAddAnnouncement = () => {
    const newAnnouncement = {
      title,
      description,
      organization,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setAnnouncements([...announcements, newAnnouncement]);
    setTitle('');
    setDescription('');
    setOrganization('');
    setModalOpen(false);
    setSuccessModalOpen(true);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(menuItems.find((item) => item.text === tab).link); // Navigate to the linked page
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

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#EBF6F0' }}>
        <Toolbar>
        <img src={forbesLogo} className="logo1" alt="Forbes Logo" style={{ width: 30, height: 30 }} />
          <Box sx={{ flexGrow: 1 }} />
          <IconButton>
            <NotificationsIcon sx={{ fontSize: 30, color:'black' }} />
          </IconButton>
          <IconButton>
            <AccountCircleIcon sx={{ fontSize: 30,  color:'black' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={open ? handleDrawerClose : handleDrawerOpen}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                borderRadius: 2,
                backgroundColor: 'inherit',
                color: 'inherit',
                boxShadow: 0,
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
                }}
              >
                <MenuIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          {menuItems.map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={item.onClick}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  borderRadius: 2,
                  backgroundColor: activeTab === item.text ? 'white' : 'inherit',
                  color: activeTab === item.text ? 'blue' : 'inherit',
                  boxShadow: activeTab === item.text ? 5 : 0,
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
                    color: activeTab === item.text ? '#1A8BE1' : 'inherit',
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
          boxShadow: '4',
          pb: '360px',
        }}
      >
        {activeTab === 'Announcement' && (
          <>
            <Box
              sx={{
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #000',
                padding: '4px',
                borderRadius: '5px',
              }}
            >
              <SearchIcon />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Box>
            <TableContainer component={Paper} sx={{width:'90%' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: 'rgba(180, 223, 205, 0.5)' }}>Title of announcement</TableCell>
                    <TableCell sx={{ backgroundColor: 'rgba(180, 223, 205, 0.5)' }}>Date</TableCell>
                    <TableCell sx={{ backgroundColor: 'rgba(180, 223, 205, 0.5)' }}>Time</TableCell>
                    <TableCell sx={{ backgroundColor: 'rgba(180, 223, 205, 0.5)' }}>
                      <IconButton onClick={handleModalOpen}>
                        <AddIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {announcements.map((announcement, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{bgcolor:'white'}}>{announcement.title}</TableCell>
                      <TableCell>{announcement.date}</TableCell>
                      <TableCell>{announcement.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
        <Modal
          open={modalOpen}
          onClose={handleModalClose}
          aria-labelledby="add-announcement-modal-title"
          aria-describedby="add-announcement-modal-description"
        >
          <Box
            sx={{
              position: 'relative',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: '#EBF6F0',
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id="add-announcement-modal-title"
              variant="h5"
              component="h2"
              textAlign="center"
              color="#386DF8"
            >
              Create an Announcement
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              sx={{ bgcolor: 'white' }}
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="text"
              sx={{ bgcolor: 'white' }}
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Select
              margin="dense"
              id="organization"
              label="Organization"
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              fullWidth
              sx={{ color: 'black', bgcolor: 'white' }}
            >
              <MenuItem value="FYI">FYI</MenuItem>
              <MenuItem value="CJSO">CJSO</MenuItem>
              <MenuItem value="FYEL">FYEL</MenuItem>
            </Select>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button onClick={handleAddAnnouncement} variant="contained" color="primary">
                Create
              </Button>
            </Box>
          </Box>
        </Modal>
        <Modal
          open={successModalOpen}
          onClose={handleSuccessModalClose}
          aria-labelledby="success-modal-title"
          aria-describedby="success-modal-description"
        >
          <Box
            sx={{
              position: 'relative',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 300,
              bgcolor: 'background.paper',
              borderRadius: 3,
              // boxShadow: 24,
              p: 4,
            }}
          >
            <Box sx={{ marginLeft: '65px', marginRight: '70px' }}>
              <img src={checkLogo} width="100px" alt="Success Checkmark" />
            </Box>
            <Typography id="success-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
              Success
            </Typography>
            <Typography id="success-modal-description" sx={{ textAlign: 'center' }}>
              Announcement added successfully!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button onClick={handleSuccessModalClose} variant="contained" color="success">
                Okay
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
