"use client"

import { useState } from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import { gql, useLazyQuery } from "@apollo/client"
import Sidebar from "@/components/sidebar"     // ✅ your file is sidebar.js
import MainContent from "@/components/main-content"

// GraphQL query for company metrics
const COMPANY_METRICS_QUERY = gql`
  query GetCompanyMetrics($company: String!) {
    companyMetrics(company: $company) {
      balanceSheet {
        name
        value
        status
        description
      }
      pnl {
        name
        value
        status
        description
      }
      cashflow {
        name
        value
        status
        description
      }
      crossStatement {
        name
        value
        status
        description
      }
    }
  }
`

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#6366f1",
      light: "#818cf8",
      dark: "#4f46e5",
    },
    secondary: {
      main: "#ec4899",
      light: "#f472b6",
      dark: "#db2777",
    },
    background: {
      default: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      paper: "rgba(255, 255, 255, 0.95)",
    },
    text: {
      primary: "#1f2937",
      secondary: "#6b7280",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
})

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [getMetrics, { data, loading, error }] = useLazyQuery(COMPANY_METRICS_QUERY)

  const handleCompanySelect = (companyName) => {
    getMetrics({ variables: { company: companyName } })
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        display: "flex", 
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
          pointerEvents: "none",
        }
      }}>
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          onCompanySelect={handleCompanySelect}
        />
        <MainContent 
          activeSection={activeSection} 
          companyMetrics={data?.companyMetrics}
          metricsLoading={loading}
          metricsError={error}
        />
      </Box>
    </ThemeProvider>
  )
}
