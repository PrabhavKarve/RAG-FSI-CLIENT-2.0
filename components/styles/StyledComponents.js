import { styled } from '@mui/material/styles';
import { Box, Paper, Typography, IconButton } from '@mui/material';

// Styled Components for dynamic styling

// Main Container
export const MainContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  zIndex: 1,
}));

// Header
export const Header = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  border: 'none',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  padding: '24px 32px',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)',
    pointerEvents: 'none',
  }
}));

// Header Title
export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: '#1f2937',
  position: 'relative',
  zIndex: 1,
  background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '-0.02em'
}));

// Content Container
export const ContentContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: '32px',
  position: 'relative',
  zIndex: 1
}));

// Search Input Container
export const SearchContainer = styled(Box)(({ theme }) => ({
  marginBottom: '48px'
}));

// Send Button
export const SendButton = styled(IconButton)(({ theme }) => ({
  marginRight: '-8px',
  background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(135deg, #4f46e5 0%, #db2777 100%)',
    transform: 'scale(1.05)',
  },
  transition: 'all 0.3s ease'
}));

// Message Container
export const MessageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  marginBottom: '48px'
}));

// Message Question Container
export const MessageQuestionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end'
}));

// Message Answer Container
export const MessageAnswerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start'
}));

// Message Bubble - Question
export const MessageBubbleQuestion = styled(Paper)(({ theme }) => ({
  padding: '24px',
  maxWidth: '70%',
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  borderRadius: '20px 20px 5px 20px',
  position: 'relative',
  boxShadow: '0 8px 32px rgba(99, 102, 241, 0.2)',
  elevation: 0
}));

// Message Bubble - Answer
export const MessageBubbleAnswer = styled(Paper)(({ theme }) => ({
  padding: '24px',
  maxWidth: '80%',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  borderRadius: '20px 20px 20px 5px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  position: 'relative',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  elevation: 0,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%)',
    borderRadius: '20px 20px 20px 5px',
    pointerEvents: 'none',
  }
}));

// Message Text - Question
export const MessageTextQuestion = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: 'white',
  lineHeight: 1.5
}));

// Message Text - Answer
export const MessageTextAnswer = styled(Typography)(({ theme }) => ({
  lineHeight: 1.6,
  color: '#1f2937',
  position: 'relative',
  zIndex: 1
}));

// Dashboard Container
export const DashboardContainer = styled(Box)(({ theme }) => ({
  marginBottom: '48px'
}));

// Dashboard Paper
export const DashboardPaper = styled(Paper)(({ theme }) => ({
  padding: '48px',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  borderRadius: '24px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
  position: 'relative',
  overflow: 'hidden',
  elevation: 0,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)',
    pointerEvents: 'none',
  }
}));

// Dashboard Header
export const DashboardHeader = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  marginBottom: '48px'
}));

// Dashboard Title
export const DashboardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: '#1f2937',
  background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '8px',
  textAlign: 'center'
}));

// Dashboard Subtitle
export const DashboardSubtitle = styled(Typography)(({ theme }) => ({
  color: '#6b7280',
  textAlign: 'center',
  fontWeight: 500
}));

// Dashboard Grid
export const DashboardGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '48px',
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr'
  }
}));

// Metric Card Base
export const MetricCard = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'cardType',
})(({ theme, cardType }) => {
  const getCardStyles = (type) => {
    switch (type) {
      case 'balance':
        return {
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          '&::before': {
            background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)'
          }
        };
      case 'pnl':
        return {
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)',
          border: '1px solid rgba(236, 72, 153, 0.2)',
          '&::before': {
            background: 'linear-gradient(90deg, #ec4899 0%, #f472b6 100%)'
          }
        };
      case 'cashflow':
        return {
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
          border: '1px solid rgba(16, 185, 129, 0.2)',
          '&::before': {
            background: 'linear-gradient(90deg, #10b981 0%, #34d399 100%)'
          }
        };
      case 'cross':
        return {
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
          border: '1px solid rgba(245, 158, 11, 0.2)',
          '&::before': {
            background: 'linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%)'
          }
        };
      default:
        return {};
    }
  };

  return {
    padding: '24px',
    borderRadius: '18px',
    position: 'relative',
    overflow: 'hidden',
    elevation: 0,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
    },
    ...getCardStyles(cardType)
  };
});

// Metric Header
export const MetricHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '24px'
}));

