import PersonWidget from "./PersonWidget";

const Sidebar = () => {
  return (
    <div className="w-[20vw] h-[screen] border border-black border-r-0 flex flex-col items-center justify-center">
      <PersonWidget
        name="Linus Gordon"
        industry="Food"
        age={23}
        country="🇧🇮"
        profilePicture="https://qph.cf2.quoracdn.net/main-qimg-134e3bf89fff27bf56bdbd04e7dbaedf.webp"
      />
      <PersonWidget
        name="Georgina Kirabo"
        industry="Medicine"
        age={40}
        country="🇦🇽"
        profilePicture="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos.jpg"
      />
      <PersonWidget
        name="Ben Jerry Odong"
        industry="Medicine"
        age={40}
        country="🇩🇲"
        profilePicture="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBtYW58ZW58MHx8MHx8&w=1000&q=80"
      />
    </div>
  );
};

export default Sidebar;
