import { ExpandMore, Search } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Icon,
  styled,
  TextField,
} from "@mui/material";
import { Breadcrumb } from "app/components";
import { FlexAlignCenter } from "app/components/FlexBox";
import { H1, H4, Paragraph } from "app/components/Typography";
import { Fragment, useState } from "react";

// styled components
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const StyledButton = styled(Button)({
  boxShadow: "none",
  paddingLeft: "28px",
  paddingRight: "28px",
  borderRadius: "300px",
});

const Heading = styled(H1)({
  fontSize: "40px",
  fontWeight: "500",
  textAlign: "center",
  marginBottom: "32px",
});

const StyledP = styled(Paragraph)(({ theme }) => ({
  fontSize: "16px",
  textAlign: "center",
  marginBottom: "64px",
  color: theme.palette.text.secondary,
}));

const StyledCard = styled(Card)(({ theme, index, tabIndex }) => ({
  margin: "8px",
  display: "flex",
  cursor: "pointer",
  padding: "22px 32px",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  border: `1px solid ${index === tabIndex ? theme.palette.primary.main : "transparent"}`,
  transition: "all 200ms ease-in",
  "& .icon": {
    fontSize: "40px",
    marginBottom: "8px",
    transition: "all 200ms ease-in",
    color: index === tabIndex && theme.palette.primary.main,
  },
}));

const Faq1 = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleExpansionClick = (ind) => {
    if (ind === expandedIndex) setExpandedIndex(-1);
    else setExpandedIndex(ind);
  };

  return (
    <Container>
      <div className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Pages", path: "/faq" }, { name: "Property Reports" }]} />
      </div>

      <FlexAlignCenter py={8} flexDirection="column">
        <Heading>Property Reports</Heading>
        
      </FlexAlignCenter>

      <StyledP>Browse by category</StyledP>

      <Box mb={4}>
        <FlexAlignCenter m={-1} flexWrap="wrap">
          {categoryList.map((item, ind) => (
            <StyledCard index={ind} tabIndex={tabIndex} key={ind} onClick={() => setTabIndex(ind)}>
              <Icon className="icon">{item.icon}</Icon>
              <H4>{item.title}</H4>
            </StyledCard>
          ))}
        </FlexAlignCenter>
      </Box>

      <Fragment>
        {categoryList[tabIndex].questionList?.map((item, ind) => (
          <Accordion
            key={ind}
            elevation={0}
            expanded={expandedIndex === ind}
            onClick={() => handleExpansionClick(ind)}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>{item.question}</AccordionSummary>

            <AccordionDetails>{item.answer}</AccordionDetails>
          </Accordion>
        ))}
      </Fragment>
    </Container>
  );
};

const categoryList = [
  {
    icon: "home",
    title: "Property Report",
    questionList: [
      {
        question: "2023 Property Report",
        answer: " 2023 Property Report .pdf",
      },
      {
        question: "2022 Property Report",
        answer:
          " 2022 Property Report .pdf",
      },
      {
        question: "2021 Property Report",
        answer:
          " 2021 Property Report .pdf",
      },
      {
        question: "2020 Property Report",
        answer:
          " 2020 Property Report .pdf",
      },
      {
        question: "2019 Property Report",
        answer:
          " 2019 Property Report .pdf",
      },
      {
        question: "2018 Property Report",
        answer:
          " 2018 Property Report .pdf",
        
      },
    ],
  },
  {
    icon: "layers",
    title: "Asset Report",
    questionList: [
      {
        question: "2023 Asset Report",
        answer: " 2023 Asset Report .pdf",
      },
      {
        question: "2022 Asset Report",
        answer:
          " 2022 Asset Report .pdf",
      },
      {
        question: "2021 Asset Report",
        answer:
          " 2021 Asset Report .pdf",
      },
      {
        question: "2020 Asset Report",
        answer:
          " 2020 Asset Report .pdf",
      },
      {
        question: "2019 Asset Report",
        answer:
          " 2019 Asset Report .pdf",
      },
      {
        question: "2018 Asset Report",
        answer:
          " 2018 Asset Report .pdf",
        
      },
    ],
  },
  {
    icon: "contact_support",
    title: "Rental Report",
    questionList: [
      {
        question: "2023 Rental Report",
        answer: " 2023 Rental Report .pdf",
      },
      {
        question: "2022 Rental Report",
        answer:
          " 2022 Rental Report .pdf",
      },
      {
        question: "2021 Rental Report",
        answer:
          " 2021 Rental Report .pdf",
      },
      {
        question: "2020 Rental Report",
        answer:
          " 2020 Rental Report .pdf",
      },
      {
        question: "2019 Rental Report",
        answer:
          " 2019 Rental Report .pdf",
      },
      {
        question: "2018 Rental Report",
        answer:
          " 2018 Rental Report .pdf",
        
      },
    ],
  },
  {
    icon: "360",
    title: "Documents",
    questionList: [
      {
        question: "Lease Agreement",
        answer: "Open command line in your project's root directory and type yarn and hit enter",
      },
      {
        question: "Occupants Documents",
        answer: "Open command line in your project's root directory and type yarn and hit enter",
      },
    ],
  },
];

export default Faq1;
