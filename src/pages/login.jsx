import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, IconButton, InputAdornment, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import forbesLogo from '../images/forbes-logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [open, setOpen] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [recoveryEmailError, setRecoveryEmailError] = useState(false);
  const [step, setStep] = useState(1);
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    let valid = true;

    if (!email.endsWith('@forbescollege.org')) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (!password || password.length < 8) {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    if (valid) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleForgotPasswordOpen = () => {
    setForgotPasswordOpen(true);
    setStep(1);
  };

  const handleForgotPasswordClose = () => {
    setForgotPasswordOpen(false);
    setStep(1);
  };

  const handleForgotPasswordSubmit = () => {
    if (step === 1) {
      if (!recoveryEmail) {
        setRecoveryEmailError(true);
      } else {
        setRecoveryEmailError(false);
        setStep(2);
        alert(`Recovery email sent to: ${recoveryEmail}`);
      }
    } else if (step === 2) {
      if (!code || code.length !== 6) {
        setCodeError(true);
      } else {
        setCodeError(false);
        handleForgotPasswordClose();
        alert(`Code verified successfully.`);
      }
    }
  };

  const handleOkayButtonClick = () => {
    setOpen(false);
    navigate('/dashboard'); // Navigate to the dashboard page
  };

  return (
    <Container className="modal" maxWidth="xs">
      <Box className="logo-container">
        <img src={forbesLogo} className="logo1" alt="Forbes Logo" />
      </Box>
      <Box className="modal-content">
        <Typography variant="h4" component="h2">
          Welcome
        </Typography>
        <TextField
          type="email"
          placeholder="ex. example@forbescollege.org"
          className="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          required
          helperText={emailError ? (email ? 'Incorrect email!' : 'Email is required!') : ''}
        />
        <TextField
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          required
          helperText={passwordError ? (password ? 'Incorrect password!' : 'Password is required!') : ''}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  className="icon-button"
                >
                  {showPassword ? <VisibilityOff className="icon-btn1" /> : <Visibility className="icon-btn1" />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button 
          variant="text" 
          color="primary" 
          onClick={handleForgotPasswordOpen} 
          style={{ marginTop: '5px' }}
        >
          Forgot Password?
        </Button>
        <br />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleLogin} 
          style={{ marginTop: '5px' }}
        >
          Login
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ className: 'dialog' }}
        className='dialog'
      >
        <DialogTitle className="dialog-title">Login successfully!</DialogTitle>
        <DialogContent className="dialog-content">
          <DialogContentText>
            You have logged in successfully.
          </DialogContentText>
        </DialogContent>
        <DialogActions className="dialog-button">
          <Button onClick={handleOkayButtonClick} color="primary" variant="contained">
            Okay
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={forgotPasswordOpen}
        onClose={handleForgotPasswordClose}
        PaperProps={{ className: 'dialog' }}
        className='dialog'
      >
        <DialogTitle className="dialog-title">Forgot Password</DialogTitle>
        <DialogContent className="dialog-content">
          {step === 1 && (
            <>
              <DialogContentText>
                Enter your email address to receive a password recovery link.
              </DialogContentText>
              <TextField
                type="email"
                placeholder="ex. example@forbescollege.org"
                fullWidth
                margin="normal"
                value={recoveryEmail}
                onChange={(e) => setRecoveryEmail(e.target.value)}
                error={recoveryEmailError}
                required
                helperText={recoveryEmailError ? 'Email is required!' : ''}
              />
            </>
          )}
          {step === 2 && (
            <>
              <DialogContentText>
                Enter the 6-digit code sent to your email address.
              </DialogContentText>
              <TextField
                type="text"
                placeholder="Enter 6-digit code"
                fullWidth
                margin="normal"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                error={codeError}
                required
                helperText={codeError ? 'Code is required and must be 6 digits!' : ''}
              />
            </>
          )}
        </DialogContent>
        <DialogActions className="dialog-button">
          <Button onClick={handleForgotPasswordClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleForgotPasswordSubmit} color="primary" variant="contained">
            {step === 1 ? 'Submit' : 'Verify'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Login;
