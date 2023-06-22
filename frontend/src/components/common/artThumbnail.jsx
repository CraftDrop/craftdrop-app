const ArtThumbnail = ({ image }) => {
  return (
    <div className="bg-gray-200 rounded-lg w-16">
      <img
        className="w-full h-[4rem] rounded-lg object-cover"
        src={image}
        alt="Thumbnail"
      />
    </div>
  );
};

export default ArtThumbnail;
