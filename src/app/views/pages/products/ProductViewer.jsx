import { Card, Divider, Grid, Icon, styled, useTheme } from "@mui/material";
import { AddToCartButton, Breadcrumb } from "app/components";
import { FlexAlignCenter } from "app/components/FlexBox";
import { H4, H5, Paragraph, Span } from "app/components/Typography";
import { useState } from "react";

// styled components
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const ProductCard = styled(Card)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
});

const IMG = styled("img")({
  padding: 32,
  maxWidth: 550,
  width: "100%",
});

const CallBox = styled("div")({
  display: "flex",
  marginBottom: 16,
  alignItems: "center",
});

const ThumbImg = styled("img")({
  width: 80,
  marginLeft: 2,
  marginRight: 2,
  borderRadius: "4px",
});

const ProductViewer = () => {
  const [selectedImage, setSelectedImage] = useState("/assets/images/1.png");

  const theme = useTheme();

  const primary = theme.palette.primary.main;
  const secondary = theme.palette.text.secondary;

  return (
    <Container>
      <Container>
        <Breadcrumb routeSegments={[{ name: "Pages", path: "/pages" }, { name: "View Product" }]} />
      </Container>

      <Card sx={{ px: 4, py: 4 }} elevation={3}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <ProductCard>
              <IMG src={selectedImage} alt="laptop" />

              <FlexAlignCenter gap={2} py={2}>
                {imageList.map((imgUrl) => (
                  <ThumbImg
                    src={imgUrl}
                    alt="laptop"
                    key={imgUrl}
                    url={imgUrl}
                    onClick={() => setSelectedImage(imgUrl)}
                  />
                ))}
              </FlexAlignCenter>
            </ProductCard>
          </Grid>

          <Grid item md={6} xs={12}>
            <H4 sx={{ mt: 0, mb: 2 }}>Thuli Carbon Research Project</H4>
            <Paragraph sx={{ mt: 0, mb: 1, color: secondary }}>SKU: 0X50F0D</Paragraph>

            <Paragraph sx={{ mt: 0, mb: 2 }}>
              <Span sx={{ color: secondary }}>COMPANY: </Span>
              <Span sx={{ color: primary }}>ITHOMA GROUPS</Span>
            </Paragraph>

            <Paragraph sx={{ mt: 0, mb: 2 }}>
              <Span sx={{ color: secondary }}>PROJECT LEADER: </Span>
              <Span sx={{ color: primary }}>Thomas Jeffery</Span>
            </Paragraph>

            <Paragraph sx={{ mt: 0, mb: 2 }}>
              <Span sx={{ color: secondary }}>BUDGET: </Span>
              <Span sx={{ color: primary }}>R 1,300,000</Span>
            </Paragraph>

            <Divider sx={{ mb: 2 }} />

            <Divider sx={{ mb: 2 }} />

            <Paragraph sx={{ mt: 0, mb: 1, color: secondary, fontWeight: "500" }}>
              Want to report an incident
            </Paragraph>

            <CallBox>
              <Icon sx={{ mr: 1 }} fontSize="small" color="primary">
                call
              </Icon>
              <H5 sx={{ m: 0, color: primary }}>019638111777</H5>
            </CallBox>

            <Divider sx={{ mb: 2 }} />

            <H4 sx={{ mt: 0, mb: 2 }}>Project Specification</H4>

            <p>
              Across the world, cities are expanding rapidly in a race for space – with no clear finish line in sight. This is particularly true for African cities characterised by an ever-increasing, low-density urban footprint and growth shapes that are distinctly outwards-facing and often informal.

With the urgent need for global cities to achieve net zero, this urban sprawl presents a major challenge to decarbonisation. Driven by short-term goals, the rapid development of low-cost locations in suburban peripheries has paved the way for inefficient city layouts. These types of urban configurations are increasing embodied carbon levels in the built environment, while distancing households from more sustainable transport options and locking inhabitants into carbon intensive lifestyles.
            </p>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

const imageList = [
  "/assets/images/1.png",
  "/assets/images/4.png",
  "/assets/images/3.png",
];
export default ProductViewer;
