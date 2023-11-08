import VideoCard from "./VideoCard";

function Video() {

    const imageUrl = [
        {
            id: "v1",
            path: "/Gallery_Images/Video/overview.JPG",
            videolink: "https://www.youtube.com/watch?v=sRgX1uhyqkU",
            name: "Overview",
          },
        {
          id: "v2",
          path: "/Gallery_Images/Video/teachingmethodology.JPG",
          videolink: "https://www.youtube.com/shorts/nZ1JYqiodA8",
          name: "Teaching Methodology",
        },
        {
          id: "v3",
          path: "/Gallery_Images/Video/saw15.JPG",
          videolink: "https://www.youtube.com/shorts/bB9BMncITdc",
          name: "Sports and Wellness",
        },
        {
          id: "v4",
          path: "/Gallery_Images/Video/directors-message.jpg",
          videolink: "https://www.youtube.com/shorts/GM98FpqVRYU",
          name: "Director's Vision",
        },
        {
          id: "v5",
          path: "/Gallery_Images/Video/jis.jpg",
          videolink: "https://www.youtube.com/watch?v=zTjiERtQRv4&t=14s",
          name: "Our Parent's School",
        }
        
    ]

  return (
    <>
      <div className="background-color-gallery">
        <div className="wrapper-gallery">
          <h1 className="main-heading-gallery_title">Videos</h1>
          <div className="card-container">
            {imageUrl.map((image, index) => (
              <VideoCard
                key={index}
                videolink={image.videolink}
                path={image.path}
                name={image.name}
                // googlePictures={googlePictures}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
