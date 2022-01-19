import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Grid, LodreCarousel } from "../components";
import { Carousel } from "react-responsive-carousel";
import { LodreCarouselProps } from "../components/lodre-carousel";

export default {
  title: "Components/Lodre Carousel",
  component: Carousel,
} as Meta;

const Template: Story<LodreCarouselProps> = (args) => (
  <Grid xl="600px" lg="600px">
    <LodreCarousel {...args} />
  </Grid>
);

export const PrimaryCarousel = Template.bind({});
PrimaryCarousel.args = {
  autoPlay: true,
  showThumbs: false,
  interval: 3000,
  pictures: [
    {
      url: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      legend: "Picture",
    },
    {
      url: "https://images.unsplash.com/photo-1571779719707-0f24f62ab4fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80",
      legend: "Picture",
    },
    {
      url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      legend: "Picture",
    },
  ],
};
