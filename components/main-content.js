"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  TextField,
  Paper,
  IconButton,
  Container,
} from "@mui/material"
import { Send } from "@mui/icons-material"
import { gql, useLazyQuery } from "@apollo/client"
import './styles/main.css'
import {
  MainContainer,
  Header,
  HeaderTitle,
  ContentContainer,
  SearchContainer,
  SendButton,
  MessageContainer,
  MessageQuestionContainer,
  MessageAnswerContainer,
  MessageBubbleQuestion,
  MessageBubbleAnswer,
  MessageTextQuestion,
  MessageTextAnswer,
  DashboardContainer,
  DashboardPaper,
  DashboardHeader,
  DashboardTitle,
  DashboardSubtitle,
  DashboardGrid,
  MetricCard,
  MetricHeader,
  MetricIcon,
  MetricIconText,
  MetricTitle,
  MetricContent,
  MetricItem,
  MetricItemName,
  MetricItemValue,
  MetricItemDescription,
} from './styles/StyledComponents'

// GraphQL query to send question and receive answer
const ASK_QUERY = gql`
  query Ask($question: String!) {
    askQuestion(question: $question)
  }
`


const companies = [
  { name: "Tata Motors", logo: "🚗" },
  { name: "Reliance", logo: "🏭" },
  { name: "Infosys", logo: "💻" },
  { name: "TCS", logo: "🔧" },
  { name: "HDFC", logo: "🏦" },
  { name: "ITC", logo: "📦" },
  { name: "HCL", logo: "⚡" },
  { name: "Bajaj Finance", logo: "💰" },
  { name: "L&T", logo: "🏗️" },
]

