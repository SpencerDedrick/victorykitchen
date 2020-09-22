import React from "react";
import CardItem from "../CardItem";

import "../../App.css";

export default function Volunteer() {
  return (
    <>
      <h1 className="volunteer">VOLUNTEER</h1>;
      <div className="volunteer_card_wrapper">
        <CardItem
          src={require("../../Assets/Photo15.jpeg")}
          text=" You can still purchase a shirt from VK! So far we have raised $100+ from your purchases! You can also help me to raise awareness by taking a selfie in your VK shirt and send it to me by this Wednesday!"
          label="Fundraiser!"
          path="/"
        />
        <CardItem
          src={require("../../Assets/Photo16.jpeg")}
          text="Serving 50+ lunch for those displaced by Hurricane Laura. 
-Needs: 1 volunteer for dessert or side dish  
-2-3 volunteers to help package/transport 
-1 prayer partner"
          label="September 25th"
          path="/"
        />
        <CardItem
          src={require("../../Assets/photo11.jpg")}
          text="11am-12:30 pm:
-sort and package Bibles and toiletries for street ministries. (5-6 volunteers)
-1 volunteer to pick up food items for street ministries"
          label="October 3"
          path="/"
        />
        <CardItem
          src={require("../../Assets/Photo14.jpeg")}
          text="
5:00 pm-7:30 pm Dinner at Hope Impacts. 
-(5 volunteers) Serve meals, interact with community, prayer as needed.
-1-2 volunteers to help me cook/ or prepare a dessert"
          label="October 6"
          path="/"
        />
      </div>
      ;
    </>
  );
}
