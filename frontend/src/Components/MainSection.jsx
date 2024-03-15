import React, { useState } from "react";
import Loading from "./Loading";
import axios from "axios";
import twitterlogo from "../assets/twitter.gif";
import downloadIcon from "../assets/download.svg";
const MainSection = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [albumImg, setAlbumImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [showAlbumPhoto, setShowAlbumPhoto] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [showInputForm, setShowInputForm] = useState(true);
  const [mediaServer, setMediaServer] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let getMedia = getPlatform();
    setMediaServer(getMedia);
    console.log(inputUrl, getMedia);
    let serverurl = "http://localhost:3000/fetch";

    axios
      .post(serverurl, { url: inputUrl, media: getMedia })
      .then(async (response) => {
        // Handle the successful response data

        const ServerData = await response.data;
        const serverMedia = ServerData.media;
        console.log(ServerData, serverMedia);
        switch (serverMedia) {
          case "youtube":
            let youtubedata = ServerData.videodata.data;

            setAlbumImg(youtubedata.picture);
            setDownloadUrl(youtubedata.video);
            // console.log(albumImg, downloadUrl);

            break;
          case "facebook":
            let facebookData = ServerData.videodata.data[0];
            setAlbumImg(facebookData.thumbnail);
            setDownloadUrl(facebookData.url);
            //  console.log(albumImg, downloadUrl);
            break;
          case "instagram":
            let instagramData = ServerData.videodata.data[0];
            setAlbumImg(instagramData.thumbnail);
            setDownloadUrl(instagramData.url);
            // console.log(albumImg, downloadUrl);
            break;
          case "tiktok":
            let tiktokData = ServerData.videodata.data;
            setAlbumImg(tiktokData.author.avatar);
            setDownloadUrl(tiktokData.video);
            // console.log(albumImg, downloadUrl);
            break;
          case "twitter":
            let twitterData = ServerData.videodata.data;
            // console.log(twitterData);
            setAlbumImg(twitterlogo);
            setDownloadUrl(twitterData.HD);
            // console.log(albumImg, downloadUrl);
            break;
        }

        setShowAlbumPhoto(true);
        setShowInputForm(false);
        setShowDownloadButton(true);

        setIsLoading(false);
      })
      .catch((error) => {
        // Handle errors during the request
        console.error("Error:", error);
        setIsLoading(false);
      });
  };

  const getPlatform = () => {
    const option = document.getElementById("site");
    let optionval = option.value;
    return optionval;
  };

  return isLoading ? (
    <Loading />
  ) : (
    <section className="flex items-center justify-center flex-col py-10 px-5">
      <div
        className="max-w-[500px] max-h-[300px] h-auto overflow-hidden  "
        style={{ display: showAlbumPhoto ? "block" : "none" }}
      >
        <img
          src={albumImg}
          alt="Album Art"
          className="w-full h-full object-cover rounded"
        />
      </div>

      <form
        onSubmit={handelSubmit}
        style={{ display: showInputForm ? "flex" : "none" }}
        className="  w-full max-w-[500px]  items-center justify-center flex-col gap-3"
      >
        <div className="inputbox flex justify-center w-full  items-center gap-1">
          <input
            type="text"
            placeholder="Paste Video Link"
            required
            className="w-full h-fit font-normal px-2 py-3 text-lg rounded-sm "
            onChange={(e) => {
              setInputUrl(e.target.value);
            }}
          />
        </div>

        <div className="flex items-center justify-start w-full gap-3 ">
          <label htmlFor="site">Choose a Social Platform:</label>
          <select name="site" id="site" required>
            <option value="">SELECT</option>
            <option value="youtube">Youtube</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="tiktok">TikTok</option>
            <option value="twitter">Twitter</option>
          </select>
        </div>

        <button className="w-full h-fit font-semibold text-xl bg-green-600 hover:bg-green-700 py-2 rounded-sm  ">
          Fetch Video
        </button>
      </form>

      <br />
      <div
        style={{ display: showDownloadButton ? "block" : "none" }}
        className="bg-green-600 hover:bg-green-700 text-center  max-w-[500px] w-full  py-2  rounded-sm  "
      >
        <a
          href={downloadUrl}
          className="flex flex-wrap  items-center gap-2 font-bold text-xl justify-center"
        >
          <img
            src={downloadIcon}
            alt=""
            className="w-[1.8em] bg-green-700 rounded-full "
          />
          Download {mediaServer} Video
        </a>
      </div>
      <br />
      <a
        style={{ display: showDownloadButton ? "block" : "none" }}
        href="/"
        className=" hover:underline"
      >
        Back to Home
      </a>
    </section>
  );
};

export default MainSection;
