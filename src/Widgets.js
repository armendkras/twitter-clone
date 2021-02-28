import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
  TwitterShareButton,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1354618504532684802"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          option={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/elonreeve.musk.338"}
          options={{ text: "#reactjs is  awesome", via: "Elon Musk" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
