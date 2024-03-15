const express = require("express");
const {
  ytdown,
  tikdown,
  ndown,
  twitterdown,
  fbdown,
} = require("nayan-media-downloader");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
const port = 3000;

app.listen(port, () => {
  console.log("The Server is live on port " + port);
});

app.get("/", (req, res) => {
  let obj = {
    Name: "Wiz Downloader",
    API: "Express API ",
    status: "Live",
    Developer: "Arbab Hassan",

    Source_Code: "https://github.com/arbabhassan1",
    Contact: "https://arbabhassan.bio.link",
  };
  res.json(obj);
});

app.post("/fetch", async (req, res) => {
  let { url, media } = req.body;
  //   // console.log(url, media);

  //   const videodata = await getdata(url, media);
  //   console.log(videodata);

  //   res.json(videodata, media);

  try {
    const videodata = await getdata(url, media);
    let mystatus = videodata.status;

    // Structure the response object with both videodata and media
    const responseObject = {
      videodata: videodata,
      media: media,
      status: mystatus,
    };

    // Send the response as JSON
    res.json(responseObject);
  } catch (error) {
    console.error("Error:", error);

    // Send an error response
    res.status(500).json({ error: "Internal Server Error" });
  }
});

async function getdata(url, media) {
  switch (media) {
    case "youtube":
      let youtube = await ytdown(url);
      console.log(youtube);
      return youtube;
      break;
    case "facebook":
      let facebook = await ndown(url);
      //  console.log(facebook);
      return facebook;
      break;
    case "instagram":
      let instagram = await ndown(url);
      //  console.log(instagram);
      return instagram;
      break;
    case "tiktok":
      let tiktok = await tikdown(url);
      //   console.log(tiktok);
      return tiktok;
      break;
    case "twitter":
      let twitter = await twitterdown(url);
      //  console.log(twitter);
      return twitter;
      break;

    default:
      return null;
      break;
  }
}
