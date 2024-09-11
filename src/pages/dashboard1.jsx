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
  Card,
  CardContent,
  Grid,
  Paper,
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
  NotificationsNoneOutlined as NotificationsIcon,
  AccountCircleOutlined as AccountCircleIcon,
  EventOutlined as EventIcon,
} from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { useNavigate } from 'react-router-dom'; // Added this import
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
  marginTop: 75,
  borderTopRightRadius: 10,
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(6)} + 1px)`,
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
      '& .MuiDrawer-paper': {
        ...openedMixin(theme),
        overflow: 'hidden', 
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        ...closedMixin(theme),
        overflow: 'hidden', 
      },
    }),
  })
);


export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(menuItems.find((item) => item.text === tab).link); // Navigate to the linked page
  };
  const handleLogout = () => navigate('/'); // Redirect to login page
  const handleProfileMenuOpen = () => {
    console.log('Profile menu opened'); // Placeholder for profile menu open logic
  };

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <DashboardIcon sx={{ fontSize: 30 }} />,
      onClick: () => handleTabClick('Dashboard'),
      link: '/dashboard',
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

  const eventCards = [
    { text: 'CITE',text1: 'Forbes Young Innovators', img: citeLogo },
    { text: 'CITE',text1: 'Forbes Young Innovators', img: citeLogo },
    { text: 'CITE',text1: 'Forbes Young Innovators', img: citeLogo },
    { text: 'CITE',text1: 'Forbes Young Innovators', img: citeLogo },

  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <img src={forbesLogo} className="logo1" alt="Forbes Logo" style={{ width: 30, height: 30 }} />
          <Box sx={{ ml: 'auto' }}>
            <IconButton>
              <NotificationsIcon sx={{ fontSize: 30, color: 'black' }} />
            </IconButton>
            <IconButton onClick={handleProfileMenuOpen}>
              <AccountCircleIcon sx={{ fontSize: 30, color: 'black' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box>
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
      </Box>

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
          boxShadow: 4,
        }}
      >
        {activeTab === 'Dashboard' && (
          <>
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <Typography variant="h4" gutterBottom>
                  Good Day Admin!
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Tuesday, June 04, 2024
                </Typography>
                <Grid container spacing={3} sx={{ marginTop: 1 }}>
                    <Grid item xs={8}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Card sx={{ backgroundColor: '#54B173', borderRadius: '10px' }}>
                            <CardContent>
                              <Typography variant="h5" component="div">
                                Announcements
                              </Typography>
                              <Typography variant="h4" component="div" sx={{ color: 'white' }}>
                                2
                              </Typography>
                              <Typography variant="subtitle1" component="div" sx={{ color: 'white' }}>
                                2 New Announcement 
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                        <Grid item xs={6}>
                          <Card sx={{ backgroundColor: '#488BEF', borderRadius: '10px' }}>
                            <CardContent>
                              <Typography variant="h5" component="div">
                                Proposals
                              </Typography>
                              <Typography variant="h4" component="div" sx={{ color: 'white' }}>
                                3
                              </Typography>
                              <Typography variant="subtitle1" component="div" sx={{ color: 'white' }}>
                                2 New Proposals 
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
                  Event Cards
                </Typography>
                <Grid container spacing={2}>
                  {eventCards.map((card, index) => (
                    <Grid item xs={3} md={3} key={index}>
                      <Card
                        sx={{
                          backgroundColor: '#40C4FF',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          padding: 2,
                          height: '100%',
                          boxSizing: 'border-box',
                        }}
                      >
                        <img
                          src={card.img}
                          alt="Event logo"
                          style={{ width: 30, height: 30, marginRight: 10, borderRadius: 20 }}
                        />
                        <Typography variant="p" component="div" sx={{ color: 'black' }}>
                          {card.text}
                        </Typography>
                        <br />
                        <Typography variant="p" component="div" sx={{ color: 'white' }}>
                          {card.text1}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={0} sx={{ padding: 2, backgroundColor: '#6F9675', borderRadius: '10px' }}>
                  <IconButton>
                    <EventIcon/>
                  </IconButton>
                  <Typography variant="h6" component="div">
                    Upcoming Events
                  </Typography>
                  <List sx={{ margin: '10px', borderRadius: '5px' }}>
                    <ListItem sx={{ backgroundColor: 'white', marginBottom: '5px', borderRadius: '5px' }}>
                      <ListItemText primary="June 16" secondary="Meeting with Research Group" />
                    </ListItem>
                    <ListItem sx={{ backgroundColor: 'white', marginBottom: '5px', borderRadius: '5px' }}>
                      <ListItemText primary="June 17" secondary="Team Building Activities" />
                    </ListItem>
                    <ListItem sx={{ backgroundColor: 'white', marginBottom: '5px', borderRadius: '5px' }}>
                      <ListItemText primary="June 18" secondary="Workshop on Innovation" />
                    </ListItem>
                    <ListItem sx={{ backgroundColor: 'white', marginBottom: '5px', borderRadius: '5px' }}>
                      <ListItemText primary="June 23" secondary="End of Semester Celebration" />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    </Box>
  );
}