export default function MainContent({ activeSection, companyMetrics, metricsLoading, metricsError }) {
  const [question, setQuestion] = useState("")
  const [homeMessages, setHomeMessages] = useState([
    {
      id: 1,
      question: "Enter your sample Question in text box above",
      answer:
        "Answer to the sample question. This is a placeholder answer to demonstrate the UI.",
    },
  ])
  const [companyMessages, setCompanyMessages] = useState([])
  const [lastActiveSection, setLastActiveSection] = useState(activeSection)

  // Clear company messages when switching between different companies
  if (activeSection !== lastActiveSection && activeSection !== "home") {
    setCompanyMessages([])
    setLastActiveSection(activeSection)
  }

  const [askQuery] = useLazyQuery(ASK_QUERY, { fetchPolicy: "no-cache" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!question.trim()) return

    const isHomePage = activeSection === "home"
    const currentMessages = isHomePage ? homeMessages : companyMessages
    const setCurrentMessages = isHomePage ? setHomeMessages : setCompanyMessages

    try {
      const { data } = await askQuery({ variables: { question } })

      const newMessage = {
        id: currentMessages.length + 1,
        question: question,
        answer: data?.askQuestion || "No answer returned.",
      }

      setCurrentMessages([...currentMessages, newMessage])
      setQuestion("")
    } catch (error) {
      console.error("GraphQL error:", error)
      const newMessage = {
        id: currentMessages.length + 1,
        question: question,
        answer: "There was an error processing your question.",
      }
      setCurrentMessages([...currentMessages, newMessage])
      setQuestion("")
    }
  }

  const getSectionTitle = () => {
    // If it's a company name, format it nicely
    if (activeSection && !["home", "balance-sheet", "cash-flow", "pnl"].includes(activeSection)) {
      return activeSection.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    }
    
    switch (activeSection) {
      case "home":
        return "Home Page"
      case "balance-sheet":
        return "Balance Sheet Analysis"
      case "cash-flow":
        return "Cash Flow Analysis"
      case "pnl":
        return "Profit & Loss Analysis"
      default:
        return "Financial Analysis"
    }
  }


  const renderContent = () => {
    // Show company grid on home page
    if (activeSection === "home") {
      return (
        <Container maxWidth="lg" className="container-main">
          {/* Search Input */}
          <SearchContainer component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Ask anything about financial data..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              InputProps={{
                endAdornment: (
                  <SendButton type="submit">
                    <Send />
                  </SendButton>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 4,
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                  },
                  "&.Mui-focused": {
                    boxShadow: "0 12px 40px rgba(99, 102, 241, 0.2)",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  py: 2,
                  fontSize: "1rem",
                },
              }}
            />
          </SearchContainer>

          {/* Example Messages */}
          <MessageContainer>
            {homeMessages.map((message) => (
              <Box key={message.id} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {/* Question */}
                <MessageQuestionContainer>
                  <MessageBubbleQuestion>
                    <MessageTextQuestion variant="body1">
                      {message.question}
                    </MessageTextQuestion>
                  </MessageBubbleQuestion>
                </MessageQuestionContainer>

                {/* Answer */}
                <MessageAnswerContainer>
                  <MessageBubbleAnswer>
                    <MessageTextAnswer variant="body1">
                      {message.answer}
                    </MessageTextAnswer>
                  </MessageBubbleAnswer>
                </MessageAnswerContainer>
              </Box>
            ))}
          </MessageContainer>
        </Container>
      )
    }

    // Show company metrics with Q&A bar for company pages
    return (
      <Container maxWidth="lg" className="container-main">
        {/* Q&A Search Input */}
        <SearchContainer component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder={`Ask anything about ${getSectionTitle()}'s financial data...`}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            InputProps={{
              endAdornment: (
                <SendButton type="submit">
                  <Send />
                </SendButton>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 4,
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                },
                "&.Mui-focused": {
                  boxShadow: "0 12px 40px rgba(99, 102, 241, 0.2)",
                },
              },
              "& .MuiOutlinedInput-input": {
                py: 2,
                fontSize: "1rem",
              },
            }}
          />
        </SearchContainer>


        {/* Company Metrics Display */}
        {companyMetrics && (
          <DashboardContainer>
            <DashboardPaper>
              {/* Header */}
              <DashboardHeader>
                <DashboardTitle variant="h4">
                   Financial Dashboard
                </DashboardTitle>
                <DashboardSubtitle variant="h6">
                  {getSectionTitle()}
                </DashboardSubtitle>
              </DashboardHeader>

              <DashboardGrid>
                {/* Balance Sheet */}
                {companyMetrics.balanceSheet && (
                  <MetricCard cardType="balance">
                    <MetricHeader>
                      <MetricIcon cardType="balance">
                        <MetricIconText variant="h6">💰</MetricIconText>
                      </MetricIcon>
                      <MetricTitle variant="h6">
                        Balance Sheet
                      </MetricTitle>
                    </MetricHeader>
                    <MetricContent cardType="balance">
                      {companyMetrics.balanceSheet.map((item, index) => (
                        <MetricItem key={index} cardType="balance">
                          <MetricItemName variant="body1">
                            {item.name}
                          </MetricItemName>
                          <MetricItemValue variant="h6" cardType="balance">
                            {item.value}
                          </MetricItemValue>
                          <MetricItemDescription variant="body2">
                            {item.description || "Financial metric representing key balance sheet data for comprehensive analysis and decision making."}
                          </MetricItemDescription>
                        </MetricItem>
                      ))}
                    </MetricContent>
                  </MetricCard>
                )}

                {/* P&L */}
                {companyMetrics.pnl && (
                  <MetricCard cardType="pnl">
                    <MetricHeader>
                      <MetricIcon cardType="pnl">
                        <MetricIconText variant="h6">📈</MetricIconText>
                      </MetricIcon>
                      <MetricTitle variant="h6">
                        Profit & Loss
                      </MetricTitle>
                    </MetricHeader>
                    <MetricContent cardType="pnl">
                      {companyMetrics.pnl.map((item, index) => (
                        <MetricItem key={index} cardType="pnl">
                          <MetricItemName variant="body1">
                            {item.name}
                          </MetricItemName>
                          <MetricItemValue variant="h6" cardType="pnl">
                            {item.value}
                          </MetricItemValue>
                          <MetricItemDescription variant="body2">
                            {item.description || "Profit and loss metric indicating revenue performance and operational efficiency for strategic planning."}
                          </MetricItemDescription>
                        </MetricItem>
                      ))}
                    </MetricContent>
                  </MetricCard>
                )}

                {/* Cash Flow */}
                {companyMetrics.cashflow && (
                  <MetricCard cardType="cashflow">
                    <MetricHeader>
                      <MetricIcon cardType="cashflow">
                        <MetricIconText variant="h6">💸</MetricIconText>
                      </MetricIcon>
                      <MetricTitle variant="h6">
                        Cash Flow
                      </MetricTitle>
                    </MetricHeader>
                    <MetricContent cardType="cashflow">
                      {companyMetrics.cashflow.map((item, index) => (
                        <MetricItem key={index} cardType="cashflow">
                          <MetricItemName variant="body1">
                            {item.name}
                          </MetricItemName>
                          <MetricItemValue variant="h6" cardType="cashflow">
                            {item.value}
                          </MetricItemValue>
                          <MetricItemDescription variant="body2">
                            {item.description || "Cash flow metric showing liquidity position and operational cash generation for financial stability assessment."}
                          </MetricItemDescription>
                        </MetricItem>
                      ))}
                    </MetricContent>
                  </MetricCard>
                )}

                {/* Cross Statement */}
                {companyMetrics.crossStatement && (
                  <MetricCard cardType="cross">
                    <MetricHeader>
                      <MetricIcon cardType="cross">
                        <MetricIconText variant="h6">🔄</MetricIconText>
                      </MetricIcon>
                      <MetricTitle variant="h6">
                        Cross Statement
                      </MetricTitle>
                    </MetricHeader>
                    <MetricContent cardType="cross">
                      {companyMetrics.crossStatement.map((item, index) => (
                        <MetricItem key={index} cardType="cross">
                          <MetricItemName variant="body1">
                            {item.name}
                          </MetricItemName>
                          <MetricItemValue variant="h6" cardType="cross">
                            {item.value}
                          </MetricItemValue>
                          <MetricItemDescription variant="body2">
                            {item.description || "Cross-statement analysis metric providing insights into financial relationships and performance indicators across multiple reports."}
                          </MetricItemDescription>
                        </MetricItem>
                      ))}
                    </MetricContent>
                  </MetricCard>
                )}
              </DashboardGrid>
            </DashboardPaper>
          </DashboardContainer>
        )}

        {/* Company Messages - Show Q&A history for company pages */}
        {companyMessages.length > 0 && (
          <MessageContainer>
            <Typography variant="h6" sx={{ 
              color: "#1f2937", 
              fontWeight: 600, 
              mb: 3,
              textAlign: "center"
            }}>
              Q&A History for {getSectionTitle()}
            </Typography>
            {companyMessages.map((message) => (
              <Box key={message.id} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {/* Question */}
                <MessageQuestionContainer>
                  <MessageBubbleQuestion>
                    <MessageTextQuestion variant="body1">
                      {message.question}
                    </MessageTextQuestion>
                  </MessageBubbleQuestion>
                </MessageQuestionContainer>

                {/* Answer */}
                <MessageAnswerContainer>
                  <MessageBubbleAnswer>
                    <MessageTextAnswer variant="body1">
                      {message.answer}
                    </MessageTextAnswer>
                  </MessageBubbleAnswer>
                </MessageAnswerContainer>
              </Box>
            ))}
          </MessageContainer>
        )}

        {/* Loading State */}
        {metricsLoading && (
          <div className="loading-container">
            <div className="loading-icon">
              <div className="loading-spinner">
                <div className="loading-spinner-outer"></div>
                <div className="loading-spinner-inner"></div>
              </div>
            </div>
            <div className="loading-text">
              <Typography variant="h5" className="loading-title">
                Loading {getSectionTitle()} Data
              </Typography>
              <Typography variant="body1" className="loading-subtitle">
                Fetching comprehensive financial metrics and analysis...
              </Typography>
              <div className="loading-dots">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {metricsError && (
          <div className="error-container">
            <Paper elevation={0} className="error-paper">
              <Typography variant="body1" className="error-text">
                ❌ Error loading company metrics: {metricsError.message}
              </Typography>
            </Paper>
          </div>
        )}

        {/* Empty State for Company Pages */}
        {!companyMetrics && !metricsLoading && !metricsError && (
          <div className="empty-container">
            <div className="empty-icon">
              <Typography variant="h2" className="empty-icon-text">
                📊
              </Typography>
            </div>
            <Typography variant="h5" className="empty-title">
              {getSectionTitle()} Analysis
            </Typography>
            <Typography variant="body1" className="empty-subtitle">
              Company metrics will be displayed here once data is loaded.
            </Typography>
          </div>
        )}
      </Container>
    )
  }

  return (
    <MainContainer>
      {/* Header */}
      <Header>
        <HeaderTitle variant="h4" component="h1">
          {getSectionTitle()}
        </HeaderTitle>
      </Header>

      {/* Main Content */}
      <ContentContainer>
        {renderContent()}
      </ContentContainer>
    </MainContainer>
  )
}
