const Button = ({ socialLinks }) => {
  return (
    <>
      {socialLinks.map((link, index) => (
        <button type="button" key={index} href={link.url} className="btn">
          {link.name}
        </button>
      ))}
    </>
  );
};
export default Button;