// Metric Icon
export const MetricIcon = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'cardType',
})(({ theme, cardType }) => {
  const getIconStyles = (type) => {
    switch (type) {
      case 'balance':
        return {
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          boxShadow: '0 8px 20px rgba(99, 102, 241, 0.3)'
        };
      case 'pnl':
        return {
          background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
          boxShadow: '0 8px 20px rgba(236, 72, 153, 0.3)'
        };
      case 'cashflow':
        return {
          background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
          boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)'
        };
      case 'cross':
        return {
          background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
          boxShadow: '0 8px 20px rgba(245, 158, 11, 0.3)'
        };
      default:
        return {};
    }
  };

  return {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '16px',
    ...getIconStyles(cardType)
  };
});

// Metric Icon Text
export const MetricIconText = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontSize: '20px'
}));

// Metric Title
export const MetricTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: '#1f2937',
  fontSize: '20px'
}));

// Metric Content
export const MetricContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'cardType',
})(({ theme, cardType }) => {
  const getScrollbarStyles = (type) => {
    switch (type) {
      case 'balance':
        return {
          '&::-webkit-scrollbar-track': {
            background: 'rgba(99, 102, 241, 0.1)'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)'
            }
          }
        };
      case 'pnl':
        return {
          '&::-webkit-scrollbar-track': {
            background: 'rgba(236, 72, 153, 0.1)'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #db2777 0%, #f43f5e 100%)'
            }
          }
        };
      case 'cashflow':
        return {
          '&::-webkit-scrollbar-track': {
            background: 'rgba(16, 185, 129, 0.1)'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)'
            }
          }
        };
      case 'cross':
        return {
          '&::-webkit-scrollbar-track': {
            background: 'rgba(245, 158, 11, 0.1)'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)'
            }
          }
        };
      default:
        return {};
    }
  };

  return {
    maxHeight: '750px',
    overflowY: 'auto',
    paddingRight: '8px',
    '&::-webkit-scrollbar': {
      width: '6px'
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: '3px'
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '3px'
    },
    ...getScrollbarStyles(cardType)
  };
});

// Metric Item
export const MetricItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'cardType',
})(({ theme, cardType }) => {
  const getItemStyles = (type) => {
    switch (type) {
      case 'balance':
        return {
          border: '1px solid rgba(99, 102, 241, 0.15)',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 30px rgba(99, 102, 241, 0.2)',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(99, 102, 241, 0.25)'
          }
        };
      case 'pnl':
        return {
          border: '1px solid rgba(236, 72, 153, 0.15)',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 30px rgba(236, 72, 153, 0.2)',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(236, 72, 153, 0.25)'
          }
        };
      case 'cashflow':
        return {
          border: '1px solid rgba(16, 185, 129, 0.15)',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 30px rgba(16, 185, 129, 0.2)',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(16, 185, 129, 0.25)'
          }
        };
      case 'cross':
        return {
          border: '1px solid rgba(245, 158, 11, 0.15)',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 30px rgba(245, 158, 11, 0.2)',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(245, 158, 11, 0.25)'
          }
        };
      default:
        return {};
    }
  };

  return {
    marginBottom: '24px',
    padding: '24px',
    borderRadius: '18px',
    background: 'rgba(255, 255, 255, 0.8)',
    transition: 'all 0.3s ease',
    position: 'relative',
    ...getItemStyles(cardType)
  };
});

// Metric Item Name
export const MetricItemName = styled(Typography)(({ theme }) => ({
  color: '#374151',
  fontWeight: 600,
  marginBottom: '8px',
  fontSize: '15px',
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
}));

// Metric Item Value
export const MetricItemValue = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'cardType',
})(({ theme, cardType }) => {
  const getValueStyles = (type) => {
    switch (type) {
      case 'balance':
        return {
          color: '#6366f1',
          textShadow: '0 1px 2px rgba(99, 102, 241, 0.1)'
        };
      case 'pnl':
        return {
          color: '#ec4899',
          textShadow: '0 1px 2px rgba(236, 72, 153, 0.1)'
        };
      case 'cashflow':
        return {
          color: '#10b981',
          textShadow: '0 1px 2px rgba(16, 185, 129, 0.1)'
        };
      case 'cross':
        return {
          color: '#f59e0b',
          textShadow: '0 1px 2px rgba(245, 158, 11, 0.1)'
        };
      default:
        return {};
    }
  };

  return {
    fontWeight: 800,
    fontSize: '22px',
    lineHeight: 1.2,
    marginBottom: '8px',
    ...getValueStyles(cardType)
  };
});

// Metric Item Description
export const MetricItemDescription = styled(Typography)(({ theme }) => ({
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: 1.4,
  fontStyle: 'italic'
}));

