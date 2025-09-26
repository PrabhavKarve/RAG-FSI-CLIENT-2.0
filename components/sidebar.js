"use client"

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material"
import './styles/main.css'

const drawerWidth = 280

export default function Sidebar({ activeSection, setActiveSection, onCompanySelect }) {

  const navigationItems = [
    { id: "home", name: "Home Page", logo: "🏠", color: "#6366f1", isHome: true },
    { name: "Tata Motors", logo: "🚗", color: "#ec4899" },
    { name: "Reliance", logo: "🏭", color: "#10b981" },
    { name: "Infosys", logo: "💻", color: "#f59e0b" },
    { name: "TCS", logo: "🔧", color: "#ef4444" },
    { name: "HDFC", logo: "🏦", color: "#8b5cf6" },
    { name: "ITC", logo: "📦", color: "#06b6d4" },
    { name: "HCL", logo: "⚡", color: "#84cc16" },
    { name: "Bajaj Finance", logo: "💰", color: "#f97316" },
    { name: "L&T", logo: "🏗️", color: "#f59e0b" },
  ]

  return (
    <Drawer
      variant="permanent"
      className="sidebar"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "linear-gradient(180deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)",
          color: "white",
          border: "none",
          boxShadow: "4px 0 20px rgba(0, 0, 0, 0.15)",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)",
            pointerEvents: "none",
          }
        },
      }}
    >
      {/* App Title */}
      <div className="sidebar-title">
        <Typography variant="h5" component="h1" className="sidebar-app-name">
          RAG-FSI
        </Typography>
        <Typography variant="body2" className="sidebar-subtitle">
          Financial Intelligence
        </Typography>
      </div>

      {/* Navigation List */}
      <List className="sidebar-nav">
        {navigationItems.map((item) => {
          const itemId = item.isHome ? "home" : item.name.toLowerCase().replace(/\s+/g, '-')
          const isSelected = activeSection === itemId
          return (
            <ListItem key={item.name} disablePadding className="sidebar-nav-item">
              <ListItemButton
                onClick={() => {
                  setActiveSection(itemId)
                  if (!item.isHome && onCompanySelect) {
                    onCompanySelect(item.name) // 🚀 Pass company name to parent
                  }
                }}
                selected={isSelected}
                className={`sidebar-nav-button ${isSelected ? 'selected' : ''}`}
                data-color={item.color.replace('#', '')}
                sx={{
                  borderRadius: 3,
                  py: 1.5,
                  px: 2,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: isSelected 
                      ? `linear-gradient(135deg, ${item.color}20 0%, ${item.color}10 100%)`
                      : "transparent",
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "transparent",
                    "&::before": {
                      background: `linear-gradient(135deg, ${item.color}30 0%, ${item.color}20 100%)`,
                    },
                    "&:hover::before": {
                      background: `linear-gradient(135deg, ${item.color}40 0%, ${item.color}30 100%)`,
                    },
                  },
                  "&:hover": { 
                    backgroundColor: "transparent",
                    "&::before": {
                      background: isSelected 
                        ? `linear-gradient(135deg, ${item.color}40 0%, ${item.color}30 100%)`
                        : "rgba(255, 255, 255, 0.1)",
                    },
                  },
                }}
              >
                <ListItemIcon 
                  className={`sidebar-nav-icon ${isSelected ? 'selected' : ''}`}
                  data-color={item.color.replace('#', '')}
                  sx={{ 
                    color: isSelected ? item.color : "rgba(255, 255, 255, 0.8)", 
                    minWidth: 44,
                    transition: "all 0.3s ease",
                    fontSize: "1.5rem"
                  }}
                >
                  {item.logo}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  className={`sidebar-nav-text ${isSelected ? 'selected' : ''}`}
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: isSelected ? "white" : "rgba(255, 255, 255, 0.9)",
                      fontSize: "0.95rem",
                      fontWeight: isSelected ? 600 : 500,
                      transition: "all 0.3s ease"
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Drawer>
  )
}
