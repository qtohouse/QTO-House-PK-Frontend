import React from 'react';
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const StyledButton = styled(MuiButton)(({ theme, variant, size }) => ({
  borderRadius: '6px',
  textTransform: 'none',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  // Variant styles
  ...(variant === 'primary' && {
    backgroundColor: '#FDC022',
    color: '#000000',
    '&:hover': {
      backgroundColor: '#e0a800',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
  }),
  ...(variant === 'secondary' && {
    backgroundColor: '#D9D9D9',
    color: '#000000',
    '&:hover': {
      backgroundColor: '#c0c0c0',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
  }),
  ...(variant === 'dark' && {
    backgroundColor: '#000000',
    color: 'white',
    '&:hover': {
      backgroundColor: '#333333',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
  }),
  ...(variant === 'edit' && {
    backgroundColor: '#1976d2', // Blue for Edit
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#115293',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
  }),
  ...(variant === 'delete' && {
    backgroundColor: '#d32f2f', // Red for Delete
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#b71c1c',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
  }),
  ...(variant === 'assign' && {
    backgroundColor: '#1976d2', // Blue for Assign User
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#115293',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
  }),

  // Base size styles
  ...(size === 'small' && {
    padding: '0.25rem 0.75rem',
    fontSize: '0.5rem',
    [theme.breakpoints.up('sm')]: {
      padding: '0.25rem 0.75rem',
      fontSize: '0.55rem',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0.25rem 0.75rem',
      fontSize: '0.54rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0.4rem 1.2rem',
      fontSize: '0.6rem',
    },
  }),
  ...(size === 'medium' && {
    padding: '0.3rem 1rem',
    fontSize: '0.6rem',
    [theme.breakpoints.up('sm')]: {
      padding: '0.4rem 2rem',
      fontSize: '0.6rem',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0.45rem 2.1rem',
      fontSize: '0.8rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0.48rem 2.3rem',
      fontSize: '1rem',
    },
  }),
  ...(size === 'large' && {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    [theme.breakpoints.up('sm')]: {
      padding: '0.6rem 1.2rem',
      fontSize: '1.125rem',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0.7rem 1.5rem',
      fontSize: '1.25rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0.9rem 2rem',
      fontSize: '1.5rem',
    },
  }),

  '&.Mui-disabled': {
    backgroundColor: '#e0e0e0',
    color: '#a0a0a0',
    boxShadow: 'none',
  },

  // Ensure icons scale with button size
  '& .MuiSvgIcon-root': {
    fontSize: size === 'small' ? '1rem' : size === 'medium' ? '1.25rem' : '1.5rem',
  },
}));

const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  loading = false,
  startIcon,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled || loading}
      startIcon={startIcon}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;