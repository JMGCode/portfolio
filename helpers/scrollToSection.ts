const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  // const offsetHeight = document.body.scrollHeight - section!!.scrollHeight - 96;

  window.scrollTo({
    top: (section?.offsetTop || 0) - 96,
    behavior: "smooth",
  });
};

export default scrollToSection;
