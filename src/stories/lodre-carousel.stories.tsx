import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Grid, LodreCarousel } from "../components";
import { LodreCarouselProps } from "../components/lodre-carousel";

export default {
  title: "Components/Lodre Carousel",
  component: LodreCarousel,
} as Meta;

const Template: Story<LodreCarouselProps> = (args) => (
  <Grid xl="600px" lg="600px">
    <LodreCarousel {...args} />
  </Grid>
);

export const PrimaryCarousel = Template.bind({});
PrimaryCarousel.args = {
  height: "400px",
  timeout: 4000,
  showButtons: false,
  showThumbs: false,
  showIndicators: true,
  pictures: [
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    "https://images.unsplash.com/photo-1571779719707-0f24f62ab4fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80",
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1594403032032-ad7ef5de664b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80",
    "https://images.unsplash.com/photo-1556228841-a3c527ebefe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80",
    "https://images.unsplash.com/photo-1556228453-88817fa8ad90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1556227997-e90840afbf40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  ],
};
